const form = document.forms.loginForm;
const userNameInput = form.elements.username;
const emailInput = form.elements.email;
const age = form.elements.age;
const gender = form.elements.gender;
const agreeTermsCheckbox = form.elements.agreeTerms;
const professionSelected = form.elements.professionSelected;
const passwordInput = form.elements.password;
const submitBtn = form.elements.submitBtn;


const userNameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const termsError = document.getElementById('termsError');
const professionError = document.getElementById('professionError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(evt) {
evt.preventDefault();
let hasError = false;

// Очистка предыдущих сообщений об ошибках
userNameError.style.display = 'none';
emailError.style.display = 'none';
termsError.style.display = 'none';
professionError.style.display = 'none';
passwordError.style.display = 'none';

if (userNameInput.value === '') {
userNameError.textContent = 'Введите имя пользователя.';

userNameError.style.display = 'block';
hasError = true;
}
if (userNameInput.value.length <= 2 &&userNameInput.value.length>=1) {
    userNameError.textContent = 'Слишком короткое имя пользователя.';
    
    userNameError.style.display = 'block';
    hasError = true;
    }
if (userNameInput.value.length >= 20) {
    userNameError.textContent = 'Слишком длинное имя пользователя.';
    
    userNameError.style.display = 'block';
    hasError = true;
    }   

if (validateEmail(emailInput.value) === false) {
emailError.textContent = 'Введите корректный email.';
emailError.style.display = 'block';
hasError = true;
}

if (professionSelected.value === '') {
    professionError.textContent = 'Необходимо выбрать профессию.';
    professionError.style.display = 'block';
    hasError = true;
    }
if (validatePassword(passwordInput.value) === false) {
    passwordError.textContent = 'Введите корректный пароль. (не менее 8 символов длиной и содержать  одну заглавную букву, одну строчную букву и одну цифру)';
    passwordError.style.display = 'block';
    hasError = true;
    }


    
if (hasError === false) {
console.log('Форма успешно отправлена!');
console.log(userNameInput.value);
console.log(emailInput.value);
console.log(age.value);
console.log(gender.value);
console.log(professionSelected.value);
console.log(passwordInput.value);
console.log(agreeTermsCheckbox.value);

form.reset();
}
});

function validateEmail(email) {
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;
return regex.test(email);
}


function validatePassword(password) {
    let regex=/^[a-zA-Z0-9]{8,}$/;
    return regex.test(password);

}

agreeTermsCheckbox.addEventListener('change', function() {
    // Разблокируем или блокируем кнопку в зависимости от состояния чекбокса
    submitBtn.disabled = !agreeTermsCheckbox.checked;
    if (agreeTermsCheckbox.checked === false) {
        termsError.textContent = 'Необходимо согласие с условиями.';
        termsError.style.display = 'block';
        hasError = true;
        }
});

//дополнительные обработчики событий focus и blur для каждого поля
const inputFields = document.querySelectorAll('.input-field');

inputFields.forEach(function(input) {
input.addEventListener('focus', function () {
input.style.border = '1px solid #00ff00'; //Изменение границы при фокусе
});

input.addEventListener('blur', function () {
input.style.border = ''; //Восстановление стандартной границы после потери фокуса
});
});

