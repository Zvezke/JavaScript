// Variables and functions

const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");

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
  btnDelete.id = "btnDelete";
  newItem.innerHTML = input;
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
