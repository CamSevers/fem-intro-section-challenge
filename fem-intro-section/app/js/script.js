const btnHamburger = document.querySelector('#btn-hmb');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.header__overlay');
const navLinks = document.querySelector('.header__nav-links');
const dropdown = document.querySelector('.header__dropdown-menu');
const dropdownOne = document.querySelector('.dropdown-one');
const dropdownTwo = document.querySelector('.dropdown-two');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const arrow = document.querySelector('.arrow');
let width = window.innerWidth;

btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('slide-right');
        navLinks.classList.remove('slide-left');
        body.classList.remove('no-scroll');
    } else {
        header.classList.add('open');
        overlay.classList.add('slide-right');
        navLinks.classList.add('slide-left');
        body.classList.add('no-scroll');
    }
}),

dropdownOne.addEventListener('click', function(){
    if(dropdownOne.classList.contains('clicked')) {
        dropdownOne.classList.remove('clicked');
        one.classList.remove('open');
    } else {
        dropdownOne.classList.add('clicked');
        one.classList.add('open');
    }
}),

dropdownTwo.addEventListener('click', function(){
    if(dropdownTwo.classList.contains('clicked')) {
        dropdownTwo.classList.remove('clicked');
        two.classList.remove('open');
    } else {
        dropdownTwo.classList.add('clicked');
        two.classList.add('open');
    }
}),

window.addEventListener("resize", function() {
    if (window.innerWidth > 1025) {
        header.classList.remove('open');
        one.classList.remove('open');
        two.classList.remove('open');
        dropdownOne.classList.remove('clicked');
        dropdownTwo.classList.remove('clicked');
    } 
})