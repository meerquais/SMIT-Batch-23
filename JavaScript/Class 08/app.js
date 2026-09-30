// Chap #1

// Q.1

// alert("Welcome to our Website!");

// Q.2

// console.log("A" === "a");

// var cleanestCities = ["karachi", "lahore", "lslamabad", "peshawar", "quetta", "sawad", "kashmir"];
// var cityToCheck = prompt("Type your City");

// for (var i = 0; i < cleanestCities.length; i++) {

//     if (cityToCheck.toLowerCase() === cleanestCities[i]) {
//         console.log("It's one of the Cleanest City.")
//     }

// }


// var msg = "This is my Javascript project";

// // console.log(msg.toUpperCase());

// console.log(msg[5]);


// var city = "Boston";

// // B o s t o n

// console.log(city[0]);
// console.log(city[1]);
// console.log(city[2]);
// console.log(city[3]);
// console.log(city[4]);
// console.log(city[5]);


// string.slice(start,end);

// var city = "Boston";

// var result = city.slice(0, 1);
// var result = city.slice(2, 5);

// console.log(result);

// console.log(city.length);


// var city = prompt("Enter your city name!");

// var firstChar = city.slice(0, 1);

// var otherChars = city.slice(1);

// firstChar = firstChar.toUpperCase();

// var cappedCity = firstChar + otherChars


// console.log(cappedCity);


// var text = "Hello World";

// var result = text.indexOf("World");


// console.log(result);


// H e l l o   W o r l d
// 0 1 2 3 4 5 6 7 8 9 10

//             w

// var text = "Hello World";

// var result = text.indexOf("World");

// console.log(result);


// if (result !== -1) {
//     // text mil gaya
//     console.log("Text mil gaya");

// }


// var text = "Hello World";

// var result = text.lastIndexOf("l");

// console.log(result);


// var text = "I love studying World War II history";

// var firstChar = text.indexOf("World War II");

// console.log(firstChar);


// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//     console.log(text);

// }



var text = "I love studying World War II history and other World War II Details!";


// var newText = text.replace("World War II", "Second World War");
// var newText = text.replaceAll("World War II", "Second World War");
var newText = text.replace(/World War II/g, "Second World War");

console.log(newText);
