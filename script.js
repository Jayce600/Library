
// this is the parent the cards are added to
const main = document.querySelector("main");

// this is the button to add books to the page
const addButton = document.querySelector(".add-button");

// overlay reference
const overlay = document.querySelector(".overlay");

// referencing submit
const submit = document.querySelector("#submit");

initialise();

// initialising function
function initialise(){
    addButton.addEventListener("click", addEvent);
    submit.addEventListener("click", submitForm);
}

function addEvent(){
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".content").style.visibility = "visible";
    overlay.addEventListener("click", removeOverlay);
}

function removeOverlay(){
    document.querySelector(".overlay").style.visibility = "hidden";
    document.querySelector(".content").style.visibility = "hidden";
    overlay.removeEventListener("click", removeOverlay);
}

function submitForm(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    // radio buttons need to be fixed
    let read = document.querySelector("#read-yes");

    removeOverlay();
    setCard(title, author, pages, read.checked)
}

function setCard(title, author, pages, read){
    let card = document.createElement("div");
    card.classList.add("card");
    if (read === true){
        card.classList.add("read")
    } else {
        card.classList.add("not-read")
    }
    card.innerHTML = `${title} <br> ${author} <br> ${pages}`;
    main.appendChild(card);
}




