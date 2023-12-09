
const burger = document.querySelector('.burger__box');
const menuBlock = document.querySelector('.header__menu');
const menuItem = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    menuBlock.classList.toggle('menu__active');
});

for (let index = 0; index < menuItem.length; index++) {
    const el = menuItem[index];
    
    el.addEventListener('click', ()=> {
        burger.classList.remove('burger__active');
        menuBlock.classList.remove('menu__active');
    });
};