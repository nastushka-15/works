const birthDate= document.querySelector('#input-form');
const button = document.querySelector('#button');
const result = document.querySelector('#result');
const alert = document.querySelector('#alert');
function chek() {
    document.querySelector('#alert').innerHTML = "";
    if (birthDate.value =="") {
        document.querySelector('#alert').innerHTML +="Введите дату рождения:"
    }
}


function calculateDays() {
    const birthDateStr = birthDate.value;
    console.log(birthDateStr);
    const birthDateTimeatamp = Date.parse(birthDateStr);
    console.log(birthDateTimeatamp);
    const currentTimestamp = Date.now();
    console.log(currentTimestamp);
    let diffInMilliseconds =  birthDateTimeatamp - currentTimestamp;
    console.log(diffInMilliseconds);
    const daysBefor = Math.floor(diffInMilliseconds/(1000 * 60 *60 * 24));
    console.log(daysBefor);
let days;
    if (daysBefor % 10 ==0) {
days = 'дней';
    }  else if (daysBefor >=5 && daysBefor  <=19) {
        days = 'дней';
    }
    else if (daysBefor % 10 >=5 && daysBefor % 10 <=9) {
        days = 'дней';
    } else if (daysBefor % 10 >=2 && daysBefor % 10 <=4) {
        days = 'дня';
    } else {
        days = 'день';
    }
    
    if (birthDate.value =="") {
        alert.innerHTML ="Введите дату рождения:";
        result.innerHTML = "";
    } else {
    result.textContent = `До Вашего Дня рождения осталось ${daysBefor} ${days}!`;
    alert.textContent = "";
    }

    
}

    button.addEventListener('click', calculateDays);

