/* script.js */
function toggleTheme() {
    document.documentElement.classList.toggle('light-theme');
    if (document.documentElement.classList.contains('light-theme')) {
        document.documentElement.style.setProperty('--bg-color', '#f0f2f5');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--container-bg', 'white');
        document.documentElement.style.setProperty('--link-color', '#007bff');
        document.documentElement.style.setProperty('--border-color', '#e0e0e0');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--text-color', '#f0f2f5');
        document.documentElement.style.setProperty('--container-bg', '#1e1e1e');
        document.documentElement.style.setProperty('--link-color', '#61dafb');
        document.documentElement.style.setProperty('--border-color', '#444');
    }
}
