import { MainSec } from "./components/mainSec.js";
customElements.define("main-sec", MainSec);

window.openModule = (e, id) => {
  e.preventDefault();
  document.documentElement.style.overflowY = "hidden";

  const modal = document.getElementById(id);

  modal.classList.add("active");
};

window.closeModal = (e, id) => {
  e.preventDefault();

  document.documentElement.style.overflowY = "visible";

  const modal = document.getElementById(id);

  modal.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const dd = document.querySelectorAll(".dropdown");
  const menuBar = document.getElementById("menubar");
  const pageContents = document.getElementById("page-contents");
  const navCloser = document.querySelector(".nav-closer");
  const menuToggle = document.getElementById("menu-toggle");
  const fileSelector = document.querySelectorAll(
    ".form-wrapper input[type='file']"
  );
  const textInputs = document.querySelectorAll(
    ".form-wrapper input[type='text']"
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

    multiSelect.onclick = (e) => {
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

  // text suggestions
  const allInputSagDD = document.querySelectorAll(".input-suggestions-dd");

  function removeAllSagDD() {
    for (let inputSagDD of allInputSagDD) {
      inputSagDD.style.display = "none";
    }
  }
  document.addEventListener("click", removeAllSagDD);

  textInputs.forEach((textInput) => {
    const inputSagDD = textInput.parentElement.querySelector(
      ".input-suggestions-dd"
    );

    if (!inputSagDD) return;

    const inputSags = inputSagDD?.querySelectorAll(".input-suggestion");
    const searchArr = [];

    inputSags?.forEach((sag) => searchArr.push(sag.innerText));

    textInput.addEventListener("click", (e) => e.stopPropagation());

    textInput.addEventListener("focus", (e) => {
      removeAllSagDD();
      inputSagDD.style.display = "block";
    });

    inputSagDD.addEventListener("click", (e) => {
      const clickedElm = e.target;

      if (!Array.from(clickedElm.classList).includes("input-suggestion"))
        return;

      textInput.value = clickedElm.innerText;
    });

    setSuggestions(textInput, inputSagDD, searchArr);
  });

  function setSuggestions(inp, dd, arr) {
    let activeSagIndex = -1;

    inp.addEventListener("input", (e) => {
      const inputText = inp.value;

      dd.innerHTML = "";
      const matches = getMatch(inputText, arr);

      matches.forEach((match) => {
        const div = document.createElement("div");
        div.classList.add("input-suggestion");
        div.innerText = match;

        dd.appendChild(div);
      });
    });

    inp.addEventListener("keydown", (e) => {
      if (![40, 38, 13].includes(e.keyCode)) return;

      const sagElms = dd.children;

      if (e.keyCode === 40)
        activeSagIndex = limitInc(-1, activeSagIndex + 1, sagElms.length - 1);
      if (e.keyCode === 38)
        activeSagIndex = limitInc(-1, activeSagIndex - 1, sagElms.length - 1);

      const activeSagElm = sagElms[activeSagIndex];

      if (e.keyCode === 13) {
        e.preventDefault();
        inp.value = activeSagElm.innerText;
      }

      for (let sagElm of sagElms) {
        sagElm.classList.remove("active");
      }
      activeSagElm?.classList.add("active");
    });
  }

  function getMatch(text, arr) {
    const matchArr = [];
    arr.forEach((item) => {
      if (item.toLowerCase().includes(text.toLowerCase())) matchArr.push(item);
    });
    return matchArr;
  }

  function limitInc(min, value, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }
});
