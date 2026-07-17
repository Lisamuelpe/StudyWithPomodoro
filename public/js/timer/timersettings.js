import { TimerData, DefaultTimerData, DefaultColors, UserColors } from "../Settings/Settings.js";
import { ChangePageColor, InitializeTimer } from "./timerUI.js";

const modal = document.getElementById("modal-settings");
const settingsButton = document.getElementById("button-settings");
const closeButton = document.getElementById("button-close-modal");

const autoStart = document.getElementById("auto-start-timer");
const fullScreen = document.getElementById("full-screen-mode");
const themeColorOptions = document.getElementById("theme-color-options");
const tasksTransparency = document.getElementById("tasks-transparency");
const circleVisibility = document.getElementById("circle-visibility");
const circleColor = document.getElementById("circle-color");
const applyButton = document.getElementById("apply-settings");
const resetButton = document.getElementById("reset-settings");

const studyMinutes = document.getElementById("study-time-minutes");
const studySeconds = document.getElementById("study-time-seconds");
const shortBreakMinutes = document.getElementById("short-break-minutes");
const shortBreakSeconds = document.getElementById("short-break-seconds");
const longBreakMinutes = document.getElementById("long-break-minutes");
const longBreakSeconds = document.getElementById("long-break-seconds");
const sessionsInput = document.getElementById("sessions-before-long-break");

function initSettingsModal() {
    loadSettings();
}

function openModal() {
    initSettingsModal();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

settingsButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});



function loadTimeInputs() {
    studyMinutes.value = TimerData.StudyMinutes;
    studySeconds.value = TimerData.StudySeconds;
    shortBreakMinutes.value = TimerData.ShortBreakMinutes;
    shortBreakSeconds.value = TimerData.ShortBreakSeconds;
    longBreakMinutes.value = TimerData.LongBreakMinutes;
    longBreakSeconds.value = TimerData.LongBreakSeconds;
    sessionsInput.value = TimerData.LongBreakInterval;
}

function saveTimeInputs() {
    TimerData.StudyMinutes = parseInt(studyMinutes.value) || 25;
    TimerData.StudySeconds = parseInt(studySeconds.value) || 0;
    TimerData.ShortBreakMinutes = parseInt(shortBreakMinutes.value) || 5;
    TimerData.ShortBreakSeconds = parseInt(shortBreakSeconds.value) || 0;
    TimerData.LongBreakMinutes = parseInt(longBreakMinutes.value) || 15;
    TimerData.LongBreakSeconds = parseInt(longBreakSeconds.value) || 0;
    TimerData.LongBreakInterval = parseInt(sessionsInput.value) || 4;
}

function loadSettings() {
    loadTimeInputs();
    autoStart.checked = TimerData.AutoStartTimer;
    fullScreen.checked = TimerData.FullScreenMode;

    themeColorOptions.querySelectorAll(".color-square").forEach(sq => {
        sq.value = UserColors[sq.dataset.mode];
    });

    tasksTransparency.value = TimerData.TasksTransparency;
    circleVisibility.value = TimerData.CircleVisibility;
    circleColor.value = UserColors.Circle;
}

function saveSettings() {
    saveTimeInputs();
    TimerData.AutoStartTimer = autoStart.checked;
    TimerData.FullScreenMode = fullScreen.checked;

    themeColorOptions.querySelectorAll(".color-square").forEach(sq => {
        UserColors[sq.dataset.mode] = sq.value;
    });

    TimerData.TasksTransparency = parseInt(tasksTransparency.value) || 100;
    TimerData.CircleVisibility = circleVisibility.value;
    UserColors.Circle = circleColor.value;
}

function applySettings() {
    saveSettings();

    if (TimerData.FullScreenMode) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    } else {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    }

    const circle = document.getElementById("timer-circle");
    if (circle) {
        circle.style.visibility = TimerData.CircleVisibility;
        circle.style.stroke = UserColors.Circle;
    }

    const activeNav = document.querySelector(".nav-button.active");
    if (activeNav) {
        let M, S;
        if (activeNav.id === "study-button") {
            ChangePageColor(UserColors.Study);
            M = TimerData.StudyMinutes;
            S = TimerData.StudySeconds;
        } else if (activeNav.id === "short-break-button") {
            ChangePageColor(UserColors.ShortBreak);
            M = TimerData.ShortBreakMinutes;
            S = TimerData.ShortBreakSeconds;
        } else {
            ChangePageColor(UserColors.LongBreak);
            M = TimerData.LongBreakMinutes;
            S = TimerData.LongBreakSeconds;
        }
        InitializeTimer(M, S);
    }

    closeModal();
}

function resetSettings() {
    Object.assign(TimerData, DefaultTimerData);
    Object.assign(UserColors, DefaultColors);
    loadSettings();
}

applyButton.addEventListener("click", applySettings);
resetButton.addEventListener("click", resetSettings);

document.addEventListener("DOMContentLoaded", initSettingsModal);
