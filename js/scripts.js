'use strict'

function imgSlider(e) {
    document.getElementById('phone').src = e;
}

function circleChange(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}