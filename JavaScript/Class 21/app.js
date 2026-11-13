console.log("JavaScript Connected!");

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     data: 1000,
//     pages: 10
// }
// var plan2 = {
//     name: "Premium",
//     price: 5.99,
//     space: 500,
//     data: 5000,
//     pages: 50
// }
// var plan3 = {
//     name: "Ultimate",
//     price: 9.99,
//     space: 2000,
//     data: 20000,
//     pages: 500
// }

// function Plan(name, price, space, data, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.data = data;
//     this.pages = pages
// };

// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
// var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
// var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

// console.log(plan1.name);
// console.log(plan2.price);
// console.log(plan3.data);

// function Student(name, age, studentClass, marks) {
//     this.name = name;
//     this.age = age;
//     this.studentClass = studentClass;
//     this.marks = marks;
// };


// var student1 = new Student("Ali", 18, "12th", 86);
// var student2 = new Student("Ahmed", 19, "12th", 92);
// var student3 = new Student("Minhaj", 17, "11th", 76);

// console.log(student1.name);
// console.log(student2.name);
// console.log(student3.name);


// function BankAccount(holder, accountNumber, balance) {
//     this.holder = holder;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
// };

// var account1 = new BankAccount("Mahad", 223499, 500000);
// var account2 = new BankAccount("Nofal", 2234564, 99999);
// var account3 = new BankAccount("Urwah", 22343545, 0);

// console.log(account1.holder);
// console.log(account2.accountNumber);
// console.log(account3.balance);

// function Plan(name, price, space, data, pages) {
//     this.doc = name;
//     this.sleepy = price;
//     this.lazy = space;
//     this.idea = data;
//     this.cat = pages;
// }

// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);

// console.log(plan1);



// function Plan(name , price , space , data , pages , discountMonth){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.data = data;
//     this.pages = pages;
//     this.discountMonth = discountMonth;


//     this.calcAnnual = function(percentIfDiscount){

//     }


// }


// function greet() {
//     console.log("Hello user!");
// };

// greet()

// var greet = function () {
//     console.log(
//         "hello User!"
//     );

// };


// greet()

function Plan(name, price, space, data, pages, discountMonth) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.data = data;
    this.pages = pages;
    this.discountMonth = discountMonth;


    this.calcAnnual = function (percentIfDiscount) {

        var bestPrice = this.price;
        var currDate = new Date();
        var thisMonth = currDate.getMonth();


        for (var i = 0; i < this.discountMonth.length; i++) {
            if (this.discountMonth[i] === thisMonth) {
                bestPrice = this.price * percentIfDiscount;
                break;
            }
        }

        return bestPrice * 12


    }


}

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 200, [6, 7, 10]);

var annualPrice = plan1.calcAnnual(.75);
var annualPrice1 = plan2.calcAnnual(.75);
var annualPric2 = plan3.calcAnnual(.75);

console.log(annualPrice);
console.log(annualPrice1);
console.log(annualPric2);
