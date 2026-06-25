
import { InitializeTimer, ButtonPause_Start } from "./timer/timerUI.js"
import { TimerData } from "./Settings/Settings.js"
import { StartTimer, Interval, StopTimer } from "./timer/timer.js"
import { InitPillNavbar } from "./timer/Pillnavbar.js";

//PillNavbar
let PillNavbarState;

    //Timer variables
    export let TimerRunning = false;

    //Timer Controllers
    const Button_Start_Stop = document.getElementById("start-stop");
    const Button_Reset = document.getElementById("restart");

    //Initializations
InitializeTimer(TimerData.StudyMinutes, TimerData.StudySeconds);
InitPillNavbar();

    Button_Start_Stop.addEventListener("click", () => {
        if (!TimerRunning) {
            StartTimer();
            TimerRunning = true;
            ButtonPause_Start(TimerRunning);
        } else {
            StopTimer();
            TimerRunning = false;
            ButtonPause_Start(TimerRunning);
        }
    }
);

Button_Reset.addEventListener("click", () => {
    if (TimerRunning) {
        InitializeTimer();

        }
    }
);


