"use strict";
document.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("Hej");
  activateButton();
}

function activateButton() {
  document.querySelector(".aboutme_btn").addEventListener("click", () => {
    window.location.href = "om.html";
  });

  document.querySelector(".cv_btn").addEventListener("click", () => {
    window.location.href = "cv.html";
  });
}

let dropcontent = document.querySelector(".dropdown-content");

let menu = document.querySelector("#menu");
let overlay = document.querySelector(".overlay");
let overlaycontent = document.querySelector(".overlaycontent");
let exit = document.querySelector(".closebtn");

menu.addEventListener("click", showOverlay);

function showOverlay() {
  overlay.style.width = "250px";
  overlaycontent.style.display = "block";
  exit.style.display = "block";
  menu.style.visibility = "hidden";

  exit.addEventListener("click", closeOverlay);
}

function closeOverlay() {
  overlay.style.width = "0%";
  overlaycontent.style.display = "none";
  exit.style.display = "none";
  menu.style.visibility = "visible";
}
