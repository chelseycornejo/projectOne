// HAMBURGER MENU
const openMenuBtn = document.querySelector(".openMenu")
const nav = document.querySelector(".navFlex");
const closeMenuBtn = document.querySelector(".exitMenu");

openMenuBtn.addEventListener('click', () => {
    nav.style.display = "inline";
    openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener('click', () => {
    nav.style.display = "none";
    openMenuBtn.style.display = "inline";
});
