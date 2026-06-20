import { TimerData } from "../Settings/Settings.js"

const TimerTime = document.getElementById("timer-time");
export function InitializeTimer(M,S) {
    TimerTime.innerText = `${((M < 10) ? "0" + M : M)}:${(S < 10) ? "0" + S : S}`
}