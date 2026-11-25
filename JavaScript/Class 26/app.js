console.log("JavaScript Connected!");

// userInput  =========== > valid / invalid

// meer@gmail.com ===========> valid
// meer123@gmail.com ========> valid
// meer gmail.com ===========> invalid
// meer@gmail ===============> invalid
// meer@    =================> invalid
// meer1@gmail.com ==========> valid


// username       domain     extension

// meer@gmail.com

// var myName = "Meer Quais";

// console.log(myName.indexOf("M"));
// console.log(myName.indexOf("Q"));
// console.log(myName.indexOf("r"));
// console.log(myName.indexOf("z"));


// // var email = "meer gmail.com";
// var email = "meer@gmail.com";

// // console.log(email.indexOf(" "));
// console.log(email.indexOf(" "));



// function validateEmail() {

//     var emailEntered = document.getElementById("email").value;


//     if (emailEntered.indexOf(" ") !== -1) {
//         alert("No spaces allowed in email address");
//         addressIsLegal = false;
//         console.log("illegal");

//     }

//     if (emailEntered.indexOf("@") < 1 || emailEntered.indexOf("@") > emailEntered.length - 5) {
//         addressIsLegal = false;
//         console.log("illegal");

//     }




// }


// meer@gmail.com


// var regex = /hello/;

// console.log(regex.test("hello world"));
// console.log(regex.test("good morning!"));


// ^   string ki beginning  ====> ^hello
// $   string ka end        ====> hello$
// []  allowed chars        ====> [abc]
// a-z small letter         ====> [a-z]
// A-Z Capital letters      ====> [A-Z]
// 0-9 Numbers              ====>[0-9]
// +  one or more           ====> a+
// *  zero or more          ====> a*
// ?  zero or one           ====> a?
// {2,4}   min 2 , max 4    ====>[0-9]{2,4}
// \. actual dot            ====> \.
// \w letters,numbers,underscore  ==> \w.


// var regex = /^[a-z]+$/

// console.log(regex.test("meer"));
// console.log(regex.test("MEER"));
// console.log(regex.test("meer123"));

// var regex = /^[0-9]+$/

// console.log(regex.test(12345));
// console.log(regex.test("meer"));
// console.log(regex.test("123abc"));

// console.log(regex.test("meer"));


// var regex = /^[a-z]{2,4}$/

// console.log(regex.test("pk"));
// console.log(regex.test("com"));
// console.log(regex.test("info"));
// console.log(regex.test("pakistan"));


// var regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,4}$/;

// console.log(regex.test("meer@gmail.com"));
// console.log(regex.test("meer123@gmail.com"));
// console.log(regex.test("meer@gmail"));
// console.log(regex.test("@gmail.com"));


// function validateEmail() {

//     var regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,4}$/;
//     var emailEntered = document.getElementById("email").value;

//     if (!regex.test(emailEntered)) {
//         console.log("failed!");

//     }

// }


function greetWorld() {
    try {
        var greeting = "Hello world!";
        aler(greeting);
    } catch (error) {
        alert(error)
    }
}

greetWorld()