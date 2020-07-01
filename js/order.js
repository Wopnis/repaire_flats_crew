"use strict";

const openOrderPage = document.querySelector('.fixed__btn'),
    openOrderPageMenu = document.querySelector('.main-menu__btn');

// openOrderPage.addEventListener('click', () => console.log('click'));
openOrderPage.addEventListener('click', orderPage);
openOrderPageMenu.addEventListener('click', orderPage);


function orderPage(){
    console.log("object");
    window.location.href='../order.html';
}