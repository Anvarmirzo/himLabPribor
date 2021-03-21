function openNav() {
    const openBurgerBtn = document.querySelector('.main-burger');
    openBurgerBtn.addEventListener('click', function () {
        const changeImg = document.querySelector('.main-burger source');
        const nav = document.querySelector('.navigation-links');
        if (changeImg.srcset == 'img/close-icon.svg') {
            changeImg.srcset = 'img/dark-burger.svg';
        } else {
            changeImg.srcset = 'img/close-icon.svg';
        }
        nav.classList.toggle('show-nav');
    });
}
openNav();