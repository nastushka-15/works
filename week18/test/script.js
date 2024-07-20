let obj = {
    nameUser: 'Иван',
     ageUser: 30,
     workUser: 'google',
     emailUser: 'catEmail@gamil.com' ,
      phoneUser: '+7946138520'
    }
function createUser() {
   
    localStorage.setItem('objLocalUser', JSON.stringify(obj))
  };

  function  renderCardUser() {
    let obj=JSON.parse(localStorage.getItem('objLocalUser'));
  console.log(obj);
    document.querySelector(
      ".practicum17"
    ).innerHTML = `
    <h1>${obj.nameUser}<h2>
   <p>${obj.ageUser}<p>
   <p>${obj.workUser}<p>
   <p>${obj.emailUser}<p>
   <p>${obj.phoneUser}<p>`
  };
  createUser();
  renderCardUser();

  //23

  function addNewUserLocalStorage(){
    const myForm = document.getElementById('task23')////получаем форму по айди
    const arr = JSON.parse(localStorage.getItem('task23')) ///получаем данные из localStorage.
    const user = {} //объект, в который будем складывать данные из формы 
    const formData = new FormData(myForm) // получаем обьект формы
    for(let [name,value] of formData){
      if (value === "") {
        console.log("не все поля заполнены");
        return;//создаем условие, при котором цикл и форма должны останавливаться и в случае выполнение условия выводим сообщение в консоль.
          }
      user[name]=value//заполняем обьект данными из формы
    }
    arr.push(user)
    //добавляем в полученный массив новый обьект
    localStorage.setItem("task23", JSON.stringify(arr));//записываем в localStorage
  }
  addNewUserLocalStorage()