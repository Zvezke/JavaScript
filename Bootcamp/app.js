// Variables and functions

const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");
const x = {};
const buttons = document.querySelectorAll("button");
// Creating new elements
// Appending new elements

const createItem = (input) => {
  const item = document.createElement("li");
  const div = document.createElement("div");
  const newDiv = list.appendChild(div);
  const newItem = newDiv.appendChild(item);
  const btnDone = document.createElement("button");
  const btnDelete = document.createElement("button");

  newDiv.appendChild(btnDone);
  newDiv.appendChild(btnDelete);
  btnDone.id = "btnDone";
  console.log(x);
  console.log([Object.keys(x).length]);
  btnDelete.id = "_" + [Object.keys(x).length];
  x[Object.keys(x).length] = input;
  newItem.innerHTML = input;

  btnDelete.addEventListener("click", function () {
    btnDelete.parentElement.remove();
  });

  btnDone.addEventListener("click", function () {
    newDiv.classList.toggle("done");
  });
};

addItem.addEventListener("click", function () {
  createItem(inputField.value);
  inputField.value = "";
});

inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createItem(this.value);
    this.value = "";
  }
});
