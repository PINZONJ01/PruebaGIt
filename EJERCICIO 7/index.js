const navBoton = document.querySelector(".nav_boton")
const navList = document.querySelector(".nav_list")

navBoton.addEventListener("click", () => {
    navList.classList.toggle("nav_menu_visible")
});