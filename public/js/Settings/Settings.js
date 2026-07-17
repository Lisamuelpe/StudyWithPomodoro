export let DefaultTimerData = {
    StudyMinutes: 25,
    StudySeconds: 0,
    ShortBreakMinutes: 5,
    ShortBreakSeconds: 0,
    LongBreakMinutes: 15,
    LongBreakSeconds: 0,
    SessionNumber: 1,
    LongBreakInterval: 4,
    AutoStartTimer: false,
    FullScreenMode: false,
    TasksTransparency: 100,
    CircleVisibility: "visible",
};

export let TimerData = { ...DefaultTimerData };

export let DefaultColors = {
    Study: "#4F8A5B",
    ShortBreak: "#5C7FA3",
    LongBreak: "#7B5D9A",
    Circle: "#F4DE87"
};

export let UserColors = { ...DefaultColors };      
