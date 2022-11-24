"use strict";

// Mobile nav toggle
const mobileNavShowEl = document.querySelector('.mobile-nav-show');
const mobileNavHideEl = document.querySelector('.mobile-nav-hide');
console.log(document.querySelectorAll('.mobile-nav-toggle'));
const mobileNavBtnEl = document.querySelectorAll('.mobile-nav-toggle');
console.log('ok');
console.log(mobileNavBtnEl);
mobileNavBtnEl.forEach(element => {
    console.log(element);
    element.addEventListener('click', function () {
        console.log('button clicked');
        mobileNavShowEl.classList.toggle('d-none');
        mobileNavHideEl.classList.toggle('d-none');
        document.querySelector('body').classList.toggle('mobile-nav-active');
    })
});
console.log(hello);