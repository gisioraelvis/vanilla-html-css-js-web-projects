const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");
const deleteTodo = document.querySelectorAll("fa-trash");

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

    todosEl.innerHTML = `${todoItem}<i class="fa fa-trash" aria-hidden="true"></i>`;

    todosEl.addEventListener("dblclick", () => {
      todosEl.classList.toggle("completed");
      updateLocalStorage();
    });

    todosUl.appendChild(todosEl);
    updateLocalStorage();
    todosEl.addEventListener("contextmenu", () => {
      todosEl.remove();
      updateLocalStorage();
    });
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
