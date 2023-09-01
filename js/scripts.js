'use strict';
const myList = document.querySelector("#myList");
const generateList = document.querySelector("#generateList");

generateList.addEventListener("click", arr);
function arr(event){
    event.preventDefault();
    const one = document.getElementById("one").value;
    const two = document.getElementById("two").value;
    const three = document.getElementById("three").value;
    const four = document.getElementById("four").value;
    const input = [one,two,three,four];
    console.log(input);
};



//need to get the text input; put it in an array maybe?
//js needs to create an ls when button is pressed
//need to insert that text input into a list
