const data = [
{
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
},
{
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
},
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
},
{
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
}
];
//создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport{
    constructor (type, price, brand){
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo(){
        return `Тип : ${this.type} брэнд: ${this.brand}`;
    }
    getPrice(){
        return `Цена: ${this.price} руб.`;
    }
}

//создать класс Car, который наследует от Transport. 
//Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
class Car extends Transport {
constructor(type, price, brand, doors) {
super(type, price, brand);
this.doors = doors;
}

getDoorsCount() {
return `Количество дверей: ${this.doors}`;
}
}

//создать класс Bike, который наследует от Transport. 
//Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends Transport {
constructor(type, price, brand, maxSpeed) {
super(type, price, brand);
this.maxSpeed = maxSpeed;
}

getMaxSpeed() {
return `Максимальная  скорость: ${this.maxSpeed} км/ч`;
}
}

const header = document.getElementById('header');
data.forEach((elements) => {
    if (elements.type === 'car') {
        let car = new Car(elements.type, elements.price, elements.brand, elements.doors);
        let info = document.createElement('p');
        info.textContent = car.getInfo();
        header.appendChild(info);
        let price = document.createElement('p');
        price.textContent = car.getPrice();
        info.appendChild(price);
        let doors = document.createElement('p');
        doors.textContent = car.getDoorsCount();
        price.appendChild(doors);

    } else {
        let bike = new Bike(elements.type, elements.price, elements.brand, elements.maxSpeed);
        let info = document.createElement('p');
        info.textContent = bike.getInfo();
        header.appendChild(info);
        let price = document.createElement('p');
        price.textContent = bike.getPrice();
        info.appendChild(price);
        let maxSpeed = document.createElement('p');
        maxSpeed.textContent = bike.getMaxSpeed();
        price.appendChild(maxSpeed);
    }
});
