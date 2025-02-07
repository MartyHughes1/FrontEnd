var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task); //Adding string to array
        console.log("String added to array!"); //Logging to console that it was successfull
        return this.myTasks.length; //Logging array length
    };
    Todo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (element) {
            console.log("Item: " + element + " is on the list"); //Logging all tasks
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task); //Getting index of task in array
        if (index > -1) { //To check if item was found
            this.myTasks.splice(index, 1); //removing the item at the index and only 1 item removed
            console.log("Item: " + task + " has been removed!");
        }
        else { //If task is not found
            console.log("Item: " + task + " has not been removed!");
        }
        return this.myTasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Work!"); //adding to array
myTodo.listAllTasks(); //listing elements in array
myTodo.deleteTask("Work!"); //deleting tasks
myTodo.deleteTask("Work2");
