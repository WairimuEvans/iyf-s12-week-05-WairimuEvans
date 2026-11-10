// DOM ELEMENTS
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filterButtons = document.querySelectorAll(".filter");
const clearCompletedButton = document.getElementById("clear-completed");

// APPLICATION STATE
let todos = [];
let activeFilter = "all";
let nextId = 1;

// CREATE ONE TASK ELEMENT
function createTodoElement(todo) {
    const item = document.createElement("li");
    item.className = "todo-item";
    item.dataset.id = todo.id;

    if (todo.completed) {
        item.classList.add("completed");
    }

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;
    text.title = "Click to complete; double-click to edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);

    item.append(text, deleteButton);
    return item;
}

// UPDATE REMAINING TASK COUNT
function updateItemsLeft() {
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${remaining} ${remaining === 1 ? "item" : "items"} left`;
}

// RENDER TASKS ACCORDING TO THE ACTIVE FILTER
function renderTodos() {
    todoList.replaceChildren();

    const visibleTodos = todos.filter(todo => {
        if (activeFilter === "active") return !todo.completed;
        if (activeFilter === "completed") return todo.completed;
        return true;
    });

    visibleTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateItemsLeft();
}

// ADD TASK
function addTodo(text) {
    const cleanText = text.trim();
    if (!cleanText) return;

    todos.push({
        id: nextId++,
        text: cleanText,
        completed: false
    });

    renderTodos();
}

// TOGGLE COMPLETE STATUS
function toggleTodo(id) {
    const todo = todos.find(item => item.id === id);
    if (!todo) return;

    todo.completed = !todo.completed;
    renderTodos();
}

// DELETE TASK
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// FORM: BUTTON OR ENTER ADDS A TASK
todoForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!todoInput.value.trim()) return;

    addTodo(todoInput.value);
    todoInput.value = "";
    todoInput.focus();
});

// EVENT DELEGATION FOR COMPLETE AND DELETE
todoList.addEventListener("click", event => {
    const item = event.target.closest("li[data-id]");
    if (!item || !todoList.contains(item)) return;

    const id = Number(item.dataset.id);

    if (event.target.closest(".delete-btn")) {
        deleteTodo(id);
        return;
    }

    if (event.target.closest(".todo-text")) {
        toggleTodo(id);
    }
});

// FILTER BUTTONS
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;

        filterButtons.forEach(filterButton => {
            const selected = filterButton.dataset.filter === activeFilter;
            filterButton.classList.toggle("active", selected);
            filterButton.setAttribute("aria-pressed", String(selected));
        });

        renderTodos();
    });
});

// CLEAR ALL COMPLETED TASKS
clearCompletedButton.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// BONUS: DOUBLE-CLICK TO EDIT; ENTER SAVES; ESCAPE CANCELS
todoList.addEventListener("dblclick", event => {
    const textElement = event.target.closest(".todo-text");
    if (!textElement) return;

    const item = textElement.closest("li[data-id]");
    if (!item) return;

    const todo = todos.find(entry => entry.id === Number(item.dataset.id));
    if (!todo) return;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "todo-edit";
    editInput.value = todo.text;
    editInput.setAttribute("aria-label", "Edit task");

    textElement.replaceWith(editInput);
    editInput.focus();
    editInput.select();

    let finished = false;

    function finishEdit(save) {
        if (finished) return;
        finished = true;

        const newText = editInput.value.trim();
        if (save && newText) {
            todo.text = newText;
        }

        renderTodos();
    }

    editInput.addEventListener("keydown", event => {
        if (event.key === "Enter") finishEdit(true);
        if (event.key === "Escape") finishEdit(false);
    });

    editInput.addEventListener("blur", () => finishEdit(true));
});

// INITIAL DISPLAY
renderTodos();
