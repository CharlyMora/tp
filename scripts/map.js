let isACardActive =false;
function cardtoggle(cardName) {
    let id = cardName+"card"
    let x = document.getElementById(id)

    if(isACardActive) {
        hideCards()
    }else{
        // if (x.style.display === "none" || "") {
        if (x.style.display !="flex") {

            x.style.display = "flex"

            setTimeout(()=>x.style.opacity = 100, 1)
            
            
            
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
        item.style.opacity = 0
        setTimeout(()=>item.style.display = "none", 900)
        
        
    }

    isACardActive=false
}