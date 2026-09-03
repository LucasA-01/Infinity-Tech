const btnTema = document.querySelector('.tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('light');
    if(body.classList.contains('light')) {
        btnTema.src = '../ASSETS/ICON/tema-claro.png'
    }
    else {
        btnTema.src = '../ASSETS/ICON/tema-escuro.png'
    }
})







