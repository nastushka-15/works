//задание 1
// - Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch().
// - Затем из полученного объекта нужно извлечь свойство "status"
// - Результат должен быть выведен в элемент <p> с id "practicum" в DOM-дерево.
const paragraph = document.getElementById('practicum')
function makeOne() {
  fetch('https://catfact.ninja/fact')
    .then((response) => {
        paragraph.textContent = response.status
    })
    .catch((err) => {
        paragraph.textContent = 'Произошла ошибка'
    })
}
makeOne()


//задание 2
// Создайте функцию makeTwo, которая выполняет следующие действия:

// - Функция makeTwo должна сделать GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "name"
// - Полученное значение вставьте в элемент с id "practicum" в DOM-дерево
// - В случае ошибки выведите сообщение 'Произошла ошибка'


function makeTwo() {
	//Ваш код
  let practicum = document.getElementById('practicum')
  fetch('https://emojihub.yurace.pro/api/random/group/face-positive')
    .then((res) =>{
      return res.json()
    })
    .then((data) =>{
      practicum.textContent = data.name
    })
    .catch((err) =>{
      practicum.textContent = 'Произошла ошибка'
    })
}

makeTwo()

//
// Задание 3
// Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в <p> свойство statusText полученного объекта.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeThree() {
	//Ваш код
  let practicum = document.getElementById('practicum')
  fetch('https://www.boredapi.com/api/activity')
    .then((res) =>{
      practicum.textContent = res.statusText
    })
    .catch((err) =>{
     practicum.textContent =  'Ошибка. Запрос не выполнен'
    })
}

makeThree()

// Задание 4
// Создайте функцию makeFour, которая выполняет следующие действия:

