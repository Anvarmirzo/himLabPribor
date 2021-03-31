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
        document.body.style.overflow = "auto";
      } else {
        changeImg.srcset = 'img/close-icon.svg';
        document.body.style.overflow = "hidden";
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
  $('.categories-slider').slick({
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
  $('.clients-slider').slick({
    infinite: true,
    slidesToShow: 5,
    cssEase: 'linear',
    draggable: false,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 766,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  function showMap() {
    var mapBtn = document.querySelector('.map-wrapper');
    var map = document.querySelector('.modal-map');
    var mapLayer = document.querySelector('.modal-layer');

    if (mapBtn) {
      mapBtn.addEventListener('click', function () {
        map.classList.add('show-map');
        mapLayer.classList.add('show-map');
        document.body.style.overflow = "hidden";
      });
      mapLayer.addEventListener('click', function () {
        map.classList.remove('show-map');
        mapLayer.classList.remove('show-map');
        document.body.style.overflow = "auto";
      });
    }
  }

  showMap();

  function showSearch() {
    var searchBtn = document.querySelector('.open-search');
    var searchInput = document.querySelector('.search-wrapper input');
    var searchLayer = document.querySelector('.search-layer');
    var startSearch = document.querySelector('.start-search');
    var closeSearch = document.querySelector('.search-close-btn');
    searchBtn.addEventListener('click', function () {
      searchInput.classList.add('d-block');
      searchLayer.classList.add('show-search');
      startSearch.classList.add('show-search');
      closeSearch.classList.add('show-search');
    });
    closeSearch.addEventListener('click', function () {
      searchInput.classList.remove('d-block');
      searchLayer.classList.remove('show-search');
      startSearch.classList.remove('show-search');
      closeSearch.classList.remove('show-search');
    });
  }

  showSearch();
});