let branches = document.querySelectorAll("#col--0 .indiv");
let menus = [];
let k = 1;
for (k; k <= 4; k++) {
  document.querySelector(`#col--${k}`).classList.add("d-none");
  menus.push(document.querySelector(`#col--${k - 1}`));
}
menus.push(document.querySelector(`#col--${k - 1}`));

console.log(menus.length);
k = 1;

for (let s = 0; s < menus.length; s++) {
  let col = menus[s].querySelectorAll(".indiv");
  //   console.log(menus[s]);
  for (let i = 0; i < col.length; i++) {
    // console.log(col[i]);
    col[i].addEventListener("click", () => {
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

// for (let i = 0; i < branches.length; i++) {
//   branches[i].addEventListener("click", () => {
//     // clear all the arrows of the column
//     for (let j = 0; j < branches.length; j++) {
//       if (!branches[j].querySelector(".badge").classList.contains("d-none")) {
//         branches[j].querySelector(".badge").classList.add("d-none");
//       }
//     }
//     // add arrow
//     branches[i].querySelector(".badge").classList.remove("d-none");
//     // open next column
//     document.querySelector(`#col--${k}`).classList.remove("d-none");
//   });
// }
