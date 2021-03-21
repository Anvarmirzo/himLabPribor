'use strict';
/* function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});*/

function openNav() {
  var openBurgerBtn = document.querySelector('.main-burger');
  openBurgerBtn.addEventListener('click', function () {
    var changeImg = document.querySelector('.main-burger source');
    var nav = document.querySelector('.navigation-links');

    if (changeImg.srcset == 'img/close-icon.svg') {
      changeImg.srcset = 'img/dark-burger.svg';
    } else {
      changeImg.srcset = 'img/close-icon.svg';
    }

    nav.classList.toggle('show-nav');
  });
}

openNav();