console.clear();

const numbers = [1, 2, 3, 4, 5];
const words = ["Asta", "Nord", "Saga"];

const newNumbers = numbers.map(function (num) {
  return num * 2;
});

const booleanWord = words.map(function (word) {
  return {
    value: word,
    isInString: word.includes("A"),
  };
});

// let alpha = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const names = ["Asta", "Nord", "Saga"];
