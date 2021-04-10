"use strict";

var isACardActive = true;

function cardtoggle(cardName) {
  var id = cardName + "card";
  var x = document.getElementById(id);

  if (isACardActive) {
    hideCards();
  } else {
    if (x.style.display === "none") {
      x.style.display = "flex";
      isACardActive = true;
    } else {
      x.style.display = "none";
      isACardActive = false;
    }
  }
}

function hideCards() {
  var y = document.getElementsByClassName('card');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = y[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      item.style.display = "none";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  isACardActive = false;
}