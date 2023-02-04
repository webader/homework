//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let carsModel = ['bmv', 'porsche','mers', 'nissan','toyota','mazda','opel','reno','chevrolet','luaz'];
console.log(carsModel[0]);
console.log(carsModel[1]);
console.log(carsModel[2]);
console.log(carsModel[3]);
console.log(carsModel[4]);
console.log(carsModel[5]);
console.log(carsModel[6]);
console.log(carsModel[7]);
console.log(carsModel[8]);
console.log(carsModel[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Documentary',
    pageCount: '100',
    genre: 'non-fiction'
};
console.log(book1);

let book2 = {
    title: 'Story of red hat',
    pageCount: '200',
    genre: 'fiction'
};
console.log(book2);

let book3 = {
    title: 'Planet of the maps',
    pageCount: '400',
    genre: 'fantastic'
};
console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Documentary',
    pageCount: '100',
    genre: 'non-fiction',
    authors: [
        {name: 'Russel',
        age: 35}
    ]
};
console.log(book4);

let book5 = {
    title: 'Story of red hat',
    pageCount: '200',
    genre: 'fiction',
    authors: [
        {name: 'Eva',
        age: 25}
    ]
};
console.log(book5);

let book6 = {
    title: 'Planet of the maps',
    pageCount: '400',
    genre: 'fantastic',
    authors: [
        {name: 'Jenny',
        age: 27}
    ]
};
console.log(book6);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'olya', username: '18', password: '123q'},
    {name: 'katya', username: '19', password: '123qq'},
    {name: 'ira', username: '20', password: '323qq'},
    {name: 'igor', username: '21', password: '423qq'},
    {name: 'kirilo', username: '22', password: 'p23qq'},
    {name: 'andriy', username: '23', password: '623qq'},
    {name: 'sergiy', username: '24', password: 'y23qq'},
    {name: 'tolya', username: '23', password: '823qq'},
    {name: 'pasha', username: '22', password: '923qq'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);

//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1010;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Не вірно')
// }
//
// if (x === 1) {
//     console.log('Вірно')
// } else {
//     console.log('Не вірно')
// }
//
// if (x === 0) {
//     console.log('Вірно')
// } else {
//     console.log('Не вірно')
// }
//
// if (x === (-3)) {
//     console.log('Вірно')
// } else {
//     console.log('Не вірно')
// }

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число

let time = 46;
if (time <= 15) {
    console.log ('1 чверть часа')
} else if ((time <=30) && (time > 15)) {
    console.log ('2 чверть часа')
} else if ((time <=45) && (time > 30)) {
    console.log ('3 чверть часа')
} else {
    console.log ('4 чверть часа')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;
if (day <= 10) {
    console.log ('1 декада місяця')
} else if ((day <=20) && (day >= 11)) {
    console.log ('2 декада місяця')
} else if ((day <=31) && (day >= 21)) {
    console.log ('3 декада місяця')
} else {
    console.log ('помилка ввода дати місяця')
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let weekOfTheDay = prompt('Put your number week')
//
// switch (weekOfTheDay) {
//     case '1':
//         console.log('Monday')
//     break;
//     case '2':
//         console.log('Tuesday')
//         break;
//     case '3':
//         console.log('Wednesday')
//         break;
//     case '4':
//         console.log('Thursday')
//         break;
//     case '5':
//         console.log('Friday')
//         break;
//     case '6':
//         console.log('Saturday')
//         break;
//     case '7':
//         console.log('Su4nday')
//         break;
//     default:
//         console.log('Put correct number day of the week')
// }

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.

// let firstInteger = +prompt('Введіть перше число');
// let secondInteger = +prompt('Введіть друге число');
//
// if (firstInteger === 0 && secondInteger === 0) {
//     console.log('Ви ввели два раза 0, нулі однакові 0');
// } else if (firstInteger === secondInteger) {
//     console.log(`Ви ввели однакові числа, ваші числа ${firstInteger} та ${secondInteger}`);
// } else if (firstInteger > secondInteger) {
//     console.log(`Перше число більше ніж друге, більше число ${firstInteger}`);
// } else {
//     console.log(`Друге число більше ніж перше, більше число ${secondInteger}`);
// }

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 0;
x = x || 'default';
console.log(x);

//
// let newX = prompt('enter x');
//
// if (x == ''|| x == false || x == undefined || x == null || x == (NaN)) {
//     newX = "default";
//     console.log(newX);
// } else {
//     console.log(newX);
// }


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Супер')
}

