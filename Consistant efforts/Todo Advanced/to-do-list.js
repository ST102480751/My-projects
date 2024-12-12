let editIndex = null; // Track the task index being edited; initially set to null (no task is being edited)

let todo = JSON.parse(localStorage.getItem('todo')) || []; // Retrieve the tasks from localStorage and parse them to an array; if none, initialize as an empty array

function showMessage(messagediv) {
    let message = document.createElement('div'); // Create a new div element for the message
    message.textContent = messagediv; // Set the text content of the message to the provided message
    message.style.backgroundColor = "lightBlue"; // Set the background color of the message div to light blue
    
    message.style.padding = '10px'; // Add padding to the message div (note: there’s a typo; it should be 'padding')
    message.style.margin = '10px'; // Add vertical margin above and below the message (another typo; extra semicolon here)
    
    document.getElementById('messageContainer').appendChild(message); // Add the message div to the container with ID 'messageContainer'
    
    setTimeout(() => {
        message.remove(); // Remove the message after 3 seconds
    }, 3000);
}

function addTask() {
    let task = document.getElementById('Task').value; // Get the value of the 'Task' input field
    let priority = document.getElementById('priority').value; // Get the value of the 'priority' input field
    let dueDate = document.getElementById('dueDate').value; // Get the value of the 'dueDate' input field
    let responsible = document.getElementById('responsible').value; // Get the value of the 'responsible' input field

    if (task === "") { // Check if the task field is empty
        showMessage("Please enter a task"); // Show an error message if the task is empty
        return; // Exit the function to prevent adding an empty task
    }

    if (editIndex !== null) { // If editIndex is not null, update an existing task
        todo[editIndex] = { task, priority, dueDate, responsible }; // Update the task at editIndex with new values
        editIndex = null; // Reset editIndex to null after editing
        showMessage("Task updated"); // Show a message indicating that the task was updated
    } else { 
        todo.unshift({ task, priority, dueDate, responsible }); // Add a new task to the beginning of the todo array
        showMessage("Task saved"); // Show a message indicating that the task was saved
    }

    localStorage.setItem('todo', JSON.stringify(todo)); // Save the updated todo list to localStorage

    // Clear the input fields after saving or updating a task
    document.getElementById('Task').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('responsible').value = '';

    displayTasks(); // Refresh the task list on the page by calling displayTasks
}

document.getElementById('editbutton').addEventListener("click", function edit() {
    let fields = ['priority', 'dueDate', 'responsible']; // Array of IDs for fields to toggle
    fields.forEach(id => {
        let field = document.getElementById(id); // Select each field by ID
        field.style.display = (field.style.display === 'none') ? 'block' : 'none'; // Toggle display between 'none' and 'block'
    });
});

function displayTasks() {
    let display = document.getElementById('Display task'); // Get the element where tasks will be displayed
    let displayText = ''; // Initialize an empty string for displaying task information

    if (todo.length === 0) { // Check if there are no tasks in the todo list
        showMessage("There's no task saved"); // Show a message if there are no tasks
        return; // Exit the function if no tasks are present
    }

    todo.forEach((entry, index) => { // Loop through each task in the todo array
        displayText += `
            Task ${index + 1}: ${entry.task} - Priority: ${entry.priority} 
            - Due: ${entry.dueDate} - Responsible: ${entry.responsible}
            <button onclick="startEdit(${index})">Edit</button><br>`; // Create HTML with task details and an "Edit" button
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Set the inner HTML of the display element to show the tasks
   
     

    display.style.display = 'block'; // Ensure the display area is visible
}

function startEdit(index) {
    editIndex = index; // Set editIndex to the index of the task being edited
    let task = todo[index]; // Retrieve the task details at the given index

    // Populate input fields with the task's current values
    document.getElementById('Task').value = task.task;
    document.getElementById('priority').value = task.priority;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('responsible').value = task.responsible;

    showMessage("Editing task " + (index + 1)); // Show a message indicating the task being edited
}

function removeTask() {
    let task = document.getElementById('Task').value; // Get the value of the 'Task' input field
    let todo = JSON.parse(localStorage.getItem('todo')) || []; // Retrieve tasks from localStorage; initialize as empty if none

    todo.shift(); // Remove the first task in the todo list (does not check for a specific task)
    localStorage.setItem('todo', JSON.stringify(todo)); // Save the updated list to localStorage

    displayTasks(); // Refresh the task list after removal
}

document.getElementById("hidebutton").addEventListener("click", function hide() {
    let element = document.getElementById("Display task"); // Get the display element by ID
    element.style.display = "none"; // Hide the display element
});