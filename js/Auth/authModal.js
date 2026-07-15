const modal = document.getElementById("modal-auth");
const openBtn = document.getElementById("button-sign-in");
const closeBtn = document.getElementById("button-close-auth");
const body = document.getElementById("modal-auth-body");

const views = {
    main: body.querySelector(".auth-view-main"),
    login: body.querySelector(".auth-view-login"),
    signup: body.querySelector(".auth-view-signup"),
};

const emailLoginBtn = document.getElementById("auth-email-btn");
const googleBtn = document.getElementById("auth-google-btn");
const signupBtn = document.getElementById("auth-signup-btn");
const backLogin = document.getElementById("auth-back-login");
const backSignup = document.getElementById("auth-back-signup");

const loginForm = document.getElementById("auth-login-form");
const signupForm = document.getElementById("auth-signup-form");

function showView(view) {
    Object.values(views).forEach(v => v.classList.remove("active"));
    view.classList.add("active");
}

function openModal() {
    showView(views.main);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

function goToLogin() {
    loginForm.reset();
    showView(views.login);
    const emailField = document.getElementById("auth-login-email");
    setTimeout(() => emailField?.focus(), 100);
}

function goToSignup() {
    signupForm.reset();
    showView(views.signup);
    const nameField = document.getElementById("auth-signup-name");
    setTimeout(() => nameField?.focus(), 100);
}

function handleGoogle() {
    console.log("Google sign-in placeholder");
}

function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("Login submitted (front-end only)");
}

function handleSignupSubmit(e) {
    e.preventDefault();
    const password = document.getElementById("auth-signup-password").value;
    const confirm = document.getElementById("auth-signup-confirm").value;
    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }
    console.log("Signup submitted (front-end only)");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

emailLoginBtn.addEventListener("click", goToLogin);
googleBtn.addEventListener("click", handleGoogle);
signupBtn.addEventListener("click", goToSignup);

backLogin.addEventListener("click", () => showView(views.main));
backSignup.addEventListener("click", () => showView(views.main));

loginForm.addEventListener("submit", handleLoginSubmit);
signupForm.addEventListener("submit", handleSignupSubmit);

modal.style.display = "none";
