console.log("JavaScript Connected!");


// var rightNow = new Date();


// 1 ==> variable

// 2 ==> new keyward => javascript mein kisi bhi object ka naya instance banana

// 3 ==> Date()  => JavaScript built-in Object jo date aur time sy related information deta hai.


// var rightNow = new Date();

// console.log(typeof rightNow, rightNow);

// var str = rightNow.toString();

// console.log(typeof str, str);
// console.log(str.indexOf("Wed"));
// console.log(str.charAt(4));
// console.log(str.slice(4, 15));
// console.log(rightNow.slice(4, 15));


// var d = new Date();


// console.log(d.getDay());

// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
// var dayofWeek = d.getDay();

// console.log(daysOfWeek[dayofWeek]);






// var d = new Date();

// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getFullYear());
// console.log(d.getTime());


var now = new Date();

var future = new Date("Oct 7, 2036")

console.log(now);
console.log(future);

var msDifference = future - now


console.log(msDifference);

var diff = Math.floor(msDifference / (1000 * 60));

console.log(diff);






