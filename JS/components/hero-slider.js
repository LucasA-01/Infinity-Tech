let slideAtual = 0;
const slides = document.querySelectorAll(".slider")
let tempo;

function slideOn(index) {
    slides.forEach(slide => slide.classList.remove("on"));

    slides[index].classList.add("on")
}
function iniciar() {
    tempo = setInterval(() => {
        slideAtual = (slideAtual + 1) % slides.length;
        slideOn(slideAtual);
    
    }, 3000);
}

function pausar() {
    clearInterval(tempo);
}

    slides.forEach(slide => {
        slide.addEventListener("mouseenter", pausar);
        slide.addEventListener("mouseleave", iniciar);
    });
iniciar();