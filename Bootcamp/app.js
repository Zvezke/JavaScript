// Variables and functions

const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addItem = document.querySelector("#addItem");

const createItem = (input) => {
  const item = document.createElement("li");
  const newItem = list.appendChild(item);
  newItem.innerHTML = input;
};

// const inputValue = () => {
// const inputValue = inputField.value;
// console.log(inputValue);
// };

addItem.addEventListener("click", () => {
  createItem(inputField.value);
});
// InputField - create item on 'Enter and reset inputField

//Event Listeners - (button) capture input,

// Check and remove item.

//appendChild - create item

//innerHTML (textContent) - create content in item.
