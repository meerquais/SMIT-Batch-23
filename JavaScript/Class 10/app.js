console.log("JavaScript Connected!");




// var rightNow = new Date();

// new keyword => kisi object ka naya instance banata hai.

// Date() javascript ka built-in object hai jo date aur time se related information rakta hai.


// var rightNow = new Date();

// console.log(rightNow);

// var name = "Meer";


// var text = "Hello World!";


// console.log(text.charAt(0));
// console.log(text.indexOf("World"));
// console.log(text.slice(0, 5));


// var rightNow = new Date();


// var dateString = rightNow.toString();

// console.log(rightNow);
// console.log(dateString);


// console.log(dateString.charAt(0));
// console.log(dateString.indexOf("Mon"));
// console.log(dateString.slice(0, 5));

// var rightNow = new Date();


// console.log(rightNow.getDay());


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var now = new Date();

// var theDay = now.getDay();

// var nameOfTheDay = dayNames[theDay];

// console.log(nameOfTheDay);


// var d = new Date();


// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());

// var monthNames = ["Jan", "feb", "mar", "Apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
// var d = new Date();

// var currentMonth = d.getMonth();

// var monthName = monthNames[currentMonth];

// console.log(monthName);


// var today = new Date();


// var doomsday = new Date("June 30, 2035");

// console.log(doomsday);


var today = new Date();

var doomsday = new Date("June 30, 2035");

var msToday = today.getTime();

var msDoomsday = doomsday.getTime();


console.log(today);
console.log(doomsday);

console.log(msToday - msDoomsday);


// console.log(today - doomsday);




