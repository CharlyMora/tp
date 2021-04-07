let isACardActive =true;

function cardtoggle(cardName) {
    let id = cardName+"card"
    let x = document.getElementById(id)

    if(isACardActive) {
        hideCards()
    }else{
        if (x.style.display === "none") {
            x.style.display = "flex";
            isACardActive =true
        } else {
            x.style.display = "none";
            isACardActive=false
        }
    
    }

    
    
}

function hideCards() {
    let y = document.getElementsByClassName('card')
    
    for (let item of y) {
        item.style.display = "none"
    }

    isACardActive=false
}