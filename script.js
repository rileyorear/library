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

function addBooktoPage() {
  const bookElement = document.createElement("div");
  document.querySelector(".books").appendChild(bookElement);
  bookElement.classList.add("book");
  
  if (document.getElementById(titleInput.value) === null) {
    bookElement.id = titleInput.value+authorInput.value;
  
    const titleElement = document.createElement("p");
    document.getElementById(bookElement.id).appendChild(titleElement);
    titleElement.innerHTML += `<strong>Title: </strong>${titleInput.value}`;
    
    const authorElement = document.createElement("p");
    document.getElementById(bookElement.id).appendChild(authorElement);
    authorElement.innerHTML += `<strong>Author: </strong>${authorInput.value}`;
    
    const pagesElement = document.createElement("p");
    document.getElementById(bookElement.id).appendChild(pagesElement);
    pagesElement.innerHTML += `<strong>Pages: </strong>${pagesInput.value}`;
    
    const readElement = document.createElement("p");
    document.getElementById(bookElement.id).appendChild(readElement);
    readElement.innerHTML += `<strong>Read: </strong>${readInput.value}`;
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBooktoLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
  addBooktoPage();
  form.reset();
  console.log(library);
});