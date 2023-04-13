import { MainSec } from "./components/mainSec.js";
customElements.define("main-sec", MainSec);

document.addEventListener("DOMContentLoaded", () => {
  const dd = document.querySelectorAll(".dropdown");
  const menuBar = document.getElementById("menubar");
  const pageContents = document.getElementById("page-contents");
  const navCloser = document.querySelector(".nav-closer");
  const menuToggle = document.getElementById("menu-toggle");

  dd.forEach((i) => {
    i.onclick = () => {
      i.classList.toggle("open");
    };
  });

  menuToggle.onclick = () => {
    menuBar.classList.toggle("active");
    navCloser.classList.toggle("active");
    menuBar.classList.remove("p-absolute");
    pageContents.classList.add("m0");
  };

  navCloser.onclick = () => {
    menuBar.classList.remove("active");
    navCloser.classList.remove("active");
  };

  menuBar.ontransitionend = () => {
    const isActive = menuBar.classList.contains("active");
    if (!isActive) {
      pageContents.classList.remove("m0");
      menuBar.classList.add("p-absolute");
    }
  };
});
