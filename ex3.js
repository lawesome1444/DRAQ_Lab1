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
let listAllTasks = taskList.map((item)=>{
    console.log(item);
})