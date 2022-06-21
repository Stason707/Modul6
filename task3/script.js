const LightRed = document.querySelector(".trafficLightRed");
const LightYellow = document.querySelector(".trafficLightYellow");
const LightGreen = document.querySelector(".trafficLightGreen");
const trafficBox = document.querySelector(".trafficLightBox");

trafficBox.addEventListener('click', makeYellow);

function makeYellow() {
    LightYellow.style.background = ('yellow');
    LightRed.style.background = ('rgb(78, 42, 42)');
    LightGreen.style.background = ('rgb(34, 63, 32)');
    trafficBox.removeEventListener('click', makeYellow);
    trafficBox.addEventListener('click', makeGreen);
}

trafficBox.addEventListener('click', makeGreen);

function makeGreen() {
    LightGreen.style.background = ('rgb(78, 255, 58)');
    LightYellow.style.background = ('rgba(149, 136, 41, 0.764)');
    LightRed.style.background = ('rgb(78, 42, 42)');
    trafficBox.removeEventListener('click', makeGreen);
    trafficBox.addEventListener('click', makeRed);
}

trafficBox.addEventListener('click', makeRed);

function makeRed() {
    LightRed.style.background = ('red');
    LightGreen.style.background = ('rgb(34, 63, 32)');
    LightYellow.style.background = ('rgba(149, 136, 41, 0.764)');
    trafficBox.removeEventListener('click', makeRed);
    trafficBox.addEventListener('click', makeYellow);
}