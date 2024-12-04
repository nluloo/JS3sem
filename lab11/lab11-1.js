class Task{
    constructor(id, name, state){
        this.id = id;
        this.name = name;
        this.state = state;
    }

    ChangeNameTask(name){
        var buff = this.name;
        if(this.name = name){
           console.log(`Задача с названием '${buff}' была изменена на задачу '${name}'`); 
        };
    }

    ChangeStateTask(state){
        this.state = state;
        console.log("Состояние было успешно изменено");
    }
}


class ToDolist{

    constructor(id, name){
        this.name = name
        this.id = id;
    }
    tasks = new Array();

    AddTask(obj){
        this.tasks.push(obj);
        console.log("Task был добавлен в Todolist");
    }

    FiltersState(state){
        let TaskStates = new Array();
        this.tasks.forEach(element => {
            if(element.state == state){
                TaskStates.push(element);
            }
        });
        return TaskStates;
    }

    PrintAllTasks(){
        console.log(`Вывод всех дел списка под id = ${this.id} и названием '${this.name}'`);
        this.tasks.forEach(element =>{
            console.log(element);
        })
    }
}


const toDoList = new ToDolist(1, "Основной список");
const input = document.querySelector("input");
const addButton = document.querySelector("button");
const showAllButton = document.querySelector("#allButton");
const showCompletedButton = document.querySelector("#trueButton");
const showIncompleteButton = document.querySelector("#falseButton");
const taskContainer = document.querySelector("#task-container");
const Go = document.querySelector("#Set");

let taskId = 1;

function renderTasks(tasks) {
    taskContainer.innerHTML = "";
    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const SettingButton = document.createElement("button");
        SettingButton.id = "Set";
        SettingButton.textContent = "Редактировать";

        SettingButton.addEventListener("click", ()=>{
            const a = prompt("Введите новое название для задачи");
            task.ChangeNameTask(a);
            renderTasks(toDoList.tasks);
        })

        const RemoveButton = document.createElement("button");
        RemoveButton.id = "Rem";
        RemoveButton.textContent = "Удалить";

        RemoveButton.addEventListener("click", ()=>{
            let index = toDoList.tasks.indexOf(task);
            if(index !== -1){
                toDoList.tasks.splice(index, 1);
            }
            taskId--;
            renderTasks(toDoList.tasks);
        })

        const taskName = document.createElement("p");
        taskName.textContent = `${task.name}`;

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.state === true;
        taskCheckbox.onchange = () => {
            task.ChangeStateTask(taskCheckbox.checked ? true : false);
            renderTasks(toDoList.tasks);
        };

        
        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(taskName);

        taskDiv.appendChild(SettingButton);
        taskDiv.appendChild(RemoveButton);
        taskContainer.appendChild(taskDiv);
    });
}

addButton.addEventListener("click", () => {
    const taskName = input.value.trim();
    if (taskName) {
        const newTask = new Task(taskId++, taskName, false);
        toDoList.AddTask(newTask);
        input.value = "";
        renderTasks(toDoList.tasks);
    }
});

showAllButton.addEventListener("click", () => {
    renderTasks(toDoList.tasks);
});

showCompletedButton.addEventListener("click", () => {
    renderTasks(toDoList.FiltersState(true));
});

showIncompleteButton.addEventListener("click", () => {
    renderTasks(toDoList.FiltersState(false));
});



var task1 = new Task(1, "Сделать лабу", true);
var task2 = new Task(2, "Подготовиться к стажировке", true);
var task3 = new Task(3, "Прочитать книигу", false);
var task4 = new Task(4, "Приготовить ужин", true);
var task5 = new Task(5, "Помыться", true);
var task6 = new Task(6, "Растелить постель", false);
var task7 = new Task(7, "Поговорить", true);
var task8 = new Task(8, "Уснуть", false);


task2.ChangeNameTask("Убраться в комнате");

task2.ChangeStateTask(false);


var ToDolist2 = new ToDolist(2, "Воскресенье");

ToDolist2.AddTask(task8);

ToDolist2.PrintAllTasks();

