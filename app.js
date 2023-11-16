
const sidebar = document.querySelector(".menu-container");
const body = document.querySelector('body');

window.addEventListener("resize", () => {
    setSidebarHeight();
});

function setSidebarHeight() {
    const size = document.body.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (size.width <= 740 && windowHeight <= 610) {
        sidebar.style.minHeight = size.height + "px";
    } else {
        sidebar.style = "";
    }
};