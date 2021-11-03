// console.log('Welcome to my notes app ')

showNotes();
// If user adds a note, add it toi the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        
        notesObj = JSON.parse(notes);
    }
    let dict = {};
    dict[addTitle.value] = addTxt.value;
    notesObj.push(dict);
    // console.log(dict, addTitle.value, addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTitle.value = '';
    addTxt.value = '';
    // console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    /* <h5 class="card-title">Note ${index + 1}</h5>*/

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
       <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                     <h5 class="card-title">${Object.keys(element)}</h5>
                    <p class="card-text">${element[Object.keys(element)]}</p>
                    <button id = '${index}' onclick = "deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
                </div>
            </div>
       ` ;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!! use 'add a notes' sections above to add notes.`
    }
}

// function for delete notes from local storage
function deleteNote(index) {
    console.log("i am deleted", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

// searching element
// function searchFunct() {
//     let s = document.getElementById('searchTxt').innerText;
    // console.log(s);
// }

let search = document.getElementById('searchTxt');

searchBtn.addEventListener('click', function () {
    let inputVal = search.value.toLowerCase().trim()
    // console.log("input event fired", inputVal);
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('h5')[0].innerText;
        if (cardTxt.toLowerCase().includes(inputVal)) {
            console.log(cardTxt);
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})
