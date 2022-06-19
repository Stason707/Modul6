const LightRed = document.querySelector(".trafficLightRed");
const LightYellow = document.querySelector(".trafficLightYellow");
const LightGreen = document.querySelector(".trafficLightGreen");

function makeRed() {
    LightRed.style.background = ('red');
    LightGreen.style.background = ('rgb(34, 63, 32)');
    LightYellow.style.background = ('rgba(149, 136, 41, 0.764)');
    LightRed.removeEventListener('click', makeRed);
    LightRed.addEventListener('click', makeBlackRed);
}

LightRed.addEventListener('click', makeBlackRed);

function makeBlackRed() {
    LightRed.style.background = ('rgb(78, 42, 42)');
    LightRed.removeEventListener('click', makeBlackRed);
    LightRed.addEventListener('click', makeRed);    
}

LightRed.addEventListener('click', makeRed);

function makeYellow() {
    LightYellow.style.background = ('yellow');
    LightRed.style.background = ('rgb(78, 42, 42)');
    LightGreen.style.background = ('rgb(34, 63, 32)');
    LightYellow.removeEventListener('click', makeYellow);
    LightYellow.addEventListener('click', makeBlackYellow);
}

LightYellow.addEventListener('click', makeBlackYellow);

function makeBlackYellow() {
    LightYellow.style.background = ('rgba(149, 136, 41, 0.764)');
    LightYellow.removeEventListener('click', makeBlackYellow);
    LightYellow.addEventListener('click', makeYellow);
}

LightYellow.addEventListener('click', makeYellow);

function makeGreen() {
    LightGreen.style.background = ('Green');
    LightYellow.style.background = ('rgba(149, 136, 41, 0.764)');
    LightRed.style.background = ('rgb(78, 42, 42)');
    LightGreen.removeEventListener('click', makeGreen);
    LightGreen.addEventListener('click', makeBlackGreen);
}

LightGreen.addEventListener('click', makeBlackGreen);

function makeBlackGreen() {
    LightGreen.style.background = ('rgb(34, 63, 32)');
    LightGreen.removeEventListener('click', makeBlackGreen);
    LightGreen.addEventListener('click', makeGreen);    
}
LightGreen.addEventListener('click', makeGreen);

