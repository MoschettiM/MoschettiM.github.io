document.getElementById('mode-switch').addEventListener('click', function () {
    let theme = document.getElementById('theme-style').href;
    if (theme.includes('light')) {
        document.getElementById('theme-style').href = 'dark.css';
        this.textContent = 'Light';
    } else {
        document.getElementById('theme-style').href = 'light.css';
        this.textContent = 'Dark';
    }
});