import { ButtonPause_Start } from "./timerUI.js"
import { SVGSynchWihtTimer } from "./timerCircle.js"


export let Interval;

export function StartTimer() {
    Interval = setInterval(TimeSubstraction, 1000);
}

export function StopTimer() {
    clearInterval(Interval);
}


const Timer = document.getElementById("timer-time");


function TimeSubstraction() {
    const time = Timer.innerText.trim();
    let [min, sec] = time.split(":").map(Number);
    if (sec - 1 < 0) {
        min -= 1;
        sec = 60;
    }
    else {
        sec--;
    }
    Timer.innerHTML = `<div id="timer-time">${((min < 10) ? "0" + min : min)}:${((sec < 10) ? "0" + sec : sec)}</div>`
    SVGSynchWihtTimer();
}

export function ResetTimer() {

};
