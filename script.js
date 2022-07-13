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

const book1 = new Book("The Hobbit", "JRR Tolkien", 256, "has been read");

function addBookToLibrary() {
    myLibrary.push(book1);
    console.log(myLibrary);
}

addBookToLibrary();