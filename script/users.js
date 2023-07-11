$("[data-toggle=tooltip]").tooltip();
document.querySelector(".new-btn").addEventListener("click", function (e) {
  e.preventDefault();
});

const dropdownMenu = `
                    <div class="dropdown-menu bg-light">
                      <a href="#" class="dropdown-item">Reset password</a>
                      <a href="#" class="dropdown-item">Disable account</a>
                      <a href="#" class="dropdown-item">Delete account</a>
                    </div> `;

const dropdownButton = document.querySelectorAll(".info");
dropdownButton.forEach((drop) => {
  drop.addEventListener("click", function () {
    // add active-row to the corresponding row which dropdown btn clicked in it
    drop.parentElement.parentElement.classList.add("active-row");
    // make three dots visible untill dropdownMenu is open
    drop.classList.remove("d-none");
    // add dropdownMenu tag under the clicked three dots
    drop.insertAdjacentHTML("afterend", dropdownMenu);
  });
});

// click anywhere of page, if active-row exists, remove it
this.addEventListener("click", function () {
  // all rows
  const row = document.querySelectorAll("tr");
  row.forEach((each) => {
    if (each.classList.contains("active-row")) {
      each.classList.remove("active-row");
      // remove three dots when dropdownMenu disappear
      each.querySelector(".info").classList.add("d-none");
    }
  });
});
