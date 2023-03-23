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

menu.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
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

const x = document.querySelector(".bx-x-circle");

x.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// -----------------------------------------------------

const parent = document.querySelectorAll(".parent");
const child = document.querySelectorAll(".re");
const child2 = document.querySelectorAll(".ra");

parent.forEach((i) => {
  i.addEventListener("click", function () {
    if (i.classList.contains("ser")) {
      child2.forEach((e) => {
        e.classList.toggle("hide");
      });
    } else {
      child.forEach((e) => {
        e.classList.toggle("hide");
      });
    }
  });
});

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
// // Get the element to fade
// var element = document.getElementById("effect");

// // Set the initial opacity to 1 (fully opaque)
// var opacity = 1;

// // Define the animation function
// function fadeToBottom() {
//   // Reduce the opacity by 0.01 every 10 milliseconds
//   opacity -= 0.01;
//   // Set the opacity of the element
//   element.style.opacity = opacity;
//   // Move the element down by 1 pixel
//   element.style.top = parseInt(element.style.top) + 1 + "px";
//   // Repeat until the element is fully faded out
//   if (opacity <= 0) {
//     clearInterval(fadeInterval);
//   }
// }

// // Call the animation function every 10 milliseconds
// var fadeInterval = setInterval(fadeToBottom, 10);
