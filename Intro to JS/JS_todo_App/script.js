const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", function ()( {
  const newTodoText = newTodoInput.value;

  if (newTodoText !== "") {
    const newTodoItem = document.createElement("ul");
    newTodoItem.innerText = newTodoText;
    const strikebox = document.createElement("input");
    strikebox.type = "checkbox";

    strikebox.classList.add("strikebox");
    strikebox.addEventListener("change", function () {
      if (this.checked) {
        newTodoItem.style.textDecoration = "line-through";
      } else {
        newTodoItem.style.textDecoration = "none";
      }
    });

    newTodoItem.appendChild(strikebox);
    todoList.appendChild(newTodoItem);
    newTodoInput.value = "";
  }
});
