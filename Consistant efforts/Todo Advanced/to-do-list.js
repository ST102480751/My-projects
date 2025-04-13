let editIndex = null; // Tracks the index of the task being edited
let todo = JSON.parse(localStorage.getItem('todo')) || []; // Load tasks from localStorage or initialize as empty array

// Function to show temporary messages to the user
function showMessage(messagediv) {
    let message = document.createElement('div'); // Create message container
    message.textContent = messagediv; // Set message text
    message.style.backgroundColor = "lightBlue"; // Style the message
    message.style.padding = '10px';
    message.style.margin = '10px 0';
    message.style.borderRadius = '5px';
    document.getElementById('messageContainer').appendChild(message); // Display message

    setTimeout(() => {
        message.remove(); // Remove message after 3 seconds
    }, 3000);
}

// Function to add or update a task
function addTask() {
    let task = document.getElementById('Task').value.trim(); // Get task input
    let priority = document.getElementById('priority').value; // Get priority input
    let dueDate = document.getElementById('dueDate').value; // Get due date input
    let responsible = document.getElementById('responsible').value.trim(); // Get responsible person input

    if (task === "") {
        showMessage("Please enter a task"); // Show message if task is empty
        return;
    }

    if (editIndex !== null) {
        // Update existing task
        todo[editIndex] = { task, priority, dueDate, responsible };
        editIndex = null;
        showMessage("Task updated");
    } else {
        // Add new task to the beginning of the list
        todo.unshift({ task, priority, dueDate, responsible });
        showMessage("Task saved");
    }

    localStorage.setItem('todo', JSON.stringify(todo)); // Save updated list to localStorage

    // Clear input fields after saving
    document.getElementById('Task').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('responsible').value = '';

    displayTasks(); // Refresh task list
}

// Function to display all tasks on the page
function displayTasks() {
    const display = document.getElementById('DisplayTask');
    display.innerHTML = ''; // Clear the display area

    if (todo.length === 0) {
        showMessage("There's no task saved"); // Show message if no tasks
        return;
    }

    todo.forEach((entry, index) => {
        let taskDiv = document.createElement('div'); // Create container for each task
        taskDiv.innerHTML = `
            <strong>${entry.task}</strong><br>
            Priority: ${entry.priority || 'N/A'}<br>
            Due: ${entry.dueDate || 'N/A'}<br>
            Responsible: ${entry.responsible || 'N/A'}<br>
            <hr>
        `;
        display.appendChild(taskDiv); // Append to display
    });
}

// Load task details into input fields for editing
function editTask(index) {
    let entry = todo[index];
    document.getElementById('Task').value = entry.task;
    document.getElementById('priority').value = entry.priority;
    document.getElementById('dueDate').value = entry.dueDate;
    document.getElementById('responsible').value = entry.responsible;
    editIndex = index; // Set current edit index
}

// Function to remove the last task in the list
function removeTask() {
    if (todo.length === 0) {
        showMessage("No tasks to remove"); // Show message if list is empty
        return;
    }
    todo.pop(); // Remove last task
    localStorage.setItem('todo', JSON.stringify(todo)); // Update localStorage
    displayTasks(); // Refresh task list
    showMessage("Last task removed");
}

// Show extra fields (priority, due date, responsible) when edit button is clicked
document.getElementById('editbutton').addEventListener("click", function () {
    toggleFields(true);
});

// Hide extra fields when hide button is clicked
document.getElementById('hidebutton').addEventListener("click", function () {
    toggleFields(false);
});

// Toggle visibility of optional input fields
function toggleFields(show) {
    let displayValue = show ? 'block' : 'none';
    ['priority', 'dueDate', 'responsible'].forEach(id => {
        document.getElementById(id).style.display = displayValue;
    });
}
