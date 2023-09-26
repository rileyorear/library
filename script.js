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

function addBookToLibraryArr(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
}

let counter = 0;
function addBookToLibrary () {
  bookElement = document.createElement("div");
  document.querySelector(".books").appendChild(bookElement)
  bookElement.classList.add("book");

  bookElement.id = counter;
  counter++;

  const titleElement = document.createElement("p");
  document.getElementById(bookElement.id).appendChild(titleElement);
  titleElement.innerHTML += `<strong>Title: </strong>${library[bookElement.id].title}`;
  
  const authorElement = document.createElement("p");
  document.getElementById(bookElement.id).appendChild(authorElement);
  authorElement.innerHTML += `<strong>Author: </strong>${library[bookElement.id].author}`;
  
  const pagesElement = document.createElement("p");
  document.getElementById(bookElement.id).appendChild(pagesElement);
  pagesElement.innerHTML += `<strong>Pages: </strong>${library[bookElement.id].pages}`;
  
  const readElement = document.createElement("p");
  document.getElementById(bookElement.id).appendChild(readElement);
  readInput.checked === true ? library[bookElement.id].read = "Yes"
                             : library[bookElement.id].read = "No";
  readElement.innerHTML += `<strong>Read: </strong>${library[bookElement.id].read}`;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (titleInput.value !== "") {
  addBookToLibraryArr(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
  addBookToLibrary();
  }

  form.reset();
  console.log(library);
});