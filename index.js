var navigationItems = document.querySelectorAll('.navigation-list-item'),
    activeUnderline = document.querySelector('.js-underline'),
    activeItem = document.querySelector('.navigation-list-item.active');

function positionUnderline(currentNavItem) {
    var left = currentNavItem.getBoundingClientRect().x - 9,
        width = currentNavItem.offsetWidth;
    activeUnderline.style.width = width + 'px';
    activeUnderline.style.left = left + 'px';
}

document.addEventListener('DOMContentLoaded', (event) => {
    var navItemSpan = activeItem.querySelector('span');

    positionUnderline(navItemSpan);
});

navigationItems.forEach((navItem) => {

    navItem.addEventListener('click', function () {
        var navItemSpan = this.querySelector('span');

        positionUnderline(navItemSpan);
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
});