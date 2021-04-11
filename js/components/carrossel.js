const buttonNext = document.querySelector('.button-arrow.-next');
const buttonBack = document.querySelector('.button-arrow.-back')
const elements = document.querySelector('.elements');
var pixels = 0;

buttonNext.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`
});

buttonBack.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`
});