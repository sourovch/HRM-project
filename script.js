import { MainSec } from "./components/mainSec.js";
customElements.define("main-sec", MainSec);


window.openModule = (e, id) => {
  e.preventDefault();

  const modal = document.getElementById(id);

  modal.classList.toggle("active");
}

window.closeModal = (e, id) => {
  e.preventDefault();

  const modal = document.getElementById(id);

  modal.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const dd = document.querySelectorAll(".dropdown");
  const menuBar = document.getElementById("menubar");
  const pageContents = document.getElementById("page-contents");
  const navCloser = document.querySelector(".nav-closer");
  const menuToggle = document.getElementById("menu-toggle");
  const fileSelector = document.querySelectorAll(
    ".form-wrapper input[type='file']"
  );
  const addBtn = document.getElementById("add-btn");
  const addForm = document.getElementById("add-form");
  const addFormClose = document.getElementById("add-form-close");
  const multiSelectList = document.querySelectorAll(".multi-select");

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
      console.log("ok");
      e.target.parentElement.dataset.filename = e.target.files[0].name || "";
    };
  });

  addBtn?.addEventListener("click", (e) => {
    addForm?.classList.toggle("active");
  });

  addFormClose?.addEventListener("click", (e) => {
    e.preventDefault();

    addForm?.classList.remove("active");
  });

  document.getElementById("logout-btn").onclick = (e) => console.log("Log Out");

  multiSelectList.forEach((multiSelect) => {
    const parentElement = multiSelect.parentElement;
    const options = multiSelect.querySelectorAll("select option");
    options[0].selected = true;

    const selectedCont = parentElement.querySelector(".selected-list");
    const selectDD = parentElement.querySelector(".select-dropdown");

    const selectData = findSelected(options);
    populate(selectedCont, selectData.selected);
    populate(selectDD, selectData.notSelected);

    multiSelect.onclick = () => {
      selectDD.classList.toggle("active");
    };

    function populate(cont, items = []) {
      cont.innerHTML = "";
      items.forEach((item) => {
        const div = document.createElement("div");
        div.dataset.index = item.index;
        div.innerText = item.text;

        div.onclick = (e) => {
          e.stopPropagation();

          if (options[item.index].selected) {
            options[item.index].selected = false;
          } else {
            options[item.index].selected = true;
          }

          const selectData = findSelected(options);
          populate(selectedCont, selectData.selected);
          populate(selectDD, selectData.notSelected);
        };

        cont.appendChild(div);
      });
    }

    function findSelected(options) {
      const selected = [];
      const notSelected = [];

      options.forEach((option, index) => {
        if (option.selected) {
          selected.push({ text: option.innerText, index });
        } else {
          notSelected.push({ text: option.innerText, index });
        }
      });

      return {
        selected,
        notSelected,
      };
    }
  });
});
