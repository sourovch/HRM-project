import { MainSec } from "./components/mainSec.js";
customElements.define("main-sec", MainSec);

function print(e) {
  const printArea = document.getElementById("print");
  
  print();
}

document.addEventListener("DOMContentLoaded", () => {
  const dd = document.querySelectorAll(".dropdown");
  const menuBar = document.getElementById("menubar");
  const pageContents = document.getElementById("page-contents");
  const navCloser = document.querySelector(".nav-closer");
  const menuToggle = document.getElementById("menu-toggle");
  const fileSelector = document.querySelectorAll(".form-wrapper input[type='file']")
  const addBtn = document.getElementById('add-btn');
  const addForm = document.getElementById('add-form');
  const addFormClose = document.getElementById('add-form-close');

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

  fileSelector.forEach((elem) => {
    elem.onchange = (e) => {
      console.log("ok")
      e.target.parentElement.dataset.filename = e.target.files[0].name || "";
    }
  })

  addBtn?.addEventListener('click', (e) => {
    addForm?.classList.toggle('active');
  })

  addFormClose?.addEventListener('click', (e) => {
    e.preventDefault();
    
    addForm?.classList.remove('active');
  })

  document.getElementById("logout-btn").onclick = (e) => console.log("Log Out");
});
