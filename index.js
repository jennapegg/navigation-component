var navigationItems = document.querySelectorAll('.navigation-list-item'),
    activeUnderline = document.querySelector('.js-underline'),
    activeItem = document.querySelector('.navigation-list-item.active');

function positionUnderline(currentNavItem) {
    var left = currentNavItem.offsetLeft,
        width = currentNavItem.offsetWidth;
    activeUnderline.style.width = width + 'px';
    activeUnderline.style.left = left + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    var navItemSpan = activeItem.querySelector('span');

    positionUnderline(navItemSpan);
});

console.log(Window.pageXOffset);

navigationItems.forEach((navItem) => {

    navItem.addEventListener('click', function () {
        var navItemSpan = this.querySelector('span');

        positionUnderline(navItemSpan);
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
});

window.addEventListener('resize', () => {
    currentActive = document.querySelector('.navigation-list-item.active');
    var navItemSpan = currentActive.querySelector('span');

    positionUnderline(navItemSpan);
});
