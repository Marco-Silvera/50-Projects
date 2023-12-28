// TMDB API para obtener datos de las peliculas

const API_KEY = 'api_key=0c742a3cb307d6242c481b1e8c892e35';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        // data.resultados trae solo 'resultados' del json y no toda la info completa
        showMovies(data.results);
    })
}

function showMovies(data) {

    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        const roundedVote = vote_average.toFixed(1);

        const displayVote = Number(roundedVote) === Math.floor(vote_average)
            ? Math.floor(vote_average) // Muestra solo el entero.
            : roundedVote;

        movieEl.innerHTML = `
        
        <img src="${IMG_URL + poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(displayVote)}">${displayVote}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>

        `

        main.appendChild(movieEl);

    })
}

function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(searchURL + searchTerm + '&' + API_KEY);

    } else {
        getMovies(API_URL);
    }
})