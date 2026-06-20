import { InitializeTimer } from "./timer/timerUI.js"
import { TimerData } from "./Settings/Settings.js"
import { StartTimer } from "./timer/timer.js"

//Timer Buttons
const Button_Start_Stop = document.getElementById("start-stop");

//Timer related
InitializeTimer(TimerData.StudyMinutes, TimerData.StudySeconds);

