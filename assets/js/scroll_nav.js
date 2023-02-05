var myNav = document.getElementById("nav");
var myNavMob = document.getElementById("nav-mobile");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
        myNav.classList.add("scroll-nav");
        myNavMob.classList.add("scroll-nav");
    } else {
        myNav.classList.remove("scroll-nav");
        myNavMob.classList.remove("scroll-nav");
    }
};

