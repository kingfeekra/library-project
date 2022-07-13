/*function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(title + " by " + author + ", " + pages + " pages, " + read)
    }
}

const book1 = new Book("The Hobbit", "JRR Tolkien", 256, "has been read")
console.log(book1.info());*/

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(title);
}

const list = document.querySelector("#list");
const books = [];

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        books[i] = document.createElement("li");
        books[i].setAttribute("data-index-number", i);
        books[i].textContent = myLibrary[i].title;
        list.appendChild(books[i]);
    }
}

function addButton() {
    const listItems = document.querySelectorAll("li");
    const buttons = [];
    for(let i = 0; i < listItems.length; i++) {
        buttons[i] = document.createElement("button");
        buttons[i].textContent = "Remove";
        buttons[i].classList.add("removeButton")
        listItems[i].appendChild(buttons[i]);
        }
}

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", () => {
    const listItems = document.querySelectorAll("li");
    for(let i = 0; i < listItems.length; i++) {
    list.removeChild(listItems[i]);
    }
    addBookToLibrary();
    displayBooks();
    addButton();
});


