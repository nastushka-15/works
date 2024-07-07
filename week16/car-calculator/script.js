
const form = document.forms.calculatorForm;
const selectBrend = form.elements.carBrend;
const model = form.elements.model;
const fuelArray = Array.from(form.elements.fuel);
const engine = form.elements.engine;
const carCondition = form.elements.carCondition;
const ownership = form.elements.ownership;
const payment = form.elements.payment;
const calculateBtn = form.elements.calculateBtn;
const result = document.getElementById("result");

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
});
// Список моделей для каждой марки автомобиля
const carModels = {
audi: ["A1", "A3", "A4", "A6"],
bmw: ["3 Series", "5 Series", "7 Series", "X5"],

mercedes: ["C-Class", "E-Class", "S-Class"],
jaguar: ['E‑PACE', 'F‑PACE', 'F‑TYPE', 'XF']
};

function updateModels() {
const selectedMake = document.getElementById("carBrend").value;
const carModelSelect = document.getElementById("carModel");

carModelSelect.innerHTML = ""; // Очищаем текущие модели

carModels[selectedMake].forEach(model => {
    const option = document.createElement('option');
    option.value = model;
    option.text = model;
    carModelSelect.appendChild(option);
});
}
// Инициализируем список моделей
updateModels();

function showOwnershipOptions() {
    let usedCar = document.getElementById("usedCar");
    let ownershipOptions = document.getElementById("ownershipOptions");

    if (usedCar.checked) {
        ownershipOptions.style.display = "block";
    } else {
        ownershipOptions.style.display = "none";
    }
}



// function calculatePrice(){

function calculatePrice() {
    //evt.preventDefault();
    let brandPrice = 0;
    let modelPrice = 0;
   

    // Calculate price based on selected brand
    if (selectBrend.value === "audi") {
        brandPrice = 3500000;
        console.log(brandPrice);
    } else if (selectBrend.value === "bmw") {
        brandPrice = 3700000;
    } else if (selectBrend.value === "mercedes") {
        brandPrice = 3800000;
    } else if (selectBrend.value === "jaguar") {
        brandPrice = 3750000;
    } 

    // Calculate price based on selected model
    if (model.value === "A1") {
        modelPrice = 500000;
        console.log(modelPrice);
    } else if (model.value === "A3") {
        modelPrice = 550000;
    } else if (model.value === "A4") {
        modelPrice = 600000;
    }else if (model.value === "A6") {
        modelPrice = 650000;
    }

    // Calculate price based on selected fuel type
//fuelArray.addEventListener("change", calculatePrice);
calculateBtn.addEventListener("click", calculatePrice);
let fuelPrice= 0;
fuelArray.forEach((fuelElement) =>{
    
    
    fuelElement.addEventListener(('change'), (e) =>{
        if(e.target.checked) {
            fuelPrice = fuelPrice+ Number(e.target.value); 
            
            console.log(fuelPrice);
        } else {
            fuelPrice = 0;
        }
        
    })
    
});
console.log(fuelPrice);


// let fuelPrice = Number(document.querySelector('input[name=`fuel`]:checked').value);
// console.log(fuelPrice);


    //const patrol = document.getElementById('patrol');


//     let selectedFuel = Array.from(fuel).find(r => r.checked)?.value;
//     if (selectedFuel.textContent === 'бензин') {
//         fuelPrice = 1000;
//     } else if (fuel.value === "дизель") {

//         fuelPrice = 1500;
//     } else if (fuel.value === "газ") {
//         fuelPrice = 2000;
//     } else if (fuel.value === "электричество") {
//         fuelPrice = 2000;
// }
//const total = brandPrice + modelPrice + fuelPrice;
const total = brandPrice + modelPrice + fuelPrice;
const finTotal= total.toLocaleString('ru-RU');
result.textContent = `Итоговая стоимость автомобиля - ${finTotal} рублей`;
}

console.log(calculatePrice());
selectBrend.addEventListener("change", calculatePrice);
model.addEventListener("change", calculatePrice);



