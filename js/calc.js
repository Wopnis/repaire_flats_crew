"use strict";
const calcButton = document.querySelector('.calc__btn'),
    calculatorForm = document.querySelector('.calculator__form'),
    calcRadio = document.querySelectorAll('.calc__radio'),
    calcRangeSum = document.querySelector('.calc__range>output'),
    calcResultSign = document.querySelector('.calc__result>span');

const DATA = {
    remont: ['cosmetic', 'desiner', 'capital'],
    building: ['new', 'old'],
    location: ['minsk', 'region'],
    price: [120, 240, 180],
}

let reg = 1,
    age = 1,
    type = 1,
    price = 120;

function handlerCallBackForm(event) {
    const target = event.target;
    localStorage.removeItem(age);
    localStorage.removeItem(reg);
    localStorage.removeItem(type);

    if (target.id === 'new') {
        age = 1;
    }

    if (target.id === 'minsk') {
        reg = 1;
    }

    if (target.id === 'cosmetic') {
        type = 1;
    }

    if (target.id === 'region') {
        reg = reg * 0.9;
    }

    if (target.id === 'old') {
        age = age * 1.3;
    }

    if (target.id === 'designer') {
        type = 2.2;
    } else if (target.id === 'capital') {
        type = 1.8;
    }

    console.log(calcRangeSum.textContent);
}

function calculatePrice(event) {
    event.preventDefault();
    const target = event.target;
    let range = calcRangeSum.textContent;
    price = 120;
    price = price * age * reg * type * range;
    calcResultSign.textContent = `${price}`;
    console.log(price);
}

calcButton.addEventListener('click', calculatePrice);

calculatorForm.addEventListener("change", handlerCallBackForm);