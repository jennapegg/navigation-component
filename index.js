var navigationItems = document.querySelectorAll('.navigation-list-item'),
    activeUnderline = document.querySelector('.js-underline'),
    activeItem = document.querySelector('.navigation-list-item.active');

function positionUnderline(currentNavItem) {
    var left = currentNavItem.offsetLeft,
        width = currentNavItem.offsetWidth;
    activeUnderline.style.width = width + 'px';
    activeUnderline.style.left = left + 'px';
}

function getCityTime(city) {
    var currentCity = document.querySelector('.city'),
        timeHeading = document.querySelector('.city-time'),
        timeZone = city.getAttribute('data-timezone'),
        currentTime = new Date().toLocaleString("en-US", {timeZone: timeZone, timeStyle: "short"});

    currentCity.innerText = city.innerText;
    timeHeading.innerText = currentTime;
}

document.addEventListener('DOMContentLoaded', () => {
    var navItemSpan = activeItem.querySelector('span');

    positionUnderline(navItemSpan);
    getCityTime(activeItem);
});

navigationItems.forEach((navItem) => {

    navItem.addEventListener('click', function () {
        var navItemSpan = this.querySelector('span');

        positionUnderline(navItemSpan);
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
        getCityTime(navItem);
    });
});

window.addEventListener('resize', () => {
    currentActive = document.querySelector('.navigation-list-item.active');
    var navItemSpan = currentActive.querySelector('span');

    positionUnderline(navItemSpan);
});
