// HAMBURGER MENU
const openMenuBtn = document.querySelector(".openMenu")
const nav = document.querySelector(".navFlex");
const closeMenuBtn = document.querySelector(".exitMenu");

console.log(closeMenuBtn);

openMenuBtn.addEventListener('click', () => {
    const anchorTags = document.querySelectorAll("li");

    nav.style.display = "inline";
    openMenuBtn.style.display = "none";

    anchorTags.addEventListener('click', () => {
        nav.style.display = "none";
        openMenuBtn.style.display = "inline";
    })
});

closeMenuBtn.addEventListener('click', () => {
    nav.style.display = "none";
    openMenuBtn.style.display = "inline";
});
