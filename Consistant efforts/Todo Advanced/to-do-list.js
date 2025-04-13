let editIndex = null;
let todo = JSON.parse(localStorage.getItem('todo')) || [];

function showMessage(messagediv) {
    let message = document.createElement('div');
    message.textContent = messagediv;
    message.style.backgroundColor = "lightBlue";
    message.style.padding = '10px';
    message.style.margin = '10px 0';
    message.style.borderRadius = '5px';
    document.getElementById('messageContainer').appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

function addTask() {
    let task = document.getElementById('Task').value.trim();
    let priority = document.getElementById('priority').value;
    let dueDate = document.getElementById('dueDate').value;
    let responsible = document.getElementById('responsible').value.trim();

    if (task === "") {
        showMessage("Please enter a task");
        return;
    }

    if (editIndex !== null) {
        todo[editIndex] = { task, priority, dueDate, responsible };
        editIndex = null;
        showMessage("Task updated");
    } else {
        todo.unshift({ task, priority, dueDate, responsible });
        showMessage("Task saved");
    }

    localStorage.setItem('todo', JSON.stringify(todo));

    // Clear input fields
    document.getElementById('Task').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('responsible').value = '';

    displayTasks();
}

function displayTasks() {
    const display = document.getElementById('DisplayTask');
    display.innerHTML = '';

    if (todo.length === 0) {
        showMessage("There's no task saved");
        return;
    }

    todo.forEach((entry, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.innerHTML = `
            <strong>${entry.task}</strong><br>
            Priority: ${entry.priority || 'N/A'}<br>
            Due: ${entry.dueDate || 'N/A'}<br>
            Responsible: ${entry.responsible || 'N/A'}<br>
            <hr>
        `;
        display.appendChild(taskDiv);
    });
}

function editTask(index) {
    let entry = todo[index];
    document.getElementById('Task').value = entry.task;
    document.getElementById('priority').value = entry.priority;
    document.getElementById('dueDate').value = entry.dueDate;
    document.getElementById('responsible').value = entry.responsible;
    editIndex = index;
}

function removeTask() {
    if (todo.length === 0) {
        showMessage("No tasks to remove");
        return;
    }
    todo.pop();
    localStorage.setItem('todo', JSON.stringify(todo));
    displayTasks();
    showMessage("Last task removed");
}

document.getElementById('editbutton').addEventListener("click", function () {
    toggleFields(true);
});

document.getElementById('hidebutton').addEventListener("click", function () {
    toggleFields(false);
});

function toggleFields(show) {
    let displayValue = show ? 'block' : 'none';
    ['priority', 'dueDate', 'responsible'].forEach(id => {
        document.getElementById(id).style.display = displayValue;
    });
}
