"use strict";

var isACardActive = false;

function cardtoggle(cardName) {
  var id = cardName + "card";
  var x = document.getElementById(id);

  if (isACardActive) {
    hideCards();
  } else {
    // if (x.style.display === "none" || "") {
    if (x.style.display != "flex") {
      x.style.display = "flex";
      setTimeout(function () {
        return x.style.opacity = 100;
      }, 1);
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
    var _loop = function _loop() {
      var item = _step.value;
      item.style.opacity = 0;
      setTimeout(function () {
        return item.style.display = "none";
      }, 900);
    };

    for (var _iterator = y[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
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