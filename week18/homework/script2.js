//Получаем необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const emptyTasks = document.querySelector('.empty-tasks');
const removeButton = document.getElementById('removeButton');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Когда задач нет, должно быть серое уведомление о том, что задачи отсутствуют, 
emptyTasks.textContent = 'Задачи отстутствуют';

function showlocalStorageTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        `;
        taskList.appendChild(li);
    });

    updateUI();
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        showlocalStorageTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    showlocalStorageTasks();
}

function clearTasks() {
    tasks = [];
    saveTasks();
    showlocalStorageTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateUI() {
    removeButton.disabled = tasks.length === 0;
    if (removeButton.disabled) {
        removeButton.classList.add('disabledButton');
        removeButton.classList.remove('glow-on-hover');
    } else {
        removeButton.classList.remove('disabledButton');
        removeButton.classList.add('glow-on-hover');
    }
    
   emptyTasks.style.display = tasks.length === 0 ? 'block' : 'none';
}

showlocalStorageTasks();