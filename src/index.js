import changeColor from "./function.js";
import './styles/main.css'

const title = document.querySelector('.main-title');

title.innerHTML = 'Hi webpack!';

const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
    changeColor();
});