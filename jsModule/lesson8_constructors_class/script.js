//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
//let user1 = new User(1, 'vasya', 'shevchenko', 'shevchenko@gmail.com', '+380501234567')
// console.log(user1)


// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [];
// users.push(    new User(3, 'vasya', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(2, 'petya', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(1, 'kolya', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(4, 'olya', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(9, 'anna', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(6, 'ira', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(7, 'sergiy', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(8, 'vova', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(5, 'stepa', 'shevchenko', 'shevchenko@gmail.com', '+380501234567'),
//     new User(10, 'larisa', 'shevchenko', 'shevchenko@gmail.com', '+380501234567')
// )
//console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(value => {
//     //console.log(value);
//     //console.log(value.id);
//     if (value.id % 2 == 0) {
//         return value
//     }
// })
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => {
//     //console.log(a.id)
//     //console.log(b.id)
//     return a.id - b.id
// });
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor (id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//let client1 = new Client(1, 'vasya', 'shevchenko', 'shevchenko@gmail.com', 3805012730, ['orderProduct1', 'orderProduct2', 'orderProduct3'])
//console.log(client1)

// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
// clients.push(new Client(1, 'vasya', 'shevchenko', 'shevchenko@gmail.com', 3805012730, ['orderProduct1']),
//     new Client(10, 'katya', 'andchenko', 'andchenko@gmail.com', 3805012730, ['orderProduct28', 'orderProduct29']),
//     new Client(2, 'olia', 'farchenko', 'farchenko@gmail.com', 3805012730, ['orderProduct7', 'orderProduct8', 'orderProduct9']),
//     new Client(3, 'nina', 'borchenko', 'borchenko@gmail.com', 3805012730, ['orderProduct10', 'orderProduct11']),
//     new Client(4, 'viktoria', 'kravchenko', 'kravchenko@gmail.com', 3805012730, ['orderProduct13', 'orderProduct14', 'orderProduct15']),
//     new Client(5, 'taya', 'tkachenko', 'tkachenko@gmail.com', 3805012730, ['orderProduct16']),
//     new Client(6, 'larisa', 'enko', 'enko@gmail.com', 3805012730, ['orderProduct19', 'orderProduct20']),
//     new Client(7, 'irina', 'evchenko', 'evchenko@gmail.com', 3805012730, ['orderProduct22', 'orderProduct23', 'orderProduct24']),
//     new Client(8, 'tetyana', 'yarchenko', 'yarchenko@gmail.com', 3805012730, ['orderProduct25']),
//     new Client(9, 'olenka', 'horchenko', 'horchenko@gmail.com', 3805012730, ['orderProduct4', 'orderProduct5']));
//console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = clients.sort((a,b) => a.order.length-b.order.length)
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, manufacturer, releaseYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.releaseYear = releaseYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
};
let car1 = new Car ('911','porsche', 2020, 230,5 );
console.log(car1);

//додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(car1.maxSpeed)
// car1.drive = function () {
//    console.log(`їдемо зі швидкістю ${car1.maxSpeed} на годину`);
// }
// console.log(car1)
//car1.drive();

Car.prototype.drive = function (){
    console.log(`їдемо зі швидкістю ${Car.maxSpeed} на годину`);
}
console.log(Car);
let car2 = new Car ('turbo 911','porsche', 2021, 320,5 );
console.log(car2);
car2.drive()

// class Car {
//     constructor (model, manufacturer, releaseYear, maxSpeed, engineCapacity, drive, info, changeYear, addDriver) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.releaseYear = releaseYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive =  function drive() {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         };
//         this.info =  function info() {
//             console.log(`model - ${model}, manufacturer - ${manufacturer}, releaseYear - ${releaseYear}, maxSpeed - ${maxSpeed}, engineCapacity - ${engineCapacity}`);
//         };
//         this.changeYear =  function changeYear(newValue) {
//             car.releaseYear = newValue;
//             console.log(`Змінюємо дату випуску на нову ${newValue}`);
//         };
//         this.addDriver =  function addDriver(driver) {
//             console.log(`Додаємо обєкт драйвер ${newValue}`);
//             car.driver = driver;
//         };
//     }
// }
// let car1 = new Car('911','porsche', 2020, 320, 5, drive, info, changeYear(2023), addDriver({name: Shumaher, age: 35}) )
//
// console.log(car1);

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку