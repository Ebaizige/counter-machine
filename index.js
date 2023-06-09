// document.getElementById("count-el").innerHTML = 200;
let count = 0;
let countElement = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");



function increment () {
    count = count + 1;
    countElement.innerHTML= count;
}



function save () {
    let countDashEl = count + " - ";
    saveEl.innerText = saveEl.innerText + countDashEl;
    countElement.innerHTML = 0;
    count = 0;
}