// Variables and functions

const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");
const x = {};
const buttons = document.querySelectorAll("button");
// const listen = buttons.addEventListener("click", function () {
//   console.log(addItem.closets(div));
// });

const createItem = (input) => {
  // Creating new elements
  const div = document.createElement("div");
  const item = document.createElement("li");
  const btnDone = document.createElement("button");
  const btnDelete = document.createElement("button");
  // Appending new elements
  const newDiv = list.appendChild(div);
  const newItem = newDiv.appendChild(item);
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
  // return btnDelete;
  // console.log(btnDelete.id);
  // btnDelete.addEventListener("click", function () {
  // document.querySelector(btnDelete.id).parentElement.remove();
  // });
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
