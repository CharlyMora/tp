function cardtoggle(cardName) {
    let id = cardName+"card"
    let x = document.getElementById(id)
    if (x.style.display === "none") {
    x.style.display = "flex";
    } else {
    x.style.display = "none";
    }
}