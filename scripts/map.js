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
            x.style.transitionProperty = "transform";
            x.style.transitionDuration = "3s";
            x.style.transform = "translate(100px, 100px)";
        } else {
            // x.style.transform = "translate(100px, 100px)";
            // x.style.transition= "transform 500ms";

            x.style.transitionProperty = "background-color";
            x.style.transitionDuration = "3s";
            x.style.backgroundColor="blue";


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