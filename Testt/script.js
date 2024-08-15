const hamMenu = document.querySelector('.ham-menu');
const off = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    off.classList.toggle('active')
})