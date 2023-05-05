let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  let taskText = document.createTextNode(taskInput.value);
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  let editButton = document.createElement("button");

  li.appendChild(taskText);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  editButton.innerHTML = "Edit";
  editButton.classList.add("editButton");
  editButton.onclick = function() {
    editTask(this);
  };

  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    deleteTask(this);
  };

  taskInput.value = "";
}

function deleteTask(button) {
  let li = button.parentElement;
  taskList.removeChild(li);
}

function editTask(button) {
  let li = button.parentElement;
  let taskText = li.getElementsByClassName("taskText")[0].textContent;

  let newTaskText = prompt("Edit task:", taskText);
  if (newTaskText === null || newTaskText === "") {
    return;
  }

  li.getElementsByClassName("taskText")[0].textContent = newTaskText;
}