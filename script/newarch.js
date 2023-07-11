$("[data-toggle=tooltip]").tooltip();

const newDormitory = {
  companyName: "fissid",
  companyTel: "05010586003",
  companyMail: "saeed@gmail.com",
  companySite: "www.fissid.com",
  companyType: "web design",
  ownerName: "saeed salehi",
  ownerTel: "05010586003",
  ownerMail: "saeed@gmail.com",
  şubes: [],
  bloks: [],
  kats: [],
  odas: [],
  yataks: [],
};

const şube = {
  şubeID: 0,
  şubeName: "",
  şubeTel: 0,
  şubeManager: "",
  bloks: [],
};

const blok = {
  blokID: 0,
  blokName: "",
  kats: [],
};

const kat = {
  katID: 0,
  katNum: 0,
  odas: [],
};

const oda = {
  odaID: 0,
  odaNum: 0,
  yataks: [],
};

const yatak = {
  yatakID: 0,
  yatakNum: 0,
};

// target= data-target of calling button
// name= name of column
const openModal = function (target, name) {
  const boxes = {
    şube: ` <div class="form-group">
              <label for="id" class="h5">ID:</label>
              <input type="number" name="id" class="form-control" disabled id="şubeID" />
            </div>
            <div class="form-group">
              <label for="name" class="h5 text-capitalize">adı:</label>
              <input type="text" name="name" class="form-control" id="şubeName" />
            </div>
            <div class="form-group">
              <label for="tel" class="h5 text-capitalize">Tel:</label>
              <input type="tel" name="tel" class="form-control" inputmode="numeric" data-toggle="tooltip" data-placement="left" data-html="true" title="<h5 class='text-capitalize'>örnek:</h5><p>0501xxxxxx</p>" id="şubeTel" />
            </div>
            <div class="form-group">
              <label for="manager" class="h5 text-capitalize">müdür:</label>
              <input type="text" name="manager" class="form-control" id="şubeManager" />
            </div>`,
    blok: `<div class="form-group">
                <label for="id" class="h5">ID:</label>
                <input type="number" name="id" class="form-control" disabled id="blokID" />
              </div>
              <div class="form-group">
              <label for="name" class="h5 text-capitalize">adı:</label>
              <input type="text" name="name" class="form-control" value="Blok " id="blokName"/>
            </div>`,
    kat: `<div class="form-group">
            <label for="id" class="h5">ID:</label>
            <input type="number" name="id" class="form-control" disabled id="katID" />
          </div>
          <div class="form-group">
            <label for="name" class="h5 text-capitalize">kat numarası:</label>
            <input type="text" name="name" class="form-control" value="Kat " id="katNum"/>
          </div>`,
    oda: `<div class="form-group">
            <label for="id" class="h5">ID:</label>
            <input type="number" name="id" class="form-control" disabled id="odaID" />
          </div>
          <div class="form-group">
            <label for="name" class="h5 text-capitalize">oda numarası:</label>
            <input type="text" name="name" class="form-control" value="Oda " id="odaNum"/>
          </div>`,
    yatak: `<div class="form-group">
              <label for="id" class="h5">ID:</label>
              <input type="number" name="id" class="form-control" disabled id="yatakID" />
            </div>
            <div class="form-group">
              <label for="name" class="h5 text-capitalize">yatak numarası:</label>
              <input type="text" name="name" class="form-control" value="Yatak " id="yatakNum"/>
            </div>`,
  };
  const modalTag = `
  <div class="modal" id="${target.slice(1)}">
      <div class="modal-dialog">
        <div class="modal-content">
          <form action="#">
            <div class="modal-header bg-light">
              <div class="modal-title">
                <h4>Yeni ${name} ekle</h4>
              </div>
              <button class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              
              ${boxes[name]}
            </div>
            <div class="modal-footer bg-light">
              <button type="submit" class="btn btn-primary btn-block submit-btn" id="add-${target.slice(1)}" data-dismiss="modal">
                <span class="h5">Ekle</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>`;
  document.querySelector("main").insertAdjacentHTML("afterend", modalTag);
};

const addNewData = function (name) {
  // for each submit-btn
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const inputs = this.parentElement.parentElement.querySelectorAll("input");

    console.log(inputs);
  });
};

const addIds = function () {
  // for each new-btn add id with respect to its parent id (new-şube)
  document.querySelectorAll(".new-btn").forEach((each) => {
    each.id = `new-${each.parentElement.id}`;
  });
};

const OpenModal = function () {
  // for each new-btn add data-target, and extract its name from id to pass and set in modal tag
  // name: şube , target: #newşube
  document.querySelectorAll(".new-btn").forEach((each) => {
    // when each clicked, start to build modal
    each.addEventListener("click", function () {
      const target = `#${each.id.split("-").join("")}`;
      const name = each.id.split("-").at(-1);
      each.attributes[`data-target`].textContent = target;
      // check to see target element exist in tags or not, if no add it
      if (!document.querySelector("body").contains(document.querySelector(target))) {
        openModal(target, name);
      }

      addNewData(name);
    });
  });
};

const addArrow = function () {
  // add event for each button of each column
  document.querySelectorAll(".col .indiv").forEach((each) => {
    each.addEventListener("click", function () {
      // clear all badges(arrows) in the column if exist
      each.parentElement.parentElement.querySelectorAll(".badge").forEach((badge) => {
        if (!badge.classList.contains("d-none")) {
          badge.classList.add("d-none");
        }
      });
      // then add badge in the clicked button
      each.querySelector(".badge").classList.remove("d-none");
    });
  });
};

addIds();
OpenModal();
addArrow();
// submitButtons();
