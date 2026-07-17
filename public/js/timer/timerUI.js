import { TimerData } from "../Settings/Settings.js"

const TimerTime = document.getElementById("timer-time");
const Start_Pause = document.getElementById("start-stop");
export function InitializeTimer(M,S) {
    TimerTime.innerText = `${((M < 10) ? "0" + M : M)}:${(S < 10) ? "0" + S : S}`;
}

export function ButtonPause_Start(r) {
    if (r) {
        Start_Pause.innerHTML = `<i class="bi bi-pause-fill"></i>
                                    Pause`;
    }
    else if (!r) {
        Start_Pause.innerHTML = `<i class="bi bi-play-fill"></i>
                                    Start`
    }
}

export function ChangePageColor(color) {
    const Html = document.documentElement;
    Html.style.setProperty("--primary-color", color);
}