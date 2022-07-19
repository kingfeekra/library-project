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
const bookCard = [];
const bookList = [];

const bookTitle = [];
const bookAuthor = [];
const bookPages = [];
const bookRead = [];

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        bookCard[i] = document.createElement("div");
        bookCard[i].classList.add("bookCard")
        bookCard[i].setAttribute("data-index-number", i);
        list.appendChild(bookCard[i]);

        bookList[i] = document.createElement("ul");
        bookCard[i].appendChild(bookList[i]);

        bookTitle[i] = document.createElement("li");
        bookTitle[i].textContent = "Title: " + myLibrary[i].title;
        bookList[i].appendChild(bookTitle[i]);

        bookAuthor[i] = document.createElement("li");
        bookAuthor[i].textContent = "Author: " + myLibrary[i].author;
        bookList[i].appendChild(bookAuthor[i]);

        bookPages[i] = document.createElement("li");
        bookPages[i].textContent = "Pages: " + myLibrary[i].pages;
        bookList[i].appendChild(bookPages[i]);

        bookRead[i] = document.createElement("li");
        bookRead[i].textContent = "Read? " + myLibrary[i].read;
        bookList[i].appendChild(bookRead[i]);
    }
}

function addButton() {
    const bookCard = document.querySelectorAll(".bookCard");
    const dataAttribute = document.querySelectorAll("data-index-number")
    const buttonDivs = [];
    const deleteButtons = [];
    const readButtons = [];
    for(let i = 0; i < bookCard.length; i++) {
        buttonDivs[i] = document.createElement("div");
        deleteButtons[i] = document.createElement("img");
        deleteButtons[i].src = "images/delete-forever-outline-small.png";
        deleteButtons[i].classList.add("deleteButton");
        deleteButtons[i].addEventListener("click", () => {
            myLibrary.splice(dataAttribute[i], 1);
            list.removeChild(bookCard[i]);
            console.log(myLibrary);
        });

        readButtons[i] = document.createElement("img");
        readButtons[i].src = "images/book-outline-small.png";
        readButtons[i].classList.add("readButton");
        readButtons[i].addEventListener("click", () => {
            if(myLibrary[i].read == "Yes") {
                myLibrary[i].read = "No";
                bookRead[i].textContent = "Read? No";
            }
            else if (myLibrary[i].read == "No") {
                myLibrary[i].read = "Yes";
                bookRead[i].textContent = "Read? Yes";
            }
            console.log(myLibrary[i].read)
        })

        bookCard[i].appendChild(buttonDivs[i]);
        buttonDivs[i].appendChild(deleteButtons[i]);
        buttonDivs[i].appendChild(readButtons[i]);
        }
    }

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", () => {
    const bookCards = document.querySelectorAll(".bookCard");
    /*for(let i = 0; i < bookCards.length; i++) {
    list.removeChild(bookCard[i]);
    }*/
    list.innerHTML = "";
    addBookToLibrary();
    displayBooks();
    addButton();
});

const deleteButton = document.querySelectorAll(".deleteButton");
for(let i = 0; i < deleteButton.length; i++) {
deleteButton[i].addEventListener("click", () => {
    const bookCards = document.querySelectorAll(".bookCard");
    list.removeChild(bookCards[i]);
    console.log(poop);
})
}
