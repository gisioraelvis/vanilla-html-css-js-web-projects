const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");
const deleteTodo = document.querySelectorAll("fa-trash");
const toasts = document.getElementById("toasts");

welcomeNotification();
let todosFromLs = JSON.parse(localStorage.getItem("todos"));

if (todosFromLs) {
  todosFromLs.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  input.value = "";
});

function addTodo(todo) {
  let todoItem = input.value;

  if (todo) {
    todoItem = todo.todoTxt;
  }
  if (todoItem) {
    let todosEl = document.createElement("li");

    if (todo && todo.isCompleted) {
      todosEl.classList.add("completed");
    }

    todosEl.innerHTML = `${todoItem}<i class="fa fa-trash" onclick="delTodo(event)" aria-hidden="true"></i>`;

    todosEl.addEventListener("dblclick", () => {
      todosEl.classList.toggle("completed");
      createNotification("Todo Completed", "Info");
      updateLocalStorage();
    });

    todosUl.appendChild(todosEl);
    createNotification("Todo Addeded", "success");
    updateLocalStorage();
  }
}

function updateLocalStorage() {
  todosEl = document.querySelectorAll("li");
  let todos = [];

  todosEl.forEach((todo) => {
    todos.push({
      todoTxt: todo.innerText,
      isCompleted: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function delTodo(event) {
  let todoEl = event.target.parentNode;
  todoEl.remove();
  createNotification("Todo Deleted", "success");
  updateLocalStorage();
}

function welcomeNotification() {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add("info");

  notify.innerText = "Welcome Back";

  toasts.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 2000);
}

function createNotification(message, type) {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add(type);

  notify.innerText = message;

  toasts.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 2000);
}
