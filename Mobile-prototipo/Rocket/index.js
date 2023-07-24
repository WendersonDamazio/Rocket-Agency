
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
};