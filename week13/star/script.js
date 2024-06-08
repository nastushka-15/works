//Переменные
const name = document.querySelector('#name');
const avatar = document.querySelector('#avatar');
const comment = document.querySelector('#comment');
const userName = document.querySelector('#userName');
const userAvatar = document.querySelector('#userAvatar');
const userComment = document.querySelector('#userComment');
const button = document.querySelector('.button');
const userCommentDate = document.querySelector('#userCommentDate');
const chatFormContent = document.querySelector('.chat-form__content');
const noCheckbox = document.querySelector('#no');
const yesCheckbox = document.querySelector('#yes');
const checkboxes = document.querySelectorAll('.checkbox');
const alert = document.querySelector('#alert');

//Функция выбора только одного чекбокса
checkboxes.forEach(element => {
    element.addEventListener('change', function(){
        if (this.checked) {
            checkboxes.forEach(el =>{
                if (el!==this){
                    el.checked =false
                }
            })
        }
    });
});
//Функция отображения имени
function showName(){
    if (noCheckbox.value ==true) {
        let name = 'username';
    } else {
        let name = name.value;
    }
}

//Слушатель событий на чекбокс
noCheckbox.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById('name').value = 'username'  
        document.querySelector('#name').classList.add('hide');
        document.querySelector('#label-name').classList.add('hide');

    } else {
        document.querySelector('#name').classList.remove('hide');
        document.querySelector('#label-name').classList.remove('hide');
    }
})



//Массив и случайный индекс для аватара по умолчанию
let av1 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/0b41d126c.png';
let av2 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/1f3bf6ac9.png';
let av3 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/9ada13226.png';
let av4 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/659b374e4.png';
let av5 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/9718bec96.png';
let av6 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/a49a7ce15.png';
let av7 = 'https://chikipooki.com/public/images/ColoringPages/Thumbs/DisneyPrincesses/5/74e727fc7.png';

let avatars = [av1, av2, av3, av4, av5, av6, av7];
let x = avatars.length;

function getRandomIndex() {
    return Math.floor(Math.random() * x);
}

//Функция изменения  каждого слова имени  с заглавной буквы

function capFirstLetterInNameInput() {
    let trimmedName = name.value.trim();
    let words = trimmedName.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    return words.join(" ");
}

////Функция создания комментария
function makeComment() {

//Добавляем спам комментариев  на   слова "viagra" и "xxx"
let text = comment.value.toLowerCase();
const replacements = {'viagra':'***','xxx':'***'};
let checkSpam = text.replace(/viagra|xxx/gi, (match) => replacements[match]);

//добавляем дату
const currentDate = new Date();
let commentDate = currentDate.toLocaleDateString("ru") + " " + currentDate.toLocaleTimeString("ru");
//проверка пустых комментариев

if (comment.value =="") {
    alert.textContent="Введите комментарий!";
    chatFormContent.innerHTML="";
} else {
    alert.textContent="";
//добавдяем новый div с комментарием
let div = document.createElement('div');
div.classList.add('chat-form__content');
chatFormContent.before(div);

let image =  document.createElement('img');
image.classList.add('chat-form__content-img');
image.alt = "фото аватара пользователя";
image.style.width = '100px';
image.style.height = '100px';
let randomAvatar = avatars[getRandomIndex()];

    if (avatar.value == '') {
        image.src = randomAvatar;
    } else {
        image.src = avatar.value;
    }
div.appendChild(image);

let div2 = document.createElement('div');
div.appendChild(div2);

let p1 = document.createElement('p');
p1.classList.add('bold');
p1.textContent = capFirstLetterInNameInput();
div2.appendChild(p1);

let p2 = document.createElement('p');
p2.textContent = checkSpam;
div2.appendChild(p2);

let p3 = document.createElement('p');
p3.textContent = commentDate;
div2.appendChild(p3);

//Очищаем форму после отправки
name.value = '';
avatar.value = '';
comment.value = '';
noCheckbox.checked = false;
yesCheckbox.checked = false;
document.querySelector('#name').classList.remove('hide');
document.querySelector('#label-name').classList.remove('hide');
}
}
//слушатель события на кнопку
button.addEventListener('click', function(){
    capFirstLetterInNameInput();
    makeComment();
    getRandomIndex();
});


