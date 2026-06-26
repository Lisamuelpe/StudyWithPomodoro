import { timertime } from "./Pillnavbar.js"

let Circle = document.getElementById("timer-circle");
let InitialDOSCircle = parseFloat(getComputedStyle(Circle).getPropertyValue("stroke-dasharray"));
let InitialTimeAsSeconds;
export function ayuda() {
    let aa = timertime.textContent.trim();
    let [a, b] = aa.split(":").map(Number);
    InitialTimeAsSeconds = a * 60 + b;
}
document.addEventListener("DOMContentLoaded", () => {
    ayuda();
});

export function SVGSynchWihtTimer() {
    let Time = timertime.innerText.trim();
    let [min, sec] = Time.split(":").map(Number);
    let TimeAsPercentage = ((min * 60 + sec) * 100) / InitialTimeAsSeconds;
    Circle.style.strokeDashoffset = `${InitialDOSCircle - (InitialDOSCircle * TimeAsPercentage) / 100}`
};
