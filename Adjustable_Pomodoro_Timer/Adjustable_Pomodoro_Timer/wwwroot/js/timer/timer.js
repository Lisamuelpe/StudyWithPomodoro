import { RefreshTimer } from "./timerUI.js";

const Timer = document.getElementById("timer-time");
function TimeSubstraction() {
    const time = Timer.innerText.trim(":");
    const [min, sec] = time.split(":").map(Number);
    ((min == 0 || sec == 0) ? console.log("Se acabo") : console.log(`Activo ${min}:${sec}`));
    ((sec - 1 < 0) ? min -= 1 : sec -= 1);
}

export function StartTimer() {
    setInterval(TimeSubstraction, 1000);
}