"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Khalel Abaquin
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

//The first line of code loads an anonymous function as soon as the browser loads.
window.addEventListener("load", function () {
    //Inside the anonymous function, the variable 'allSelect' is declared & a for loop looping through the 'allSelect' collection is created.
    var allSelect = document.forms.govLinks;
    for (var i = 0; i < allSelect.length; i++) {
        //When the document has been changed, another anonymous function will run & target the value of 'e' & find the location of the 'href' attribute.
        document.onchange = function (e) {
            location.href = e.target.value;
        }
    }
})