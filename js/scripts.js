'use strict';
const myList = document.querySelector("#myList");
const generateList = document.querySelector("#generateList");

function arr(){
    const one ="<ul>"+"<li>" + document.getElementById("one").value + "</li>";
    const two = "<li>" + document.getElementById("two").value + "</li>";
    const three = "<li>" + document.getElementById("three").value + "</li>";
    const four = "<li>" + document.getElementById("four").value + "</li>"+"</ul>";
    return one + two + three + four;
};

generateList.addEventListener("click", list);
function list(event){
    event.preventDefault();
    myList.innerHTML = arr();
};

//need to get the text input; put it in an array maybe?
//js needs to create an ls when button is pressed
//need to insert that text input into a list
