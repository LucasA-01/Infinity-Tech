const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const linksDosSlides = {
    0: "https://netflix.com",
    1: "https://amazon.com",
    2: "https://github.com"
};

const btnSlider = document.getElementById('slider-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
    btnSlide()
}

function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
    return currentSlide
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
    return currentSlide
}

function btnSlide() {
    btnSlider.href = linksDosSlides[currentSlide];
}

btnSlide()

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
btnSlider.addEventListener('click', btnSlide(currentSlide))