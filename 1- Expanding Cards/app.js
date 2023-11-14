const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        remoteActiveClasses();
        panel.classList.add("active");
    });
});
const remoteActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};