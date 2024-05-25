const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');

let total = +item1.innerHTML + +item2.innerHTML + +item3.innerHTML + +item4.innerHTML;
const sum = document.getElementById('sum')
const createsum = document.createElement('p');
createsum.textContent = `${total} руб.`;
sum.append(createsum);

let newTotal = total * 0.8;
let newItem1 = +item1.innerHTML * 0.8;
let newItem2 = +item2.innerHTML * 0.8;
let newItem3 = +item3.innerHTML * 0.8;
let newItem4 = +item4.innerHTML * 0.8;

function discont() {
    item1.innerText = newItem1;
    item2.innerText = newItem2;
    item3.innerText = newItem3;
    item4.innerText = newItem4;
    createsum.textContent = `${newTotal} руб.`;
    sum.append(createsum);
}
document.querySelector('.button-sum').onclick = discont;