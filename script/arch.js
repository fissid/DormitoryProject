let menus = [];
for (let k = 1; k <= 5; k++) {
  // document.querySelector(`#col--${k}`).classList.add("d-none");
  menus.push(document.querySelector(`#col--${k - 1}`));
}

for (let s = 0; s < menus.length; s++) {
  let col = menus[s].querySelectorAll(".indiv");
  //   console.log(menus[s]);
  for (let i = 0; i < col.length; i++) {
    // console.log(col[i]);
    col[i].addEventListener("click", (e) => {
      // clear all the arrows of the column
      for (let j = 0; j < col.length; j++) {
        if (!col[j].querySelector(".badge").classList.contains("d-none")) {
          col[j].querySelector(".badge").classList.add("d-none");
        }
      }
      // add arrow
      col[i].querySelector(".badge").classList.remove("d-none");
    });
  }
}

const newBtn = document.querySelectorAll(".new-btn");
const modalWindow = document.querySelector(".modal-data");
const modalClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  overlay.classList.add("d-none");
  modalWindow.classList.add("d-none");
};

for (let b = 0; b < newBtn.length; b++) {
  newBtn[b].addEventListener("click", () => {
    overlay.classList.remove("d-none");
    modalWindow.querySelector(".modal-title-word").textContent = newBtn[b].parentElement.parentElement.parentElement.previousElementSibling.querySelector("span").textContent;
    modalWindow.classList.remove("d-none");
  });
}
overlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalWindow.classList.contains("d-none")) {
    closeModal();
  }
});
