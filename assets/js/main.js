"use strict";

// Mobile nav toggle
const mobileNavShowEl = document.querySelector('.mobile-nav-show');
const mobileNavHideEl = document.querySelector('.mobile-nav-hide');
console.log(document.querySelectorAll('.mobile-nav-toggle'));
const mobileNavBtnEl = document.querySelectorAll('.mobile-nav-toggle');
console.log(mobileNavBtnEl);
mobileNavBtnEl.forEach(element => {
    console.log(element);
    element.addEventListener('click', function () {
        mobileNavToogle();

    })
});
function mobileNavToogle() {
    mobileNavShowEl.classList.toggle('d-none');
    mobileNavHideEl.classList.toggle('d-none');
    // apply a screen that prevent scrolling and clicking on the body
    document.querySelector('body').classList.toggle('mobile-nav-active');
}
// hide mobile nav on same-page/hash links
document.querySelectorAll('.navbar a').forEach(navbarlink => {
    // 1.iterate through all navbar links
    //2. if a link doesn't have a hash exit the function and check the next one.
    // 3. if you find a hash check if there is an element that has that hash 
    // 4. if you don't find it break 
    // 5. if you find it add a click event listner to it. when clicked check if mobile-nav-active is on and do the same you do when you change page. toggle the nav hide show button and remove the mobile-nav-active screen
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
        }
    })

})