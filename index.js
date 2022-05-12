var navigationItems = document.querySelectorAll('.navigation-list-item'),
    activeUnderline = document.querySelector('.js-underline');

navigationItems.forEach((navItem) => {

    navItem.addEventListener('click', function () {
        var navItemSpan = this.querySelector('span'),
            navItemLeft = navItemSpan.getBoundingClientRect().x,
            navItemWidth = navItemSpan.offsetWidth;

        activeUnderline.style.width = navItemWidth + 'px';
        activeUnderline.style.left = navItemLeft + 'px';

        this.classList.add('active');
    });
});