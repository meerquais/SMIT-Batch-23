console.log("JavaScript Connected!");

function Plan(name, price, space, data, pages, discountMonth) {

    this.name = name;
    this.price = price;
    this.space = space;
    this.data = data;
    this.pages = pages;
    this.discountMonth = discountMonth;

    // this.calcAnnual = function (percentIfDiscount) {
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


};


Plan.prototype.calcAnnual = function (percentIfDiscount) {
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


Plan.prototype.cancellable = true;


var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 10]);
var p3 = new Plan("Ulitmate", 9.99, 2000, 20000, 500, [6, 7, 11]);



p1.cancellable = false;


console.log(p1.cancellable);
console.log(p1);

console.log(p2.cancellable);
console.log(p2);
console.log(p3.cancellable);





// var result = p2.calcAnnual(.75)
// console.log(result);


// console.log(p1);
// console.log(p2);
// console.log(p3);



// function Student(name, marks) {
//     this.name = name;
//     this.marks = marks;
// }


// Student.prototype.showDetails = function () {
//     return this.name + " Scored " + this.marks + " marks.";
// }

// var student1 = new Student("Meer", 90);
// var student2 = new Student("Minhaj", 95);
// var student3 = new Student("Ayan", 85);

// console.log(student1.showDetails());
// console.log(student2.showDetails());
// console.log(student3.showDetails());
