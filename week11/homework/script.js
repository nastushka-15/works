// Вам предлагается реализовать функционал добавления задачи на веб-страницу.
//Получаем необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Обработчик события клика на кнопку "Добавить"
addButton.addEventListener('click', function () {
  //Получаем значение, введенное в поле ввода
  const taskText = taskInput.value;

  //Создаём новый элемент списка
  const newTask = document.createElement('li');
  
  //Устанавливаем текст задачи внутри созданного элемента списка
  newTask.textContent = taskText;
  
  //Добавляем созданный элемент списка в нужное место на странице
  taskList.append(newTask);
  
  //Очищаем поле ввода после добавления задачи
  taskInput.value = '';
});

// Добавьте класс 'completed', чтобы отображать выполненные задачи с зачеркнутым текстом.
const list = document.getElementById('taskList');

list.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
});
