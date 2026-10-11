const input = document.getElementById("input");

const tasklist = document.getElementById("taskList");

const button = document.getElementById("btn");

let editingTask = null;

button.addEventListener("click", () => {

  const task = input.value.trim();

  if (task === "") {
    alert("Enter task");
    return;
  }

  // Edit existing task
  if (editingTask !== null) {
    editingTask.textContent = task;

    editingTask = null;
    input.value = "";

    console.log("Task updated:", task);
    button.textContent = "Add Task";
    return;
  }

  // Create task
  const list = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task;
  taskText.className = "task-text";

  console.log("Task added:", task);

  // Delete button
  const delatebtn = document.createElement("button");

  delatebtn.textContent = "Delete";
  delatebtn.className = "delete-button";

  delatebtn.addEventListener("click", () => {

    if (editingTask === taskText) {
      editingTask = null;
      input.value = "";
      button.textContent = "Add Task";
    }

    list.remove();

    console.log("Task deleted:", taskText.textContent);
  });

  // Edit button
  const editbtn = document.createElement("button");

  editbtn.textContent = "Edit";
  editbtn.className = "edit-button";

  editbtn.addEventListener("click", () => {

    input.value = taskText.textContent;

    editingTask = taskText;

    button.textContent = "Update Task";

    input.focus();
  });

  // Add elements to the list
  list.appendChild(taskText);
  list.appendChild(editbtn);
  list.appendChild(delatebtn);

  tasklist.appendChild(list);

  input.value = "";

});

