// Variables and functions

const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");

const createItem = (input) => {
  const item = document.createElement("li");
  const btnDone = document.createElement("button");
  const btnDelete = document.createElement("button");
  // const itemBtn =
  const newItem = list.appendChild(item);
  list.appendChild(btnDone);
  list.appendChild(btnDelete);
  btnDone.id = "btnDone";
  btnDelete.id = "btnDelete";
  // btnDelete.setAttribute("id","btnDelete")
  newItem.innerHTML = input;
  console.log(newItem);
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

// inputField.value = "";
//Event Listeners - (button) capture input,

// Check and remove item.

//appendChild - create item

//innerHTML (textContent) - create content in item.
