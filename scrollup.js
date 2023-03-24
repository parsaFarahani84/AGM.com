"use strict";

// -----------------------------RESPONSIVE MENU-------------------------
const nav = document.querySelector(".navigation");
const header = document.getElementsByClassName("header_ul");

// console.log(screen.width);

const g = () => {
  if (screen.width >= 853) {
    nav.classList.toggle("display-none");
  }
};
g();

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

const x = document.querySelector(".bx-x-circle");

// x.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

// -----------------------------------------------------

// const parent = document.querySelectorAll(".parent");
// const child = document.querySelectorAll(".re");
// const child2 = document.querySelectorAll(".ra");

// parent.forEach((i) => {
//   i.addEventListener("click", function () {
//     if (i.classList.contains("ser")) {
//       child2.forEach((e) => {
//         e.classList.toggle("hide");
//       });
//     } else {
//       child.forEach((e) => {
//         e.classList.toggle("hide");
//       });
//     }
//   });
// });

// ------------------------ROTATE--------------------
// const bx = document.querySelectorAll(".bx-chevron-right");
// const Parent = document.querySelectorAll(".parent");

// bx.forEach((bx) => {
//   console.log(Parent);
//   Parent[0].addEventListener("click", function () {
//     bx.classList.toggle("rotate");
//   });
// });
// -------------------------------------------------------

const input = document.querySelectorAll(".contact-input");

input.forEach((i) => {
  i.addEventListener("focus", function () {
    i.parentNode.classList.add("focus");
    i.parentNode.classList.add("not-empty");
  });
  i.addEventListener("blur", function () {
    if (i.value == "") {
      i.parentNode.classList.remove("not-empty");
    }
    i.parentNode.classList.remove("focus");
  });
});
// -------------------------------------------------------------------
const hamul = document.querySelector(".navigation__list");
const navigation = document.querySelector(".navigation__button");

navigation.addEventListener("click", function () {
  hamul.classList.toggle("display-none");
});
