// var input = document.getElementById("input");


// input.value = 4000;

// console.log(input.value);
var input = document.getElementById("input");

function addValue(value) {
    input.value += value;
}

function allClear() {
    input.value = ""
}
function valueClear() {
    var value = input.value;
    input.value = value.slice(0, -1)
}
function calculate() {
    input.value = eval(input.value)
}