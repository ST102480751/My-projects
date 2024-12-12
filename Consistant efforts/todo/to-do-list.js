
function showMessage(messagediv){
    let message = document.createElement('div');
    
    message.textContent= messagediv;
    message.style.backgroundColor= "lightBlue";
    
    message.style.paddding = '10px';
    message.style.margin = '10px 0;';
    document.getElementById('messageContainer').appendChild(message);
   
    setTimeout(() => {
        message.remove();
    }, 3000);
}


function addTask(){
    let task= document.getElementById('Task').value;

    if(task===""){
        showMessage("Please enter a task");
        return;
    }

    let todo= JSON.parse(localStorage.getItem('todo')) || []

    todo.unshift({task:task });

    localStorage.setItem('todo', JSON.stringify(todo));

    document.getElementById('Task').value= '';

    showMessage("Task saved");

}

function displayTasks(){
let todo = JSON.parse(localStorage.getItem('todo'))||[];
let display= document.getElementById('Display task');




let displayText='';

if(todo.length===0){
    showMessage("Theres no task saved");
    return;
}

todo.forEach(entry=>{
    displayText += `Task:  ${entry.task}`;
});
display.innerHTML=displayText;



}

function removeTask(){


let task= document.getElementById('Task').value;
 let todo = JSON.parse(localStorage.getItem('todo'))||[];

 todo.shift({task:task});
 localStorage.setItem('todo', JSON.stringify(todo));

 let updatedTasksHTML = localStorage.getItem(todo);
document.getElementById('Display task').innerHTML= updatedTasksHTML;

}


