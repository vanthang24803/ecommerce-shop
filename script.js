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