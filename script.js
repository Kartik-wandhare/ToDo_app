const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Load tasks from localStorage when page opens
document.addEventListener("DOMContentLoaded", loadTasks);

// Add button click
addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    addTask(input.value.trim());
    input.value = "";
  }
});

// Function to add a task
function addTask(taskText) {
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#todo-list li span").forEach(span => {
    tasks.push(span.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}
