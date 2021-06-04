const createButton = document.querySelector("#create-button");
const taskInput = document.querySelector(".create__title");
const todoList = document.querySelector(".todo__list");
const tasks = document.querySelectorAll(".item__title");

createButton.addEventListener("click", addTask);
todoList.addEventListener("click", taskDone);

function taskDone(ev) {
  const target = ev.target;

  if (target.classList.contains("item__title")) {
    target.classList.toggle("done");
  }
}

function addTask(ev) {
  let introducedTask = taskInput.value;

  ev.preventDefault();

  if (introducedTask.trim().length !== 0) {
    const taskEl = document.createElement("li");
    const taskTitle = document.createElement("h2");

    taskTitle.textContent = introducedTask;
    taskEl.classList.add("todo__item", "item");
    taskTitle.classList.add("item__title");
    todoList.append(taskEl);
    taskEl.append(taskTitle);
    introducedTask = "";
  } else {
    alert("Нельзя добавить пустую задачу!");
  }
}
