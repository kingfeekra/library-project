
let myLibrary = [];

function Book(title, author, pages, read) { //book object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary() { //adds book to library array
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

function displayBooks() { //displays book information on cards
    for(let i = 0; i < myLibrary.length; i++) {
        bookCard[i] = document.createElement("div");
        bookCard[i].classList.add("bookCard")
        bookCard[i].setAttribute("data-index-number", i);
        list.appendChild(bookCard[i]);

        bookList[i] = document.createElement("ul");
        bookCard[i].appendChild(bookList[i]);

        bookTitle[i] = document.createElement("li");
        bookTitle[i].textContent = myLibrary[i].title;
        bookTitle[i].classList.add("bookTitle");
        bookList[i].appendChild(bookTitle[i]);

        bookAuthor[i] = document.createElement("li");
        bookAuthor[i].textContent = myLibrary[i].author;
        bookList[i].appendChild(bookAuthor[i]);

        bookPages[i] = document.createElement("li");
        bookPages[i].textContent = myLibrary[i].pages + " Pages";
        bookList[i].appendChild(bookPages[i]);

        bookRead[i] = document.createElement("li");
        bookRead[i].textContent = "Read? " + myLibrary[i].read;
        bookList[i].appendChild(bookRead[i]);
    }
}

function addButton() { //adds remove button and read/unread button to cards
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
submitButton.addEventListener("click", (event) => { //empties card list and re-displays library with added book
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    
    if(title == "" || author == "" || pages == "" || read == "") {
        return; //form can't be submitted if any field is empty
    }
    else {
    list.innerHTML = "";
    addBookToLibrary();
    displayBooks();
    addButton();
    event.preventDefault(); //prevent page reloading on submission
    }
});

const deleteButton = document.querySelectorAll(".deleteButton");
for(let i = 0; i < deleteButton.length; i++) {
deleteButton[i].addEventListener("click", () => { //removes card from list
    const bookCards = document.querySelectorAll(".bookCard");
    list.removeChild(bookCards[i]);
})
}
