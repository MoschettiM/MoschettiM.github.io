const modeSwitch = document.getElementById('mode-switch');
const themeLink = document.getElementById('theme-style');
const body = document.body;
modeSwitch.addEventListener('click', function () {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeLink.href = 'dark.css';
        this.textContent = 'Light';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeLink.href = 'light.css';
        this.textContent = 'Dark';
    }
});