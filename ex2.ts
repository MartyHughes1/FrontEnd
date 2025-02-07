interface myInterface{
    myTasks:Array<string>;//creating array
    addTask(task:string):number;//creating the add string method
    listAllTasks();//creating the listAlltasks method
    deleteTask(task:string):number;//creating deleteTask method
}

class Todo implements myInterface{

    myTasks: string[] = [];

    addTask(task:string):number{
        this.myTasks.push(task);//Adding string to array
        console.log("String added to array!");//Logging to console that it was successfull
        return this.myTasks.length;//Logging array length
    }

    listAllTasks() {
        this.myTasks.forEach(function(element)//Looping through all tasks
        {
           console.log("Item: " + element +" is on the list");//Logging all tasks
           });
    }


    deleteTask(task: string): number {
        let index:number = this.myTasks.indexOf(task);//Getting index of task in array

        if(index > -1){//To check if item was found
            this.myTasks.splice(index, 1);//removing the item at the index and only 1 item removed
            console.log("Item: " + task +" has been removed!");
        }
        
        else{//If task is not found
            console.log("Item: " + task +" has not been removed!")
        }
    
        return this.myTasks.length;
    }

}

let myTodo = new Todo();

myTodo.addTask("Work!");//adding to array
myTodo.listAllTasks();//listing elements in array
myTodo.deleteTask("Work!");//deleting tasks
myTodo.deleteTask("Work2");