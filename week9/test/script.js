// let message='Привет!';

// let user = 'Настя',
//     age = 31,
//     number = 908;
// const CONST = 100;
// let n = 123;
// n = 12.3;
// let x = 5;
// let y = 3;
// //alert (x * y);
// let name = 'Звезда';
// let message_to = `Привет, ${name}`;
// //alert (message_to);


// let message_to2 = 'Привет, ' + name;
// alert (message_to2);

// let time;
// time = 34;
// console.log(`Старт поездки. Осталось минут: ` + time +`.`);
// time -= 15;
// console.log(`Немного сторис в соцсетях. Осталось минут: ` + time +`.`);
// time -= 10;
// console.log(`Немного не новостей, но событий. Осталось минут: ` + time +`.`);
// time = 0;
// console.log('Вы приехали. Добро пожаловать в Москву.');


let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

const button = 100;
document.querySelector('.button');

const total = +deposit + +growth;
document.querySelector('.total');


console.log(`Ваш депозит на начало расчётного периода составлял ${deposit} ${currency}.`);
console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`);
console.log(`К концу расчётного периода прирост составил ${growth} ${currency}., и на данный момент 
ваш депозит составляет ${total} ${currency}.`);

let newinterestRate = 0.07;
let newGrowth = newinterestRate * (button+ total);
 const sum = newGrowth + button+ total;
console.log (sum);

button.addEventListener('click', () => {
  const sum = Number(
 document.querySelector('.sum').value);

  total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});
console.log (sum);
let message = (`Через год у вас будет ${sum} ${currency}. на счету`);



let interestRate = 18.5;

const deposit = '30000';


const growth = '150';

const currency = 'руб';

const button = 100;
document.querySelector('.button');


const firstSum = +deposit + +growth;


console.log(`Ваш депозит на начало расчётного периода составлял ${deposit} ${currency}.`);
console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`);
console.log(`К концу расчётного периода прирост составил ${growth} ${currency}., и на данный момент 
ваш депозит составляет ${firstSum} ${currency}.`);




button.addEventListener('click', () => {
  const sum = 100;
  Number(document.querySelector('.sum').value);
  const newDeposit = (firstSum + sum);
  const interest = newDeposit * 0.07;
  const finalDeposit = newDeposit + interest;
  const message = `Через год у вас будет ${finalDeposit} ${currency}. на счету.`  total.textContent = message;
});
const total = finalDeposit;
document.querySelector('.total');