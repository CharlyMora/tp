"use strict";

function cardtoggle(cardName) {
  var id = cardName + "card";
  var x = document.getElementById(id);

  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}