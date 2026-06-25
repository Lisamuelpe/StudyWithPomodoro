import { TimerData } from "../Settings/Settings.js";
import { InitializeTimer } from "./timerUI.js";
import { StartTimer, Interval, StopTimer } from "./timer.js";
import { ButtonPause_Start } from "./timerUI.js";
import { TimerRunning } from "../app.js";

//PillNavbarButtons
const StudyButton = document.getElementById("study-button");
const ShortBreakButton = document.getElementById("short-break-button");
const LongBreakButton = document.getElementById("long-break-button");
export let timertime = document.getElementById("timer-time");
export function InitPillNavbar() {
    StudyButton.classList.add("active");
}

function removeclass(item, classs) {
    item.classList.remove(`active`);
}

StudyButton.addEventListener('click', () => {
    let HolaAmigo = document.querySelectorAll(".active");
    HolaAmigo.forEach(removeclass);
    StudyButton.classList.add("active");
    StopTimer();
    InitializeTimer(TimerData.StudyMinutes, TimerData.StudySeconds);
    timertime = document.getElementById("timer-time")
    ButtonPause_Start(TimerRunning);
}
    
)
ShortBreakButton.addEventListener('click', () => {
    let HolaAmigo = document.querySelectorAll(".active");
    HolaAmigo.forEach(removeclass);
    ShortBreakButton.classList.add("active");
    StopTimer();
    InitializeTimer(TimerData.ShortBreakMinutes, TimerData.ShortBreakSeconds);
    timertime = document.getElementById("timer-time")
    ButtonPause_Start(TimerRunning);
}
)
LongBreakButton.addEventListener('click', () => {
    let HolaAmigo = document.querySelectorAll(".active");
    HolaAmigo.forEach(removeclass);
    LongBreakButton.classList.add("active");
    StopTimer();
    InitializeTimer(TimerData.LongBreakMinutes, TimerData.LongBreakSeconds);
    timertime = document.getElementById("timer-time")
    ButtonPause_Start(TimerRunning);
})