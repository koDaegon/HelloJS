const toDoForm  = document.querySelector(".js_toDoForm"),
        toDoInput = toDoForm.querySelector("input"),
        toDoList = document.querySelector(".js_toDoList");



const TODO_LS = "toDos";
let todos = []

function paintToDo(text) {
        const li  = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = todos.length+1;
        delBtn.innerText = "Ⓥ";
        delBtn.addEventListener("click" , deleteTodo);
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        
        li.id = newId
        toDoList.appendChild(li);

        const todoObj = {
                text: text,
                id: newId
        };
        todos.push(todoObj);
        saveTodo();
}



function deleteTodo(event) {
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);

        const cleanToDos = todos.filter(function(toDo){  
             return toDo.id !== parseInt(li.id); 
        });
        todos = cleanToDos;
        saveTodo();
}

function handleSubmit() {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";  
}

function saveTodo() {
        localStorage.setItem(TODO_LS , JSON.stringify(todos));
}

function loadToDoList() {
        const loadtoDos = localStorage.getItem(TODO_LS);
        
        if(loadtoDos !== null) {
                const parsedToDos = JSON.parse(loadtoDos);
                parsedToDos.forEach(function(toDo){                     
                        paintToDo(toDo.text);
                });
        } 
}

function init() {
        loadToDoList();
        toDoForm.addEventListener("submit" , handleSubmit);
}

init();