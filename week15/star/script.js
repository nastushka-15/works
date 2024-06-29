//Создайте пустой массив с именем numbers
//Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
let numbers = [];
for (let i = -10; i <= 10; i++){
numbers.push(i);
}
console.log(numbers);

//Удалите все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++){
if (numbers[i] < 0){
numbers.splice(0, 1); // начиная с первого элемента удаляем один элемент
i --;
} 
}
console.log(numbers);
//Возведите каждое число в квадрат
for (let i = 0; i < numbers.length; i++) {
let  number =numbers[i];
let squareNumber = numbers[i]*numbers[i];
numbers[i]=squareNumber;
}
console.log(numbers); 

//Отсортируйте числа в порядке убывания
numbers.reverse();
console.log(numbers);
