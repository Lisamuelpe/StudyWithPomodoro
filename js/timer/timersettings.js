import { TimerData, DefaultColors } from "../Settings/Settings.js";
import { ChangePageColor, InitializeTimer } from "./timerUI.js";

const modal = document.getElementById("modal-settings");
const settingsButton = document.getElementById("button-settings");
const closeButton = document.getElementById("button-close-modal");

const autoStart = document.getElementById("auto-start-timer");
const fullScreen = document.getElementById("full-screen-mode");
const themeColorOptions = document.getElementById("theme-color-options");
const tasksWidth = document.getElementById("tasks-width");
const tasksHeight = document.getElementById("tasks-height");
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

function openModal() {
    loadSettings();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

settingsButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

themeColorOptions.querySelectorAll(".color-square").forEach(sq => {
    sq.addEventListener("click", () => {
        themeColorOptions.querySelectorAll(".color-square").forEach(s => s.classList.remove("active"));
        sq.classList.add("active");
    });
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
        sq.classList.toggle("active", sq.dataset.color === TimerData.SelectedColor);
    });

    tasksWidth.value = TimerData.TasksWidth;
    tasksHeight.value = TimerData.TasksHeight;
    tasksTransparency.value = TimerData.TasksTransparency;
    circleVisibility.value = TimerData.CircleVisibility;
    circleColor.value = TimerData.CircleColor;
}

function saveSettings() {
    saveTimeInputs();
    TimerData.AutoStartTimer = autoStart.checked;
    TimerData.FullScreenMode = fullScreen.checked;

    const activeColor = themeColorOptions.querySelector(".color-square.active");
    if (activeColor) {
        TimerData.SelectedColor = activeColor.dataset.color;
    }

    TimerData.TasksWidth = parseInt(tasksWidth.value) || 300;
    TimerData.TasksHeight = parseInt(tasksHeight.value) || 400;
    TimerData.TasksTransparency = parseInt(tasksTransparency.value) || 100;
    TimerData.CircleVisibility = circleVisibility.value;
    TimerData.CircleColor = circleColor.value;
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

    if (TimerData.SelectedColor) {
        ChangePageColor(TimerData.SelectedColor);
    }

    const circle = document.getElementById("timer-circle");
    if (circle) {
        circle.style.visibility = TimerData.CircleVisibility;
        circle.style.stroke = TimerData.CircleColor;
    }

    const activeNav = document.querySelector(".nav-button.active");
    if (activeNav) {
        let M, S;
        if (activeNav.id === "study-button") {
            M = TimerData.StudyMinutes;
            S = TimerData.StudySeconds;
        } else if (activeNav.id === "short-break-button") {
            M = TimerData.ShortBreakMinutes;
            S = TimerData.ShortBreakSeconds;
        } else {
            M = TimerData.LongBreakMinutes;
            S = TimerData.LongBreakSeconds;
        }
        InitializeTimer(M, S);
    }

    closeModal();
}

function resetSettings() {
    TimerData.AutoStartTimer = false;
    TimerData.FullScreenMode = false;
    TimerData.SelectedColor = DefaultColors.Study;
    TimerData.TasksWidth = 300;
    TimerData.TasksHeight = 400;
    TimerData.TasksTransparency = 100;
    TimerData.CircleVisibility = "visible";
    TimerData.CircleColor = DefaultColors.Study;
    TimerData.StudyMinutes = 25;
    TimerData.StudySeconds = 0;
    TimerData.ShortBreakMinutes = 5;
    TimerData.ShortBreakSeconds = 0;
    TimerData.LongBreakMinutes = 15;
    TimerData.LongBreakSeconds = 0;
    TimerData.LongBreakInterval = 4;
    loadSettings();
}

applyButton.addEventListener("click", applySettings);
resetButton.addEventListener("click", resetSettings);

modal.style.display = "none";
