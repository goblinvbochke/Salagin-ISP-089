
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

const slider = (element, param) => {
    element.addEventListener('click', () => {
        const sliderLine = document.querySelector('.our-project__center-block');
        let step = 0;
        if(param == prev) {
            step = step - 570;
            sliderLine.style.left = step + 'px';
        }
        if(param == next) {
            sliderLine.style.left = step + 'px';
        }
        console.log(step);
    });
}

slider(prevButton, prev);
slider(nextButton, next);