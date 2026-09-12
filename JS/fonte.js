const btnDislexia = document.querySelector('.dislexia');
const html = document.documentElement;

btnDislexia.addEventListener('click', () => {
    html.classList.toggle('dislexo')
});