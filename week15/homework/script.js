const cities =['Москва', 'Дубай', 'Барселона', 'Лос-Анджелес'];
let temperatures=[];
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
	temperatures.push(Number(temperature));
}
console.log(cities);
console.log(temperatures);

const header = document.querySelector('.header');

for (let i =0; i< cities.length; i++){
let city = document.createElement('p');
city.classList.add('text');
city.textContent=`Температура в ${cities[i]}: ${temperatures[i]} °C`;
header.appendChild(city);
}

const maxTemperature = Math.max(...temperatures);
let max = document.createElement('p');
max.textContent=`Максимальная температура:  ${maxTemperature} °C`;
header.appendChild(max);

const minTemperature = Math.min(...temperatures);
let min = document.createElement('p');
min.textContent=`Минимальная температура:  ${minTemperature} °C`;
header.appendChild(min);