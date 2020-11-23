console.clear();

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// // for (let i = 0; i < magicSquare.length; i++) {
// //   let row = magicSquare[i];
// //   let sum = 0;
// //   for (let j = 0; j < row.length; j++) {
// //     sum += row[j];
// //   }
// //   console.log(`${row} summed to ${sum}`);
// // }

// for (let row of magicSquare) {
//   sum = 0;
//   for (let i of row) {
//     // console.log(i);
//     sum += i;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// function isValidPassword(password,username) {
// if (password !== ' ') {
// return
// }
// }

function isValidPassword(password, username) {
  return !(
    password.includes(" ") ||
    password.includes(username) ||
    password.length < 8
  );
}
