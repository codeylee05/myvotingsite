"use strict";

//index.html navigation buttons
var buttons = document.querySelectorAll(".navs");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var url = this.getAttribute("data-url");
    window.location.href = url;
  });
}

; //reg.html button to go back home

var button = document.getElementById("returnnav");
button.addEventListener("click", function () {
  window.location.href = "index.html";
}); //campaigns.html buttons to access pass.html (default)

var button = document.getElementById("access-cand1");
button.addEventListener("click", function () {
  window.location.href = "pass.html";
});
var button = document.getElementById("access-cand2");
button.addEventListener("click", function () {
  window.location.href = "pass.html";
});