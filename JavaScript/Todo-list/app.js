// console.log("JavaScript Connected!");


// // step 1 : get html elements


// var taskInput = document.getElementById("taskInput");
// var addBtn = document.getElementById("addBtn");
// var taskList = document.getElementById("taskList");
// var totalTasks = document.getElementById("totalTasks");
// var completedTasks = document.getElementById("completedTasks");

// // step 2 : add button par event chalana!


// addBtn.onclick = function () {

//     var taskValue = taskInput.value;
//     // console.log(taskValue);

//     if (taskValue === "") {
//         alert("Please Enter a task!");
//     } else {

//         var li = document.createElement("li");
//         var taskText = document.createElement("span");

//         taskText.innerText = taskValue;
//         taskText.className = "task-text"

//         // console.log(taskText);


//         taskText.onclick = function () {

//             if (taskText.style.textDecoration === "line-through") {
//                 taskText.style.textDecoration = "none"
//                 taskText.style.color = "black"
//             } else {
//                 taskText.style.textDecoration = "line-through"
//                 taskText.style.color = "gray"
//             }


//             updateCount();


//         };



//         var deleteBtn = document.createElement("button");
//         deleteBtn.innerText = "Delete";

//         deleteBtn.className = "delete-btn";


//         deleteBtn.onclick = function () {
//             taskList.removeChild(li);
//             updateCount()
//         }


//         li.appendChild(taskText);
//         li.appendChild(deleteBtn);

//         taskList.appendChild(li);

//         taskInput.value = "";

//         updateCount();
//     };

// }

// // step 3 : task counter ka function


// function updateCount() {


//     var allTasks = taskList.getElementsByTagName("li");

//     totalTasks.innerText = allTasks.length;

//     var completed = 0;


//     for (var i = 0; i < allTasks.length; i++) {
//         var task = allTasks[i].getElementsByTagName("span")[0];


//         if (task.style.textDecoration === "line-through") {
//             completed++
//         }
//     }





//     completedTasks.innerText = completed;




// }



var plan1Name = "Basic";
var plan1Price = "3.99$";
var plan1Space = "100GB";
var plan1Data = "1000GB";
var plan1Pages = 10;


var plan2Name = "Pro";
var plan2Price = "5.99$";
var plan2Space = "500GB";
var plan2Data = "5000GB";
var plan2Pages = 50;

var plan3Name = "Ultimate";
var plan3Price = "9.99$";
var plan3Space = "2000GB";
var plan3Data = "20000GB";
var plan3Pages = 500;



var car = {
    brand: "Honda",
    year: 2024,
    model: "civic",
    color: "black"
}