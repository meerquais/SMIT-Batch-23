console.log("JavaScript Connected!");


// function checkForLastName() {

//     var lastNameField = document.getElementById("lastNameField");

//     if (lastNameField.value.length === 0) {
//         console.log("Please Enter Last Name!");
//         lastNameField.focus();
//         lastNameField.style.backgroundColor = "yellow";
//         return false;
//     }
//     lastNameField.style.backgroundColor = "white"


// }


// function checkForSelection() {

//     var states = document.getElementById("states");

//     if (states.selectedIndex === 0) {
//         alert("Please Select a State!");
//         return false;
//     }


// }


// function validateRadios() {
//     var radios = document.getElementsByName("r1");

//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }

//     alert("Please Check an value!");
//     return false;


// }


function checkZipCode() {
    var zipCode = document.getElementById("zipCode");

    if (zipCode.value.length < 5) {
        alert("Please Enter a valid zipCode")
    } else {
        console.log("Submitted!");

    }


}