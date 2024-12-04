let menu_links = document.querySelectorAll("nav ul li a");
let menu_container = document.querySelector(".container-menu");

function change(element) {
    element.classList.toggle("change");
}

menu_container.addEventListener("click", () => {
    if (
        menu_links[0].style.display === "none" ||
        menu_links[0].style.display === ""
    ) {
        menu_links.forEach((link) => {
            link.style.display = "block";
        });
    } else {
        menu_links.forEach((link) => {
            link.style.display = "none";
        });
    }
});
