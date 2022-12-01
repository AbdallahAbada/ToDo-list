// SELECTOR 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list")


// EVENT LISTNER
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)



// FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    // TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('new-todo');
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    checkBtn.classList.add('check-btn');
    todoDiv.appendChild(checkBtn);
    // DELET BTN
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);
    todoList.appendChild(todoDiv);
    // CLEAR INPUT VALUE
    todoInput.value = '';
}
function deleteCheck(e) {
    const item = e.target;
    // DELETE TODO
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
    // CHECK MARK
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
