//Select popup box, popup overlay, button

let popupOverlay = document.querySelector(".popup-overlay")
let popupBox = document.querySelector(".popup-box")
let addPopupButton = document.getElementById("add-popup-btn")

addPopupButton.addEventListener("click", function (){
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
})

//Select cancel button

let cancelButton = document.getElementById("cancelbook")

cancelButton.addEventListener("click", function (event) {
    event.preventDefault()

    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
})

//Select container addbook, book-title-input, book-author-input, book-description-input

let container = document.querySelector(".container")
let addBook = document.getElementById("addbook")
let bookTitleInput = document.getElementById("book-title-input")
let bookAuthorInput = document.getElementById("book-author-input")
let bookDescriptionInput = document.getElementById("book-description-input")

addBook.addEventListener("click", function (event) {
    event.preventDefault()
    let div = document.createElement("div");

    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthorInput.value}</h5>
            <p>${bookDescriptionInput.value}</p>
            <button onclick=deletebook(event)>Delete</button>`
    container.append(div)

    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
})

function deletebook(event){
    event.target.parentElement.remove()
}