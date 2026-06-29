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


const Timer = document.getElementById("timer-time");


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
    console.log(`Timer running before clicking = ${TimerRunning}`)
    if (!TimerRunning) {

        TimerRunning = true;
        ButtonPause_Start(TimerRunning);
         StartTimer();

    } else {
        StopTimer();
        TimerRunning = false;
        ButtonPause_Start(TimerRunning);
    }
    console.log(`Timer running after clicking = ${TimerRunning}`)
}
);

Button_Reset.addEventListener("click", () => {
    if (TimerRunning) {
        StopTimer();
        TimerRunning = false;
        let activebutton = document.querySelector(".active");
        let m;
        let s;
        if (activebutton == document.getElementById("study-button")) {
            m = TimerData.StudyMinutes;
            s = TimerData.StudySeconds;
        }
        else if (activebutton == document.getElementById("short-break-button")) {
            m = TimerData.ShortBreakMinutes;
            s = TimerData.ShortBreakSeconds;
        }
        else {
            m = TimerData.LongBreakMinutes;
            s = TimerData.LongBreakSeconds;
        };
        InitializeTimer(m, s);
        ButtonPause_Start(TimerRunning);
        SVGSynchWihtTimer();
    }
}
);