console.log("JavaScript Connected!");


// step 1 : get html elements


var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var totalTasks = document.getElementById("totalTasks");
var completedTasks = document.getElementById("completedTasks");

// step 2 : add button par event chalana!


addBtn.onclick = function () {

    var taskValue = taskInput.value;
    // console.log(taskValue);

    if (taskValue === "") {
        alert("Please Enter a task!");
    } else {

        var li = document.createElement("li");
        var taskText = document.createElement("span");

        taskText.innerText = taskValue;
        taskText.className = "task-text"

        // console.log(taskText);


        taskText.onclick = function () {

            if (taskText.style.textDecoration === "line-through") {
                taskText.style.textDecoration = "none"
                taskText.style.color = "black"
            } else {
                taskText.style.textDecoration = "line-through"
                taskText.style.color = "gray"
            }


            updateCount();


        };



        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.className = "delete-btn";


        deleteBtn.onclick = function () {
            taskList.removeChild(li);
            updateCount()
        }


        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";

        updateCount();
    };

}

// step 3 : task counter ka function


function updateCount() {


    var allTasks = taskList.getElementsByTagName("li");

    totalTasks.innerText = allTasks.length;

    var completed = 0;


    for (var i = 0; i < allTasks.length; i++) {
        var task = allTasks[i].getElementsByTagName("span")[0];


        if (task.style.textDecoration === "line-through") {
            completed++
        }
    }





    completedTasks.innerText = completed;




}