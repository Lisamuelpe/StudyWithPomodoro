import { TimerData } from "../Settings/Settings.js";
import { InitializeTimer } from "./timerUI.js";
import { StartTimer, Interval, StopTimer } from "./timer.js";
import { ButtonPause_Start } from "./timerUI.js";
import { TimerRunning, ToggleTimerRunning } from "./timer.js";
import { ayuda, SVGSynchWihtTimer } from "./timerCircle.js"


//PillNavbarButtons
const StudyButton = document.getElementById("study-button");
const ShortBreakButton = document.getElementById("short-break-button");
const LongBreakButton = document.getElementById("long-break-button");
export let timertime = document.getElementById("timer-time");

//PillNavBar Init
InitPillNavbar();

export function InitPillNavbar() {
    StudyButton.classList.add("active");
}

export function TimerModeChange() {
    let Active = document.querySelector(".active");
    if (Active == StudyButton) {
        if (TimerData.SessionNumber == TimerData.LongBreakInterval) {
            skibiditoilet(LongBreakButton);
        }
        else {
            skibiditoilet(ShortBreakButton);
        }
    }
    else {
        skibiditoilet(StudyButton);
        TimerData.SessionNumber++;
        document.getElementById("SessionNumber").innerText = `Session #${TimerData.SessionNumber}`;
    }
}

function skibiditoilet(button) {
    ToggleTimerRunning();
    let HolaAmigo = document.querySelectorAll(".active");
    let M
    let S

    if (button == StudyButton) {
        M = TimerData.StudyMinutes;
        S = TimerData.StudySeconds;
    } else if (button == ShortBreakButton) {
        M = TimerData.ShortBreakMinutes;
        S = TimerData.ShortBreakSeconds;
    } else {
        M = TimerData.LongBreakMinutes;
        S = TimerData.LongBreakSeconds;
    }

    HolaAmigo.forEach(removeclass);
    button.classList.add("active");
    StopTimer();
    InitializeTimer(M,S);
    timertime = document.getElementById("timer-time");
    ButtonPause_Start(false);
    ayuda();
    SVGSynchWihtTimer();
}

function removeclass(item, classs) {
    item.classList.remove(`active`);
}

StudyButton.addEventListener('click', () => {
    skibiditoilet(StudyButton);
}

)
ShortBreakButton.addEventListener('click', () => {
    skibiditoilet(ShortBreakButton);
}
)
LongBreakButton.addEventListener('click', () => {
    skibiditoilet(LongBreakButton);
})