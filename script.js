const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submit = document.querySelector('#submit');
const form = document.querySelector('form');

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBooktoLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBooktoLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
  form.reset();
  console.log(library);
});