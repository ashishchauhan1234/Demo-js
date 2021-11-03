console.log("Welcome to your college library using ES6 version");

// constructor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// Display Constructor
class Display {
    add() {
        // console.log("adding to book ui");
        let tableBody = document.getElementById('tableBody');
        let books = localStorage.getItem("books");
        let booksObj = new Array();
        if (books == null) {
            booksObj = [];
        }
        else {
            booksObj = JSON.parse(books);
        }
        // console.log(booksObj, typeof booksObj);
        let uiString = ``;
        Array.from(booksObj).forEach(function (book, index) {
            // console.log(book, "+", book, "+", index);
            uiString += `
                <tr>
                    <th scope="row">${index}</th>
                    <td>${book.name}</td>
                    <td>${book.author} </td>
                    <td>${book.type}</td>
                    <td><button id = '${index}' onclick = "display.deleteBook(this.id)" class="btn btn-primary">Delete notes</button></td>

                </tr>
            `;
        })
        tableBody.innerHTML = uiString;
    }
    deleteBook(index) {
        let books = localStorage.getItem("books");
        let booksObj = new Array();
        if (books == null) {
            booksObj = [];
        }
        else {
            booksObj = JSON.parse(books);
        }
        booksObj.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(booksObj));
        this.add()
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset()
    }
    validate(book) {
        if (book.name.length >= 3 || book.author.length >= 3) {
            return true;
        }
        else {
            return false;
        }
    }
    saveData(book) {
        let books = localStorage.getItem("books");
        let booksObj = new Array();
        if (books == null) {
            booksObj = [];
        }
        else {
            booksObj = JSON.parse(books);
        }
        booksObj.push(book);
        localStorage.setItem('books', JSON.stringify(booksObj));
        // console.log("book has been saved in the lo0cal storage");
    }
    show(type, displayMessage) {
        let message = document.getElementById("message");
        let boldText;
        if (type === 'success') {
            boldText = 'Success !';
        }
        else {
            boldText = 'Error !'
        }
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${boldText}!</strong> ${displayMessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000)
    }
}

// add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted library form");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.clear();
        display.show('success', 'congrats, Your book has successfully added');
        display.saveData(book);
        display.add();
    }
    else {
        display.show("danger", 'sorry, You can not added this book');
    }

    e.preventDefault();
}
let display = new Display();
display.add();

let inputEle1 = document.querySelector('#bookName');
let inputEle2 = document.querySelector('#author');
inputEle1.addEventListener('input', changeBgColor)
inputEle2.addEventListener('input', changeBgColor)

function changeBgColor() {
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${x},${y},${(x + y)} )`;
}


