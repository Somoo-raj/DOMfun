// Dynamic DOM Mini Project : SDE-1 Interviewes

// *** Dynamic Todo App with Event Delegation ***
// 1. Intractive Modal/Popup component (show, hide, and outside click handling).
// 2. Dynamic todo app (adding, marking completed, and deleting items ysing event delegation).

const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#adds-btn");
const todoList = document.querySelector("#todo-list");

// 1. Handler of task add
addBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  // create new <li>
  const li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span>
  <button class="delete-btn">Delete</button`;

  todoList.appendChild(li);
  todoInput.value = ""; // clear input
});

// 2. Handler of task delete (Event delegation on Parent)
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
  if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("completed");
  }
});
