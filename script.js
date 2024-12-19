/* script.js */
function toggleTheme() {
    document.documentElement.classList.toggle('light-theme');
        // -------------------------------Dark-------------------------------
    if (document.documentElement.classList.contains('light-theme')) {
        document.documentElement.style.setProperty('--bg-color', '#f0f2f5');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--container-bg', 'white');
        document.documentElement.style.setProperty('--link-color', '#00b7ff');
        document.documentElement.style.setProperty('--border-color', '#e0e0e0');
        document.documentElement.style.setProperty('--button-color', '#000000');
    } else {
        // -------------------------------Light-------------------------------
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--text-color', '#f0f2f5');
        document.documentElement.style.setProperty('--container-bg', '#242424');
        document.documentElement.style.setProperty('--link-color', '#00b7ff');
        document.documentElement.style.setProperty('--border-color', '#444');
        document.documentElement.style.setProperty('--button-color', '#ffffff');
    }
}
