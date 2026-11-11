console.log("JavaScript Connected!");


// var plan1Name = "Basic";
// var plan1Price = 3.99;
// var plan1Space = 100;
// var plan1Data = 1000;
// var plan1Pages = 10;


// var plan2Name = "Pro";
// var plan2Price = 5.99;
// var plan2Space = 500;
// var plan2Data = 5000;
// var plan2Pages = 50;


// var plan3Name = "Ultimate";
// var plan3Price = 9.99;
// var plan3Space = 2000;
// var plan3Data = 20000;
// var plan3Pages = 500;


// console.log("The cost of the " + plan2Name + " package is $" + plan2Price + " per month!");




// var student = {
//     name: "Minhaj",
//     age: 24,
//     course: "JavaScript",
//     city: "Karachi",
//     rollNumber: 22
// };


// var objectName = {
//     property1: value1,
//     property2: value2,
//     property3: value3
// };


// var student = {
//     name: "Meer",
//     age: 25,
//     isEnrolled: true,
//     grade: null
// }



// console.log(student);

// // Dot notation.
// console.log(student.name);

// // array notation.

// console.log(student["isEnrolled"]);




// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10,
//     discountMonths: [6, 7, 11]
// }

// var mo = plan1.discountMonths[2];
// console.log(mo);

// student.name

// var student = {
//     name: "Meer",
//     age: 25,
//     isEnrolled: true,
//     grade: null
// }


// var deal3 = {
//     name: "Summer Sale",
//     cost: 49.99,
//     market: "Global"
// };

// console.log(deal3);


// deal3.cost = 79.95;

// console.log(deal3);


// deal3.brand = "Levi's"

// console.log(deal3);

// delete deal3.market;

// console.log(deal3);

// console.log("market" in deal3);
// console.log("name" in deal3);


// var deal = {
//     name: "Flash Sale",
//     cost: 500,
//     market: "Pakistan"
// };


// // update existing properties
// deal.name = "Super Saver";
// deal.cost = 750;

// // adding new properties

// deal.features = ["Free Delivery", "Warranty"];
// deal.membersOnly = false;

// console.log(deal.name);
// console.log(deal.cost);
// console.log(deal.features[0]);
// console.log(deal.membersOnly);

// // var object = {};


// deal.market = undefined;

// console.log(deal);



// function addNumbers() {
//     var num1 = 10;
//     var num2 = 20;

//     var result = num1 + num2;

//     console.log(result);
// };

// addNumbers()


// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10,
//     discountMonths: [6, 7, 10]
// };


// function calcAnnual(percentIfDiscount) {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();

//     for (var i = 0; i < plan1.discountMonths.length; i++) {

//         if (plan1.discountMonths[i] === thisMonth) {
//             bestPrice = plan1.price * percentIfDiscount;
//             break;
//         }
//     }

//     return bestPrice * 12;
// };

// var annualPrice = calcAnnual(.75);


// console.log(annualPrice);


function calcAnnual() {
    return 1000;
};

var result = calcAnnual();

console.log(result);


var plan1 = {
    name: "Basic",
    price: 3.99,
    discountMonths: [6, 7, 10],
    calcAnnual: function (percentIfDiscount) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMonth = currDate.getMonth();

        for (var i = 0; i < this.discountMonths.length; i++) {

            if (plan1.discountMonths[i] === thisMonth) {
                bestPrice = this.price * percentIfDiscount;
                break;
            }
        }

        return bestPrice * 12;
    }
}

console.log(plan1.calcAnnual(.8));



