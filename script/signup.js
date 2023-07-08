const newDormitory = {
  companyName: "",
  companyTel: "",
  companyMail: "",
  companySite: "",
  companyType: "",
  ownerName: "",
  ownerTel: "",
  ownerMail: "",
};

const addWarn = function (input) {
  input.classList.add("border-danger");
  input.parentElement.querySelector("span").classList.add("text-light", "border-danger", "bg-danger");
  document.querySelector(".zor").classList.add("text-danger");
};

const removeWarn = function (input) {
  input.classList.remove("border-danger");
  input.parentElement.querySelector("span").classList.remove("text-light", "border-danger", "bg-danger");
};

document.querySelector(".devam").addEventListener("click", function (e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) {
      newDormitory[input.id] = input.value;
      if (input.parentElement.querySelector("span")) {
        removeWarn(input);
      }
    } else {
      if (input.parentElement.querySelector("span")) {
        addWarn(input);
      }
    }
  });
  console.log(newDormitory);
});
