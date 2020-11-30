console.clear();

const numbers = [1, 2, 3, 4, 5];
const names = ["Asta", "Nord", "Saga", "Rosa", "Finnur"];

const movies = [
  {
    title: "Idioterne",
    maker: "Lars Von Trier",
    IMDB: 6.8,
  },
  {
    title: "Festen",
    maker: "Thomas Vinterberg",
    IMDB: 8,
  },
  {
    title: "De Fem Benspænd",
    maker: "Lars Von Trier (Jørgen Leth)",
    IMDB: 7.5,
  },
];

test = [];

// movies.forEach((movie) => {
// if (movie.IMDB > 7) {
// test.unshift(movie.IMDB);
// }
// });

movies.forEach((movie) => {
  if (!movie.maker.toLocaleLowerCase().includes("l")) {
    test.push(movie.maker);
  }
});

// const ratings = movies.filter((ratings) => ratings > 5);

// const ratings = movies.IMDB((rating) => );

// const accuIMDB = movies.reduce((a, b) => {
// return a.IMDB + b.IMDB;
// });

//  let alpha = [
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
