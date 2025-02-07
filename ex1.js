var myArray = []; //Array
function addTask(task) {
    myArray.push(task); //Adding string to array
    console.log("String added to array!"); //Logging to console that it was successfull
    return myArray.length; //Logging array length
}
function listAllTasks() {
    myArray.forEach(function (element) {
        console.log("Item: " + element + " is on the list"); //Logging all tasks
    });
}
function deleteTask(task) {
    var num;
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Item: " + task + " has been removed!");
    }
    else {
        console.log("Item: " + task + " has not been removed!");
    }
    return myArray.length;
}
addTask("Work"); //Adding to array
addTask("Eat");
listAllTasks(); //listing tasks
deleteTask("Work");
deleteTask("Stuff");
