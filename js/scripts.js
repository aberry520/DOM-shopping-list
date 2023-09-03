'use strict';
/////global variables\\\\\
const myList = document.querySelector("#myList");
const generateList = document.querySelector("#generateList"); 
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
let array = [];
//////////////////////////

//pushes items into an array
function arr(){
    const listBegin="<ul>";
    const listEnd="</ul>";
    if (one.value !== "") {
        array.push("<li>" + one.value + "</li>");
      }
    
      if (two.value !== "") {
        array.push("<li>" + two.value + "</li>");
      }
    
      if (three.value !== "") {
        array.push("<li>" + three.value + "</li>");
      }
    
      if (four.value !== "") {
        array.push("<li>" + four.value + "</li>");
      }
    
    return listBegin + array.join("") + listEnd;
};
//sets each value to ""
function reset(){
    one.value = "";
    two.value = "";
    three.value = "";
    four.value = "";
}

//clears list
clearList.addEventListener("click", clear);
function clear(){
    myList.innerHTML = "";//removes html
    array = [];//resets array to empty
};
//generates list
generateList.addEventListener("click", list);
function list(event){
    event.preventDefault();
    if (myList.innerHTML = arr()){
        reset();
    };
};