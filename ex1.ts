let myArray: string[] = [];//Array


function addTask(task:string){
    myArray.push(task);//Adding string to array
    console.log("String added to array!");//Logging to console that it was successfull
    return myArray.length;//Logging array length
}



function listAllTasks():void{
    myArray.forEach(function(element)//Looping through all tasks
     {
        console.log("Item: " + element +" is on the list");//Logging all tasks
        });
}



function deleteTask(task:string)
{
    
    let index:number = myArray.indexOf(task);//Getting index of task in array

    if(index > -1){//To check if item was found
        myArray.splice(index, 1);//removing the item at the index and only 1 item removed
        console.log("Item: " + task +" has been removed!");
    }
    
    else{//If task is not found
        console.log("Item: " + task +" has not been removed!")
    }

    return myArray.length;

    
}


addTask("Work");//Adding to array
addTask("Eat");
listAllTasks();//listing tasks
deleteTask("Work");//deleting tasks
deleteTask("Stuff");

