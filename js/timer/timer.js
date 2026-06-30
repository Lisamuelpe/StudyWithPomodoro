import { ButtonPause_Start } from "./timerUI.js";
import { SVGSynchWihtTimer } from "./timerCircle.js";
import { TimerData } from "../Settings/Settings.js";
import { InitializeTimer } from "./timerUI.js";
import { TimerModeChange } from "./Pillnavbar.js"

//Timer Initialization
InitializeTimer(TimerData.StudyMinutes, TimerData.StudySeconds);
export let Interval;

//Timmer controllers
export let TimerRunning = false;
const Button_Start_Stop = document.getElementById("start-stop");
const Button_Reset = document.getElementById("restart");

export function ToggleTimerRunning() {
    ((TimerRunning) ? TimerRunning = false : TimerRunning = false);
}

export function StartTimer() {
    Interval = setInterval(TimeSubstraction, 1000);
}

export function StopTimer() {
    clearInterval(Interval);
}

export function ToggleSkipButton() {
    if (Button_Reset.classList.contains("SkipActive")) {
        Button_Reset.classList.remove("SkipActive");
    }
    else {
        Button_Reset.classList.add("SkipActive");
    }
    console.log(`Classes: ${Button_Reset.classList}`)
}

const Timer = document.getElementById("timer-time");

ToggleSkipButton();

function TimeSubstraction() {
    const time = Timer.innerText.trim();
    if (time != "00:00") {
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
    else {
        StopTimer();
        TimerRunning = false;
        ButtonPause_Start(TimerRunning);
        const audio = new Audio("../../Audios/Alarm.mp3");
        audio.play();
        TimerModeChange();
    }
}


Button_Start_Stop.addEventListener("click", () => {
    if (!TimerRunning) {

        TimerRunning = true;
        ButtonPause_Start(TimerRunning);
         StartTimer();

    } else {
        StopTimer();
        TimerRunning = false;
        ButtonPause_Start(TimerRunning);
    }
    ToggleSkipButton();
}
);

Button_Reset.addEventListener("click", () => {
    ToggleSkipButton();
    if (TimerRunning) {
        ToggleTimerRunning();
        StopTimer();
        TimerModeChange();
        ButtonPause_Start(TimerRunning);
        SVGSynchWihtTimer();
    }
}
);