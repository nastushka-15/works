// Вам предлагается реализовать функционал добавления задачи на веб-страницу.
//Получаем необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const emptyTasks = document.querySelector('.empty-tasks');
const removeButton = document.getElementById('removeButton');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Когда задач нет, должно быть серое уведомление о том, что задачи отсутствуют, 
//а кнопка «Очистить список» должна быть неактивна
emptyTasks.textContent = 'Задачи отстутствуют';


// Функция для обновления отображения
function updateDisplay() {
//const tasks = taskList.children;
taskList.innerHTML = '';
if (tasks.length === 0) {
  // Если задач нет
  emptyTasks.style.display = 'block'; // Показываем сообщение
  removeButton.disabled = true; // Делаем кнопку неактивной
} else {
  // Если есть задачи
  document.addEventListener('DOMContentLoaded', function(event){
    emptyTasks.style.display = 'none'; // Скрываем сообщение
    
    removeButton.disabled = false; // Делаем кнопку активной
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${task}  <input type="checkbox" class="checkbox">` 
     
                   
    taskList.appendChild(li);
  })
  })
saveTasks();
}
};


// Функция для добавления задачи
function addTask() {

  //Получаем значение, введенное в поле ввода
  const taskText = taskInput.value;
  tasks.push(taskText);
  //Создаём новый элемент списка
  const newTask = document.createElement('li');
  
  //Устанавливаем текст задачи внутри созданного элемента списка
  newTask.innerHTML = `${taskText}  <input type="checkbox" class="checkbox">`  ;
  
  //Добавляем созданный элемент списка в нужное место на странице
  taskList.append(newTask);
  
  //Очищаем поле ввода после добавления задачи
  taskInput.value = '';
  saveTasks();
  updateDisplay();
}

  //Обработчик события клика на кнопку "Добавить"
  addButton.addEventListener('click', addTask);

// Функция для удаления задачи из local storage
function deleteTask(index) {
  tasks.splice(index, 1);
  updateDisplay();
}

function clearTasks() {
  tasks = [];
  updateDisplay();
}

// Функция для очистки списка задач
// function clearTasks() {
//   taskList.innerHTML = '';
//   updateDisplay();
// }

// Привязываем функцию очистки к кнопке
removeButton.addEventListener('click', clearTasks);

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Инициализация отображения
updateDisplay();
//function updateDisplay() {
 
  
  // if (tasks.l
  
  //     // Если есть задачи
  //     emptyTasks.textContent = ''; // Скрываем сообщение
  //     removeButton.disabled === false; // Делаем кнопку активной
  
//};
//updateDisplay();


// reeTermsCheckbox.addEventListener('change', function() {
//   // Разблокируем или блокируем кнопку в зависимости от состояния чекбокса
//   submitBtn.disabled = !agreeTermsCheckbox.checked;
//   if (agreeTermsCheckbox.checked === false) {
//       termsError.textContent = 'Необходимо согласие с условиями.';
//       termsError.style.display = 'block';
//       hasError = true;
//       }
// });






// Добавьте класс 'completed', чтобы отображать выполненные задачи с зачеркнутым текстом по нажатию чекбокса.

// const list = document.getElementById('taskList');
// const checkboxes = document.querySelectorAll('.checkbox');

// checkboxes.forEach((checkbox) => {
  

//   checkbox.addEventListener('click', function (event) {
//     const li = event.target.checked.parentElement;
//     if (event.target.checked) {
//       li.classList.toggle('completed', );
//     }
//   });
// });


// Добавьте класс 'completed', чтобы отображать выполненные задачи с зачеркнутым текстом.
//const list = document.getElementById('taskList');

// list.addEventListener('click', function (event) {
// 	if (event.target.tagName === 'LI') {
// 		event.target.classList.toggle('completed');
// 	}
// });
