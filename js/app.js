const body = document.querySelector("body");
const buttonOpenMenu = document.querySelector("#open-menu");
const buttonCloseMenu = document.querySelector("#close-menu");
const buttonBackToTop = document.querySelector(".back-to-top");
const flushCollapse = document.querySelector("#flush-collapse");
const mobileMenu = document.querySelector(".mobile-menu");

const attachListeners = () => {
  window.addEventListener("scroll", backToTop);
    buttonOpenMenu.addEventListener("click", showMenu);
    buttonCloseMenu.addEventListener("click", closeMenu);
  };

  const backToTop = () => {
    let pos = window.scrollY;
  
    if (pos > 0) {
      buttonBackToTop.classList.add("show-back-to-top");
    } else {
      buttonBackToTop.classList.remove("show-back-to-top");
    }
  };

const showMenu = () => {
    mobileMenu.classList.toggle("toggled-menulist");
    buttonOpenMenu.style.display = "none";
    buttonCloseMenu.style.display = "block";
    body.style.overflowY = "hidden";
  };
  
  const closeMenu = () => {
    mobileMenu.classList.toggle("toggled-menulist");
    buttonOpenMenu.style.display = "block";
    buttonCloseMenu.style.display = "none";
    flushCollapse.classList.remove("show");
    body.style.overflowY = "visible";
  };
  
  attachListeners();