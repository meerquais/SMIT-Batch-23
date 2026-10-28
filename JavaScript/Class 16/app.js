console.log("Hello, World!");



// while (condition) {
//     // code to be executed
// }

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }


// var i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }


// var num = 2;

// while (num <= 10) {
//     console.log(num);
//     num = num + 2;
// }

// var count = 10;


// while (count >= 1) {
//     console.log(count);
//     count--;
// }


// do{
//     //code
// }while(condition)


// var i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i <= 3)


// this is a single line comment

// var i = 0;

// this is a multi line comment
/* var i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);

 */



// function checkAddress(address) {
//     if (document.getElementById(address).value === "") {
//         alert("Please type Email Address!")
//         return;
//     }

//     console.log(document.getElementById(address).value);

// }


function fillCity() {
    var zip = document.getElementById("zip").value;
    var city = document.getElementById("city");

    if (zip === "") {
        alert("Please type an valid Zip Code");
        return;
    } else if (zip === "70725") {
        city.value = "Karachi"
    }

    console.log(zip);


}