//1. Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. 
//Для генерации случайных оценок, используйте функцию Math.random().
const grades = [];
for ( let a = 1; a <= 12; a++ ) {
        grades.push(Math.floor(Math.random() * 100) + 1);
    };
console.log(grades);
// 2. Рассчитайте и выведите средний балл студентов, используя методы массивов
const avarageGrade = grades.reduce((a, b) =>(a+b))/grades.length;
console.log(avarageGrade);
// 3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
let copyGrade = [...grades];
let sortedGrades = copyGrade.sort((a,b) => a-b);
const maxGrade = sortedGrades[sortedGrades.length-1];
//const maxGrade = Math.max(...grades);
console.log(maxGrade);
// 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
//const minGrade = Math.min(...grades);
const minGrade = sortedGrades[0];
console.log(minGrade);
// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
let abGrades = grades.filter(el=> el>=60);
console.log(abGrades.length);
// 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const cdGrades = grades.filter(el=> el<60);
console.log(cdGrades.length);
// 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// Если оценка ниже 20, преобразуйте её в "E"
const gradesAsString = grades.map((grade) =>{
    if (grade >=80) {
        return 'A';
    }
    if (grade >=60) {
        return 'B';
    }
    if (grade >=40) {
        return 'C';
    }
    if (grade >=20) {
        return 'D';
    }
    else {
        return 'E';
    }
});
console.log(gradesAsString);