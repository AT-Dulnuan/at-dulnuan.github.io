
// Back to Top
topBtn = document.getElementById("topBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log("Scroll");
}

const burgerLines = document.getElementById("burgerMenu").querySelectorAll(".line");

new fullpage('#fullpage', {
    scrollingSpeed: 1000,
    fixedElements: '.floating-btns, .navbar',
    anchors: ["home", "works", "works2", "works3", "contact"],
    menu: '#navMenu',
    navigation: true,
    navigationPosition: 'left',

    afterLoad: function (origin, destination, direction) {
        document.getElementById("navMenu").style.opacity = 1;
        const curSection = fullpage_api.getActiveSection();
        console.log(curSection);
        if (curSection.index != 0 && curSection.isLast == false) {
            document.getElementById("navMenu").classList.add("white");
            document.getElementById("logoImg").setAttribute("src", "./img/logo-white.png");
            document.querySelector(".floating-btns").classList.add("white");
            for (i = 0; i < 3; i++) {
                burgerLines[i].style.backgroundColor = "#FFFFFF";
            }

            if (curSection.anchor === "works" || curSection.anchor === "works2" || curSection.anchor === "works3") {
                document.getElementById("works-link").classList.add("active");
            } else {
                document.getElementById("works-link").classList.remove("active");
            }
        } else {
            document.getElementById("navMenu").classList.remove("white");
            document.getElementById("logoImg").setAttribute("src", "./img/logo.png");
            document.querySelector(".floating-btns").classList.remove("white");
            for (i = 0; i < 3; i++) {
                burgerLines[i].style.backgroundColor = "#323031";
            }
        }
    },

    onLeave: function (origin, destination, direction) {
        document.getElementById("navMenu").style.opacity = 0;
    }
});

document.getElementById("burgerMenu").addEventListener("click", function () {
    document.getElementById("burgerMenu").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
    document.querySelector(".floating-btns").classList.toggle("hide");
    document.getElementById("navMenu").classList.toggle("white");
    for (i = 0; i < 3; i++) {
        burgerLines[i].style.backgroundColor = "#323031";
    }
})