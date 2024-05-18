const total = document.querySelector('.total');

function calculateTotalPrice(quantity=2, price=15000000){
const sum =  quantity * price;
const sum2 = sum.toLocaleString('ru-RU');
const message = `Стоимость покупки: ${sum2} рублей`;
total.textContent = (message);
alert(`Стоимость покупки: ${sum2} рублей`);
}

