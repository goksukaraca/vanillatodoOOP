//vanilla js todo app w/OOP


class main {
  constructor(){
    this.toDoListItems =  [];
  }
  addTodoItem = (e) => {
    e.preventDefault();
    console.log("submit button works.");
      
    const todoInput = document.querySelector(".todo-input"); 
    const todoButton = document.querySelector(".todo-button");
    const deleteButton = document.querySelector(".deleteButton");
    const todoList = document.querySelector(".todo-list");

    //let input = document.createElement()
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; //ekranda ne varsa onu aldık.
    this.toDoListItems = todoInput;
    todoDiv.appendChild(newTodo);

    //todoList.innerHTML = this.toDoListItems.map(item => {
      //todoList.appendChild(this.toDoListItems);
    //})
    todoList.appendChild(todoDiv);
    todoInput.value = ''; //ekran default
  }
  deleteAllList = (e) => {
    e.preventDefault();
    console.log("delete button works.");

    this.toDoListItems = [];

    todoList.innerHTML = '';
  }
}
const todo = new main ();

todoButton.addEventListener("click", todo.addTodoItem);

deleteButton.addEventListener("click", todo.deleteAllList);