function setTheme() {

    let root = document.documentElement;

    let newTheme = root.className === 'purple' ? 'grey' : 'purple';

    root.className = newTheme;

}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', setTheme);