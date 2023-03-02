"use strict";

// -----------------------------RESPONSIVE MENU-------------------------
const header = document.querySelector(".header_ul");
const ham = document.querySelector(".ham-menu");

const handelingMenu = () => {
  if (header.style.display === "flex") {
    ham[0].classList.add("hidden");
  }
};

handelingMenu();

// ----------------------------SHOW MENU------------------------------
const menu = document.querySelector(".bx-menu-alt-right");
const sidebar = document.querySelector(".sidebar");
const x = document.querySelector(".bx-x");

menu.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

x.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  console.log("salam");
});
// ------------------------SCROLL UP--------------------

let calcScrollUp = () => {
  let scrollProgress = document.getElementsByClassName("go-up");
  let progressValue = document.getElementsByClassName("bxs-chevron-up");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress[0].style.display = "flex";
  } else {
    scrollProgress[0].style.display = "none";
  }

  scrollProgress[0].addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollUp;
window.onload = calcScrollUp;
