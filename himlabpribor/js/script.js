"use strict";

$(function () {
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
  $('.arrivals-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    touchThreshold: 15,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});