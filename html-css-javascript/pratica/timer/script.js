'use strict';

let interval;
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const continueBtn = document.getElementById('continue-btn');
const restartBtn = document.getElementById('restart-btn');
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
const _minutes = document.getElementById('minutes');
const _seconds = document.getElementById('seconds');
const _miliseconds = document.getElementById('miliseconds');


const formatDigit = (digit) => { return digit < 10 ? `0${digit}` : digit };

const formatMiliseconds = (digit) => { return digit < 100 ? `${digit}`.padStart(3,'0') : digit}



const startTimer = () => {

    interval = setInterval(() => {
        miliseconds += 10;

        if (miliseconds > 999) {
            seconds++;
            miliseconds = 0;
        } else if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        _miliseconds.textContent = formatMiliseconds(miliseconds);
        _seconds.textContent = formatDigit(seconds);
        _minutes.textContent = formatDigit(minutes);

        
    }, 10);
}

startBtn.addEventListener('click', () => {
    startTimer();

    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
});


stopBtn.addEventListener('click', () => {
    clearInterval(interval);

    stopBtn.style.display = 'none';
    continueBtn.style.display = 'block';
});


continueBtn.addEventListener('click', () => {
    startTimer();

    continueBtn.style.display = 'none';
    stopBtn.style.display = 'block';
});


restartBtn.addEventListener('click', () => {
    clearInterval(interval);

    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    _minutes.textContent = formatDigit(minutes);
    _seconds.textContent = formatDigit(seconds);
    _miliseconds.textContent = formatMiliseconds(miliseconds);

    stopBtn.style.display = 'none';
    continueBtn.style.display = 'none';
    startBtn.style.display = 'block';
});