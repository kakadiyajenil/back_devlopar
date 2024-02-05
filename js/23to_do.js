function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    var editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.onclick = function () {
        editTask(li);
    };

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(taskElement) {
    var updatedTask = prompt("Edit task:", taskElement.firstChild.nodeValue);

    if (updatedTask !== null) {
        taskElement.firstChild.nodeValue = updatedTask;
}
}
