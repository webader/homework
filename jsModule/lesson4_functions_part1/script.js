//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//s = a · b
//
// function calcAreaRectangle (a, b) {
//     let s;
//     return s = a * b
// };
// console.log(calcAreaRectangle(2, 4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//S = πr2, де π = 3,14,
//
// const PI = 3.14;
// function calcAreaCircle (r) {
//     let s;
//     return s = PI*(r*r)
// }
//
// console.log(calcAreaCircle(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S(біч.)= 2πRH, S(кола)= πR2, S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH
//
// const PI = 3.14;
//
// function calcAreaCylinder(r, h) {
//     let sSideCylinder = 2 * PI * r * h;
//     let sCircle = PI * (r * r);
//     let   sCommon = 2 * sCircle + sSideCylinder;
//     return sCommon
// }
//
// console.log(calcAreaCylinder(2, 3));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrayNumbers = [1, 2, 3, 4, 5];
//
// function outputArray(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// outputArray(arrayNumbers);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function writerTitle (text) {
//     document.write(
//         `
//         <div>
//             <h2>${text}</h2>
//         </div>
//         `
//     );
//
// }
// writerTitle('Hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function writerTitle (text) {
//     document.write(
//         `
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>
//         `
//     );
//
// }
// writerTitle('Hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function writerLi (text, num = 3) {
//     document.write(` <ul>`);
//     for (let i=0; i < num; i++){
//         document.write(` <li>${text}</li>`);
//     }
//     document.write(` </ul>`);
// }
//
// writerLi('hello',15);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,2,3,4,'Text',true,2]
// function writerItemOfArray (arr) {
//     document.write(` <ul>`);
//     for (const arrElement of arr) {
//         document.write(` <li>${arrElement}</li>`);
//     }
//     document.write(` </ul>`);
// }
//
// writerItemOfArray(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//  let arrayOfObjects = [
//      {id: 0, name: 'Kolya', age:20},
//      {id: 1, name: 'Polya', age:21},
//      {id: 2, name: 'Katya', age:22},
//      {id: 3, name: 'Kiril', age:23},
//  ]
// function writerItemOfArray (arr) {
//     for (const arrElement of arr) {
//         document.write(` <div>`);
//         document.write(`<p> ${arrElement['id']}</p>`);
//         document.write(`<p> ${arrElement['name']}</p>`);
//         document.write(`<p> ${arrElement['age']}</p>`);
//         document.write(` </div>`);
//     }
// }
//
// writerItemOfArray(arrayOfObjects);


// - створити функцію яка повертає найменьше число з масиву
// let min;
// let arrayNumber = [5,3,2,1,0]
//                 //[1,3,5,8,0,2];
// function returnMin(array) {
//     // min = arrayElement['0']
//    min = array['0'];
//     for (let arrayElement of array) {
//         // = arrayElement;
//         if (min < arrayElement) {
//            // console.log(min)
//             min = min;
//         } else {
//             min = arrayElement;
//         }
//     }
//     console.log(min)
// }
// returnMin(arrayNumber)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let arrayNumber = [5,3,2,1,0]
// function sum(arr) {
//
//     let result = 0;
//     for (const arrItem of arr) {
//         result = result + arrItem;
//     }
//     return console.log(result)
// }
//
// sum(arrayNumber);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let arrayNumber = [5,3,2,1,0]
// function swap(arr,index1,index2) {
//     let first = arr[`${index1}`]
//     let last = arr[`${index2}`]
//     arr[`${index1}`] = last;
//     arr[`${index2}`] = first;
//     console.log(arr)
// }
//
// swap([11,22,33,44],0,1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//
//
//     if (exchangeCurrency === 'USD') {
//         let result = sumUAH / +(currencyValues['0']['value'])
//         return console.log(result + ` ${exchangeCurrency}`)
//     } else {
//         let result = sumUAH / +(currencyValues['1']['value'])
//         return console.log(result + ` ${exchangeCurrency}`)
//     }
// }
//
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')