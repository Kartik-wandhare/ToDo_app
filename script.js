const input = document.getElementById("todo-Input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

//Load tasks form local storage
document.addEventListener("DOMContentLoaded", loadTasks);
addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        addTask(input.value.trim());
        input.value = "";
    }
});

function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onckik = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    saveTasks();
}
function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#todo-list li").forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTask(task));
}