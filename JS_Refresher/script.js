const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const books = getBook(1);
books;

// // const title = book.title;
// // const author = book.author;
// // author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...othergenres] = genres;

// console.log(primaryGenre, secondaryGenre, othergenres);

// const newGenres = [...genres, "epic fantasy"];
// newGenres;

// const updatedBook = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2012-01-19",
//   // overiding existing property
//   pages: 1210,
// };
// updatedBook;

// //
// // Template literals

// const summary = `${title} is a ${pages} page long book is published on ${
//   publicationDate.split("-")[0]
// } which was written by ${author}`;
// summary;

// //
// // Short Circuiting
// console.log(true && "Some string");
// console.log(false && "Some String");

// //falsy: 0, " " - empty value ,null

// //? Arrow function
// // const sum = (num1, num2) => {
// // return num1 + num2;
// // }
// // console.log(sum(2,3));

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// console.log(countWrong);

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(count);

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;

//   //? optional chaining = ?
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book));

//
//Map methods ARRAY

const book1 = getBooks();
const x = [1, 2, 3, 4, 5].map((e) => e * 2);
console.log(x);

const titles = book1.map((book) => book.title);
console.log(titles);

const essentialData = book1.map((book) => ({
  title: book.title,
  author: book.author,
  // reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

//
// Filter method Array and filter chaining
const longbook = book1
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longbook);

const adventureBooks = book1
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

//
//Reduce method Array
const pagesAllBooks = book1.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

//
//Sort Array

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); //Ascending Sort
console.log(sorted);
console.log(arr);

const sortedByPages = book1.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

//IMMUTABLE ARRAYS
const newBook = {
  id: 6,
  title: "Harry Puuter and Chembur ka Cigratte",
  author: " J. K Rawal",
};

//Add to an array
const bookAfterAdd = [...book1, newBook];
console.log(bookAfterAdd);

// Delete from array
const deleteBook = bookAfterAdd.filter((book) => book.id !== 3);
deleteBook;

// UPdate Book object in ARRAY
const bookAfterUpdate = deleteBook.map((book) =>
  book.id === 1 ? { ...book1 } : book
);
console.log(bookAfterUpdate);