// const selectedCondition = document.getElementById("carCondition").checked;
// selectedCondition.addEventListener('change', function() {
//     if (selectedCondition === true) {
//         const input = document.createElement('input');
//         input.value = 'owners';
//         input.type = 'radio';
//         input.text = '1-2 владельца';
//         selectedCondition.appendChild(input);
//         } else {
//             //input.innerHTML = "";
//         }
// });


// const selectedCondition = document.getElementById("carCondition");
// console.log(selectedCondition);

// function updateOwners() {
// if (selectedCondition.checked === true) {
// const input = document.createElement('input');
// input.value = 'owners';
// input.type = 'radio';
// input.text = '1-2 владельца';
// selectedCondition.appendChild(input);
// } else {
// input.innerHTML = ""; // Очищаем 
// }
// }
// // Инициализируем дополнительное радио
// updateOwners();

// selectBrand.addEventListener('change', function (evt) {
//    if (selectBrand.value === 'Reno'){
//     for (let i =0; i< renoModels.length; i++){
//         let modelOption = document.createElement('option');
//         //city.classList.add('text');
//         modelOption.textContent=`Температура в ${cities[i]}: ${temperatures[i]} °C`;
//         model.appendChild(modelOption);
//         }

//    }
//   });




// const newUrl = {
// id: 0,
// url: "",
// errorMessage: "",
// result: "",
// data: ""
// };

// function addField() {
// if (value.length < 10) {
//     const added = [...value]; // Получаем текущее состояние
//     const data = { ...newUrl }; // Получаем шаблон элемента
//     data.id = lastId + 1; // Записываем новый ID
//     added.push(data); // Добавляем элемент
//     setId((e) => ++e); // Увеличиваем ID
//     setValue(added); // Обновляем состояние
// }
// }

// export default function App() {
// const [value, setValue] = useState([{ ...newUrl }]);
// const [lastId, setId] = useState(0);

// function handleChange(event, index) {
//     const valueNew = [...value];
//     valueNew[index].url = event;
//     setValue(valueNew);
// }

// function addField() {
//     if (value.length < 10) {
//     const added = [...value];
//     const data = { ...newUrl };
//     data.id = lastId + 1;
//     added.push(data);
//     setId((e) => ++e);
//     setValue(added);
//     }
// }

// function removeField(index) {
//     setValue(value.filter((item, idx) => index !== idx));
// }

// async function handleClick(index, url) {
//     if (validator.isURL(url)) {
//     await axios
//         .get(url)
//         .then((response) => {
//         if (response.status === 200) {
//             const resNew = [...value];
//             resNew[index].result = response.headers;
//             setValue(resNew);
//         }
//         })
//         .catch(function (error) {
//         if (error.response) {
//             const resNew = [...value];
//             resNew[index].result = error.response.status;
//         }
//         });
//     } else {
//     const resNew = [...value];
//     resNew[index].errorMessage = "Некорректный URL";
//     setValue(resNew);
//     }
// }

// return (
//     <div>
//     <div>
//         <h1>URLs</h1>

//         <div style={{ width: 500 }}>
//         {value.map((item, index) => (
//             <div key={index} style={{ width: 500 }}>
//             {item.id + " "}
//             <input
//                 value={item.url}
//                 onChange={(e) => handleChange(e.target.value, index)}
//             />{" "}
//             <button onClick={() => handleClick(index, item.url)}>
//                 Get data
//             </button>{" "}
//             <button onClick={() => removeField(index)}>Remove field</button>
//             {item.errorMessage}
//             </div>
//         ))}
//         </div>
//         <br />
//         <br />

//         <div>
//         <button onClick={addField}>Add Field</button>
//         </div>
//     </div>

//     <h1>Answers</h1>

//     <div>
//         {value.map((item, index) => (
//         <div key={index}>
//             Результат запроса {item.id}: {item.result}
//         </div>
//         ))}
//     </div>
//     </div>
// );
