console.log("JavaScript Connected!");


// function Plan(name, price, space, data, pages, discountMonth) {

//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.data = data;
//     this.pages = pages;
//     this.discountMonth = discountMonth;

// }

// Plan.prototype.calcAnnual = function (percentIfDiscount) {

//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();

//     for (var i = 0; i < this.discountMonth.length; i++) {

//         if (this.discountMonth[i] === thisMonth) {
//             bestPrice = this.price * percentIfDiscount;
//             break;
//         }
//     }
//     return bestPrice * 12

// }

// Plan.prototype.cancellable = false;


// var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
// var p2 = new Plan("Professional", 5.99, 500, 5000, 50, [6, 7, 10]);
// var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7, 11]);

// p2.cancellable = true;

// console.log(p1.calcAnnual(.88));
// console.log(p2.calcAnnual(.75));
// console.log(p3.calcAnnual(.50));
// console.log(p1.cancellable);
// console.log(p2.cancellable);
// console.log(p3.cancellable);
// console.log(p1);
// console.log(p2);
// console.log(p3);



// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10
// };


// "propertyName" in plan1

// var gotTheProperty = "price" in plan1;
// var gotTheProperty = "location" in plan1;

// console.log(gotTheProperty);


// console.log("name" in plan1);
// console.log("price" in plan1);
// console.log("email" in plan1);
// console.log("age" in plan1);

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     calcAnnual: function () {
//         return this.price * 12;
//     }
// };



// var gotTheProperty = "calcAnnual" in plan1;
// console.log(gotTheProperty);



// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10
// };


// var listOfProperties = [];

// for (var prop in plan1) {
//     listOfProperties.push(prop)
// };

// console.log(listOfProperties);

function Plan(name, price) {
    this.name = name;
    this.price = price
};


Plan.prototype.calcAnnual = function () {
    return this.price * 12
};



var p1 = new Plan("Basic", 3.99);


// var listOfProperties = [];
// for (var prop in p1) {
//     listOfProperties.push(prop)
// };

// console.log(listOfProperties);


// // enumerable 



// console.log(p1.hasOwnProperty("name"));
// console.log(p1.hasOwnProperty("price"));
// console.log(p1.hasOwnProperty("calcAnnual"));

var listOfProperties = [];

for (var prop in p1) {
    if (p1.hasOwnProperty(prop)) {
        listOfProperties.push(prop)
    }
}


console.log(listOfProperties);
