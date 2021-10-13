const timer = document.getElementById('timer');

timer.innerHTML = "00 : 00 : 00";

let hr = 0;
let min = 0;
let sec = 0;

let stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        sec = sec < 10 ? `0${sec}` : sec;
        min = min < 10 ? `0${min}` : min;
        hr = hr < 10 ? `0${hr}` : hr;


        timer.innerHTML = `${hr} : ${min} : ${sec}`;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00 : 00 : 00';
}