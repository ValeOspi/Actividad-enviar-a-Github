
function clickedButton() {
    console.log("haz clickeado el boton")
}

function clickedElement (element) {
    console.log(element.innerText)
    element.innerText = "Logout" 
}

function remove(element) {
    element.remove();
    console.log("removiste el boton")
}
