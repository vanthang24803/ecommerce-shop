// MENU FOR MOBILE
function copyMenu() {

    let dptCategory = document.querySelector(".dpt-cat");
    let dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;


    let mainNav = document.querySelector(".header-nav nav");
    let navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;


    let topNav = document.querySelector(".header-top .wrapper");
    let topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// MENU SHOW MOBILE

const menuButton = document.querySelector(".trigger"),
    closeButton = document.querySelector(".t-close"),
    addclass = document.querySelector(".site");

menuButton.addEventListener("click", () => {
    addclass.classList.toggle("showmenu");
})

closeButton.addEventListener("click", () => {
    addclass.classList.remove("showmenu");
})


// MENU SUB SHOW MOBILE

const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) =>
        item != this
            ? item.closest(".has-child").classList.remove("expand")
            : null
    );
    if (this.closest(".has-child").classList != "expand");
    this.closest(".has-child").classList.toggle("expand");
}

// SLIDER

const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});

// SHOW SEARCH

const searchButton = document.querySelector(".t-search"),
    tClose = document.querySelector(".search-close"),
    showClass = document.querySelector(".site");
searchButton.addEventListener("click", () => {
    showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", () => {
    showClass.classList.remove("showsearch");
});

// SHOW DPT MENU PAGE SINGLE

const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
    dptClass = document.querySelector(".site");

dptButton.addEventListener("click", () => {
    dptClass.classList.toggle("showdpt");
});


// SLIDER IMAGE

let productThumb = new Swiper(".small-image", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        },
    },
});
let productBig = new Swiper(".big-image", {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productThumb,
    },
});


// SHOW CART

const divtoShow = ".mini-cart";
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector(".cart-trigger");

divTrigger.addEventListener("click", () => {
    setTimeout(() => {
        if (!divPopup.classList.contains("show")) {
            divPopup.classList.add("show");
        }
    }, 250);
});

// CLOSE BY OUTSIDE

document.addEventListener("click", (e) => {
	const isClosest = e.target.closest(divtoShow);
	if (!isClosest && divPopup.classList.contains("show")) {
		divPopup.classList.remove("show");
	}
});


// SHOW MODAL

window.onload = function () {
	document.querySelector(".site").classList.toggle("showmodal");
};
document.querySelector(".modalclose").addEventListener("click", function () {
	document.querySelector(".site").classList.remove("showmodal");
});

