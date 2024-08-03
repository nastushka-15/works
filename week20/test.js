// Задание 5
// Допишите функцю makeFive так, чтобы она создала объект ошибки (new Error) и выводила текст ошибки в консоль.
function makeFive(number) {
    if (number === 0) {
      const error = new Error('Ошибка')
      console.log(error.message)
    } else {
      console.log(number * (number - 1))
    }
  }
  makeFive(0)
  //makeFive(-1)
//   Задание 6
// Создайте функцию makeSix, которая дополнит код предыдущей функции так, чтобы она использовала оператор throw для генерации
//  исключения в случае ошибки, а затем перехватывала это исключение и выводила в консоль сообщение "Ошибка перехвачена".
function makeSix(number) {
	try {
	  //твой код
      if (number===0){
      throw new Error('Ошибка перехвачена')
      }
	} catch (error) {
	  //твой код
   console.log(error.message)
	}
}
makeSix(0)
Задание 7
// Допишите функцию makeSeven так, что если делитель равен нулю, 
// бросьте исключение с сообщением "Деление на ноль недопустимо".
function makeSeven() {
	let dividend = 10
	let divisor = 0
	//Ваш код
  try{
    if (divisor===0){
      throw new Error('Деление на ноль недопустимо')
    }
	console.log(dividend / divisor)
  }catch(error){
    console.log(error.message)
  }
}
makeSeven()

function makeNine() {
	let email = 'example.com'
	let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	//твой код
  try{
    if(emailPattern.test(email)){
      document.getElementById('practicum').textContent='Email-адрес корректен'
    }
  }catch(error){
     document.getElementById('practicum').textContent='Некорректный email-адрес'
  }
}
makeNine()

// Задание 25
// Создайте функцию makeTwentyFive, которая использует async/await 
// для асинхронной операции и блок try/catch, чтобы обработать ошибку, которая может возникнуть при этой асинхронной операции.
const result = document.getElementById('practicum')

function simulateAsyncOperation() {
	return new Promise((resolve, reject) => {
		if (Math.random() < 0.9) {
			reject(new Error('Произошла ошибка при асинхронной операции'));
		} else {
			resolve('Асинхронная операция успешно выполнена');
		}
	});
}

//Добавить название функции и ключевое слово async
async function makeTwentyFive(){
  

//Подумайте, в каком месте нужно добавить await
result.textContent = 'Ожидание...';
try {
const result =  await simulateAsyncOperation();
result.textContent = 'Результат: ' + result;
} catch (error) {
result.textContent = 'Произошла ошибка: ' + error.message;
}
}
makeTwentyFive()
// Задание 26
// Создайте функцию makeTwentySix, которая содержит код 
// с использованием Promise.reject, демонстрирующий, что ошибки внутри этих операций не попадают в блок catch на том же уровне.
function makeTwentySix() {
	const result = document.getElementById('practicum')
	result.textContent = 'Ожидание...'
	try {
		Promise.reject('err')
			.then((result) => {
				result.textContent = 'Успешное завершение: ' + result
			})
			.catch((error) => {
				result.textContent = 'Ошибка в Promise.reject: ' + error
			});
		throw new Error('ошибка')
	} catch (e) {
		result.textContent = 'Ошибка на верхнем уровне: ' + e.message
	}
}
makeTwentySix()