// - Функция makeFour должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "activity", которое содержит описание активности
// - Вывести полученную активность в формате 'Activity: описание активности' в <p>
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeFour() {
	//Ваш код
  let practicum = document.getElementById('practicum')
  fetch('https://www.boredapi.com/api/activity ')
    .then((res) =>{
      return res.json()
    })
    .then((data) =>{
     practicum.textContent=`Activity: ${data.activity}` 
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}

makeFour()

// Задание 5
// Создайте функцию makeFive, которая выполняет следующие действия:

// Функция makeFive должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()
// Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// Затем из полученного JSON-объекта нужно извлечь свойство "participants", которое содержит количество участников для активности
// Вывести количество участников для активности в <p>
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeFive() {
	//Ваш код
    let practicum = document.getElementById('practicum')
  fetch('https://www.boredapi.com/api/activity')
    .then((res) =>{
      return res.json()
    })
    .then((data) =>{
     practicum.textContent= data.participants
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}

makeFive()

// Задание 6
// Создайте функцию makeSix, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в <p> свойства из полученного объекта, такие как activity, type, price и accessibility.
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeSix() {
	//Ваш код
    let practicum = document.getElementById('practicum')
  fetch('https://www.boredapi.com/api/activity')
    .then((res) =>{
     practicum.textContent= res.activity + res.type+res.price+res.accessibility
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}

makeSix()
//Задание 7
// Создайте функцию makeSeven, которая выполняет GET-запрос по адресу https://api.agify.io/, используя функцию fetch(). Выведите в <p> ответ с сервера (не забудь преобразовать его к строке с помощью JSON.stringify()), чтобы убедиться, что получили данные.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeSeven() {
	//Ваш код
    let practicum = document.getElementById('practicum')
  fetch('https://api.agify.io/')
    .then((res) =>{
     return res.json()
    })
    .then((data)=>{
       practicum.textContent= JSON.stringify(data)
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}
makeSeven()
// Задание 8
// Если вы сделали всё верно, в 7 задании вы получили ответ от сервера "Missing 'name' parameter". Помните, что обработка ошибок является важной частью кода, и хорошая практика - всегда предусматривать возможные ситуации, когда запрос может завершиться неудачно.

// Создайте функцию makeEight, которая выполняет GET-запрос по адресу https://api.agify.io/, используя функцию fetch(), с параметром '?name=alice' ("https://api.agify.io/параметр").
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'
function makeEight() {
	//Ваш код
    let practicum = document.getElementById('practicum')
  fetch('https://api.agify.io/?name=alice')
    .then((res) =>{
     return res.json()
    })
    .then((data)=>{
       practicum.textContent= JSON.stringify(data)
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}
makeEight()
// Задание 9
// Создайте функцию makeNine, которая выполняет GET-запрос по адресу `https://api.agify.io/` с параметром ?name=vadim, используя функцию fetch(), и выведет полученные данные в элемент с id practicum.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.
const resultElement = document.getElementById('practicum')

function makeNine() {
  fetch('https://api.agify.io/?name=vadim')
    .then((response) => response.json())
    .then((data) => {
      //Ваш код
      resultElement.textContent= JSON.stringify(data)
    })
    .catch((error) => {
      //Ваш код
      resultElement.textContent='Ошибка. Запрос не выполнен'
    })
}

makeNine()
// Задание 10
// Создайте функцию makeTen, которая выполняет следующие действия:

// - Функция makeTen должна сделать GET-запрос по адресу https://dog.ceo/api/breeds/image/random с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "message", которое содержит ссылку на случайное изображение собаки
// - Далее нужно создать элемент <img> и установить его атрибут "src" равным значению из свойства "message" (ссылке на изображение)
// - Добавьте элементу <img> класс 'html-img'
// - Созданный элемент <img> должен быть вставлен после элемента с id "practicum" в DOM-структуре страницы
// После выполнения этих шагов будет загружено случайное изображение собаки, которое будет отображено под <p>.
// - В случае ошибки выведите в <p> сообщение 'Ошибка. Запрос не выполнен'
function makeTen() {
	//Ваш код
      let practicum = document.getElementById('practicum')
  fetch('https://dog.ceo/api/breeds/image/random ')
    .then((res) =>{
     return res.json()
    })
    .then((data)=>{
      let image = document.createElement('img');
      image.src = data.message
        practicum.appendChild(image);
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}

makeTen()
// Задание 11
// Нужно создать функцию makeEleven, которая выполняет следующие действия:

// Функция makeEleven должна сделать GET-запрос на адрес https://api.ipify.org?format=json с помощью функции fetch()
// Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// Затем из полученного JSON-объекта нужно извлечь свойство "ip", которое содержит текущий IP-адрес
// Полученный IP-адрес нужно вывести в элемент с id "practicum"
// В случае ошибки выведите `Ошибка: ${error}`
function makeEleven() {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
          //Ваш код
        document.getElementById('practicum').textContent =data.ip
      })
      .catch((error) => {
        document.getElementById('practicum').textContent = `Ошибка: ${error}`
      })
  };
  makeEleven()
//   Задание 12
// Введите в поле ввода IP-адрес из задания 11 в поле ниже для получения его гео-позиции. Используйте функцию fetch() для выполнения GET-запроса по адресу https://api.ipgeolocationapi.com/geolocate/{ipAddress}. Замените {ipAddress} на фактический IP-адрес, который вы получите из текстового поля.

// Подсказка: используйте свойство textContent для вывода данных о гео-позиции в виде строки.
// В случае ошибки выведите `Ошибка: ${error}`
function makeTwelve() {
	//Ваш код
   let practicum = document.getElementById('practicum')
  let ip = document.getElementById('ipAddress').value
  fetch('https://api.ipgeolocationapi.com/geolocate/')
    .then((res) =>{
     return res.json()
    })
    .then((data)=>{
       practicum.textContent= JSON.stringify(data)
    })
    .catch((err)=>{
      practicum.textContent='Ошибка. Запрос не выполнен'
    })
}

makeTwelve()
// Задание 13
// Создайте функцию makeThirteen, которая выполняет GET-запрос по адресу https://official-joke-api.appspot.com/random_joke, используя функцию fetch(). Выведите в <p> ответ с сервера, чтобы посмотреть, какие поля есть в ответе.
// В случае ошибки выведите `Ошибка: ${error}`
function makeThirteen() {
	//Ваш код
      let practicum = document.getElementById('practicum')
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res) =>{
     return res.json()
    })
    .then((data)=>{
       practicum.textContent= JSON.stringify(data)
    })
    .catch((err)=>{
      practicum.textContent=`Ошибка: ${err}`
    })
}

makeThirteen()
// Задание 14
// Создайте функцию makeFourteen, которая выполняет GET-запрос по адресу https://official-joke-api.appspot.com/random_joke, используя функцию fetch(). Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.
// В случае ошибки выведите `Ошибка: ${error}`

// Подсказка: используйте свойство innerHTML и шаблонные строки
const paragraph = document.getElementById('practicum')
function makeFourteen() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data) => {
        //Ваш код
      paragraph.textContent =data.setup+ data.punchline
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeFourteen()
// Задание 15
// Нужно создать функцию makeFifteen, которая делает следующие действия:

// Функция makeFifteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/posts с помощью функции fetch()
// В теле запроса отправьте JSON-объект с полями title и body, например:
// { "title": "Заголовок", "body": "Текст поста" }
// Укажите заголовок "Content-Type" как "application/json" для запроса
// Полученный ответ от сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ от сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.
const paragraph = document.getElementById('practicum')
function makeFifteen() {
  const postData = {
    title: 'Заголовок',
    body: 'Текст поста',
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}
makeFifteen()
// Задание 16
// Создайте функцию makeSixteen, которая делает следующие действия:

// - Функция makeSixteen должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch()
// - Укажите заголовок "Content-Type" как "application/json" для запроса
// - В теле запроса отправьте JSON-объект с полями title и body, например:
// { "title": "Новый заголовок", "body": "Новый текст поста" }
// - Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// - Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.
const paragraph = document.getElementById('practicum')

function makeSixteen() {
	//Ваш код
  const postData = {
    title: 'Заголовок',
    body: 'Текст поста',
  };
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeSixteen()
// Задание 17
// Создайте функцию makeSeventeen, которая делает следующие действия:

// Функция makeSeventeen должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch()
// Полученный ответ с сервера должен быть выведен в <p>
// В случае ошибки выведите `Ошибка: ${error}`
const paragraph = document.getElementById('practicum')

const makeSeventeen = () => {
	//Ваш код
  fetch('https://jsonplaceholder.typicode.com/posts/1 ', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeSeventeen()
// Задание 18
// Создайте функцию makeEighteen, которая делает следующие действия:

// - Функция makeSeventeen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch()
// - Укажите заголовок "Content-Type" как "application/json" для запроса
// - В теле запроса отправьте JSON-объект с полями title и url, например:
// { "title": "Название изображения", "url": "https://example.com/image.jpg" }
// - Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
const paragraph = document.getElementById('practicum')
function makeEighteen() {
	//Ваш код
    const postData = {
    title: 'Название изображения',
    url: 'https://example.com/image.jpg',
  };
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeEighteen()
// Задание 19
// Создайте функцию makeNineteen, которая делает следующие действия:

// Функция makeNineteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch()
// В теле запроса отправьте JSON-объект с полями name, username, email и phone, например:
// { "name": "Кот Учёный", "username": "kitty", "email": "kitty@example.com", "phone": "123-456-7890" }
// Укажите заголовок "Content-Type" как "application/json" для запроса
// Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
const paragraph = document.getElementById('practicum')
function makeNineteen() {
	//Ваш код
     const postData = {
    name: 'Кот Учёный',
    username:'kitty', 
    email: 'kitty@example.com',
    phone: '123-456-7890'  
  };
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeNineteen()
// Задание 20
// Создайте функцию makeTwenty, которая делает следующие действия:

// Функция makeTwenty должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch()
// Укажите заголовок "Content-Type" как "application/json" для запроса
// В теле запроса отправьте JSON-объект с полями name, email, body и postId, например:
// { "name": "Золотая рыбка", "email": "goldfish@example.com", "body": "Гав-гав!", "postId": 1 }
// Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
function makeTwenty() {
	//Ваш код
  const paragraph = document.getElementById('practicum')
	//Ваш код
     const postData = {
    name: 'Золотая рыбка',
    username:'kitty', 
    email: 'goldfish@example.com',
    body: 'Гав-гав!',
    postId: 1 
  };
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}
makeTwenty()
// Задание 21
// Создайте функцию makeTwentyOne, которая делает следующие действия:

// - Функция makeTwenty должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch()
// - Укажите заголовок "Content-Type" как "application/json" для запроса
// В теле запроса отправьте JSON-объект с полями name, email, body и postId, например:
// { "name": "Золотая рыбка", "email": "goldfish@example.com", "body": "Буль-буль!", "postId": 1 }
// - Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// - Выведите ответ с сервера в <p>
// В случае ошибки выведи 'Ошибка. Запрос не выполнен'
function makeTwentyOne() {
	//Ваш код
  const paragraph = document.getElementById('practicum')
	//Ваш код
     const postData = {
    name: 'Золотая рыбка',
    email: 'goldfish@example.com',
    body: 'Буль-буль!',
    postId: 1 
  };
  fetch('https://jsonplaceholder.typicode.com/comments/1 ', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then((response) => response.json())
    .then((data) => {
       paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}
makeTwentyOne()
// Задание 22
// Создайте функцию makePromiseAllOne, которая делает следующие действия:

// Функция makePromiseAllOne должна делать два GET-запроса на адреса:
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/comments/1
// Используйте `.then()` для обработки результатов.
// Выведите оба ответа с сервера в <p>
// В случае ошибки выведите 'Ошибка. Запрос не выполнен'
const paragraph = document.getElementById('practicum')
function makePromiseAllOne() {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const commentUrl = 'https://jsonplaceholder.typicode.com/comments/1'
  const postPromise = fetch(postUrl)
    .then(response => response.json())
    .then(data => {
      return JSON.stringify(data)
    })
  const commentPromise = fetch(commentUrl)
    .then(response => response.json())
    .then(data => {
      return JSON.stringify(data)
    })
  Promise.all([postPromise, commentPromise])
    .then(results => {
      paragraph.textContent = results
    })
    .catch(error => {
      paragraph.textContent = 'Ошибка. Запрос не выполнен'
    });
}
makePromiseAllOne()
// Задание 23
// Создайте функцию makePromiseAllTwo, которая делает следующие действия:

// - Функция makePromiseAllTwo должна делать три GET-запроса на адреса:
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/comments/1
// - Используйте `async/await` для обработки результатов.
// - Выведите все ответы с сервера в <p>
// В случае ошибки выведите 'Ошибка. Запрос не выполнен'
const paragraph = document.getElementById('practicum')
async function makePromiseAllTwo() {
  try {
    const response1 = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    )
    const data1 = await response1.json()
 const response2 = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    const data2 = await response2.json()
     const response3 = await fetch(
      'https://jsonplaceholder.typicode.com/comments/1'
    )
    const data3 = await response3.json()
    //Ваш код
    paragraph.textContent= JSON.stringify(data1)+JSON.stringify(data2)+JSON.stringify(data3)
  } catch (error) {
    //Ваш код
    paragraph.textContent= 'Ошибка. Запрос не выполнен'
  }
}

makePromiseAllTwo()
// Задание 24
// let name = "Вася";
// function sayHi() {
// document.getElementById('practicum').textContent = name;
// }

// setTimeout(function() {
// let name = "Петя";
// sayHi();
// }, 1000);
// Есть код, как думаете, какое имя выведется в <p>? Проверьте себя.
const makeTwentyFour = () => {
    let name = 'Вася'
    function sayHi() {
        document.getElementById('practicum').textContent = name
    }
    setTimeout(function () {
      let name = 'Петя'
      sayHi()
    }, 1000)
  }
  makeTwentyFour()
//   Задание 25
// document.getElementById('practicum').textContent = 1;
// setTimeout(function () {
// document.getElementById('practicum').textContent = 2;
// }, 0);
// document.getElementById('practicum').textContent = 3;
// В каком порядке числа выведутся в <p>?
function makeTwentyFive() {
    const paragraph = document.getElementById('practicum')
    let result = ''
    result += '1, '
    // Cтавим таймер на 0 миллисекунд
    setTimeout(function () {
      result += '2, ';
      paragraph.textContent = result;
    }, 0);
    result += '3, ';
    paragraph.textContent = result;
  }
  makeTwentyFive()
//   Задание 26
// Создайте функцию makeTwentySix, должна использовать setTimeout
//  для отображения в <p> сообщения "Прошло 5 секунд" через 5 секунд.
function makeTwentySix() {
  setTimeout(()=>{
    document.getElementById('practicum').textContent = 'Прошло 5 секунд'
  }, 5000)
}
makeTwentySix()
// Задание 27
// Создайте функцию makeTwentySeven,
//  должна использовать setTimeout для отображения в <p> сообщения "Прошло 2 секунды" через 2 секунды.
function makeTwentySeven() {
	//Ваш код
    setTimeout(()=>{
    document.getElementById('practicum').textContent = 'Прошло 2 секунды'
  }, 2000)
}

makeTwentySeven()
// Задание 28
// Создайте функцию makeTwentyEight, 
// которая использует setInterval для отображения в <p> сообщения "Прошло 3 секунды" каждые 3 секунды.
function makeTwentyEight() {
  let result = ''
  
  const id = setInterval(() => {
    if(result === '') {
      result += 'Прошло 3 секунды'
    } else {
      result += ' Прошло 3 секунды'
    }
    document.getElementById('practicum').textContent = result
  }, 3000)
    
  setTimeout(() => clearInterval(id), 7000)
}
makeTwentyEight()
// Задание 29
// Создайте функцию makeTwentyNine, которая
//  использует setInterval для отображения в <p> сообщения "Прошло 2 секунды" каждые 2 секунды.
function makeTwentyNine() {
  let result = ''
  //Ваш код
const id = setInterval(() => {
    if(result === '') {
      result += 'Прошло 2 секунды'
    } else {
      result += ' Прошло 2 секунды'
    }
    document.getElementById('practicum').textContent = result
  }, 2000)
  //Очищаем setInterval для экономии ресурсов
  setTimeout(()=>{
    clearInterval(id)
  }, 2000)
}

makeTwentyNine()
// Задание 30
// Создайте функцию makeThirty, которая использует setInterval для отображения 
// в <p> сообщения "Прошло 5 секунд" каждые 5 секунд.
function makeThirty() {
  let result = ''
  //Ваш код
const id = setInterval(() => {
    if(result === '') {
      result += 'Прошло 5 секунд'
    } else {
      result += ' Прошло 2 секунд'
    }
    document.getElementById('practicum').textContent = result
  }, 5000)

  //Очищаем setInterval для экономии ресурсов
  setTimeout(()=>{
    clearInterval(id)
  }, 16000)
}

makeThirty()