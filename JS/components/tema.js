const btnTema = document.querySelector('.tema');
const body = document.body;
const pages = window.location.pathname.includes('/PAGES/');

btnTema.addEventListener('click', () => {
    body.classList.toggle('light');
    
    if(pages) {
        if(body.classList.contains('light')) {
            btnTema.src = '../ASSETS/ICON/tema-light.png'
        }
        else {
            btnTema.src = '../ASSETS/ICON/tema-escuro.png'
        }
    }
    else {
        if(body.classList.contains('light')) {
            btnTema.src = 'ASSETS/ICON/tema-light.png'
        }
        else {
            btnTema.src = 'ASSETS/ICON/tema-escuro.png'
        }
    }
})