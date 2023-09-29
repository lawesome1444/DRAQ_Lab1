//Exercise 3
//3(a) Tasks array
const taskList = ["Hoover", "Clean", "Garden", "Homework"];

//Adds new tasks the the tasks array
let addTask = (task)=>{
    //Add the passed on Task into the Tasks Array
    taskList.push(task);
    //Names the passed task added to the array to indicate it was added to the user
    console.log(task + " Added to the Names Array");
    //List the new number of elements in the tasks array
    console.log("The Names array now has "+taskList.length+" elements!");
}

console.log("\nExercise 3(b)");
//3(b)Call the addTask function to add a new element into the array "taskList"
addTask("Sleeping");

console.log("\nExercise 3(c)");
//3(c) Iterate over every element in the taskList array and print them one by one into the console
let listAllTasks = ()=>{
    taskList.forEach((item)=>{
        console.log(item);
    });
}
listAllTasks();

console.log("\nExercise 3(d)");
//3(d) Receives a task and deletes it from the taskList array
deleteTask =(task)=>{
    //Stores the index value
    let index;
    //Assign the variable "index" the index value (spot in the array) of the passed task
    index = taskList.indexOf(task);
    //Delete 1 array element at the position found earlier
    //Aka, delete the passed task element
    taskList.splice(index, 1);
    //Call the listAllTasks function to print the array
    listAllTasks();
}

//Delete "Sleeping" from the array
deleteTask("Sleeping");