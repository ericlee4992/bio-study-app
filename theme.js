function addTheme() {
    const body = document.querySelector('body');
    const theme = document.querySelector('#theme');
    if (theme.value == 'Night') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        theme.value = 'Day'
        theme.style.backgroundColor = 'white';
        theme.style.color = 'black';
    } else {
        body.style.backgroundColor = '#FFEBCD';
        body.style.color = 'black';
        theme.value = 'Night'
        theme.style.backgroundColor = 'black';
        theme.style.color = 'white';
    }
}