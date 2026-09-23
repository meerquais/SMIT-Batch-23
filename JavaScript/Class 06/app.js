console.log("JavaScript Connected!");



// for(init;condition;incre/decre(update)){
//     // code
// }


// for (var i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


// for (var i = 1; i <= 50; i++) {

//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }



// var num = +prompt("Type your number");
// var num1 = +prompt("Type how many times it should count");


// for (var i = 1; i <= num1; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// for (var i = 1; i <= num1; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + " <br />")
// }


// var fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits.length);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var userPrompt = prompt("type your city name");

// for (var i = 0; i < cities.length; i++) {

//     if (cities[i] === userPrompt) {
//         console.log("City Found!");
//     } else {
//         console.log("Not Found!");
//     }
// }



var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var userPrompt = prompt("type your city name");

var matchFound = false;

for (var i = 0; i < cities.length; i++) {

    if (cities[i] === userPrompt) {
        matchFound = true;
        break;
    }
}

if (matchFound) {
    console.log("City Found!");
} else {
    console.log("City Not Found!");
}