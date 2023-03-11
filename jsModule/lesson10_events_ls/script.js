//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// const body = document.createElement('body');
// const form = document.createElement('form');
// const inputName = document.createElement('input');
// const inputSurname = document.createElement('input');
// const inputAge = document.createElement('input');
// const button = document.createElement('button');
//
// document.body.appendChild(form);
// inputName.placeholder = 'Enter your name';
// form.appendChild(inputName);
// inputSurname.placeholder = 'Enter your surname';
// form.appendChild(inputSurname);
// inputAge.placeholder = 'Enter your age';
// form.appendChild(inputAge);
// document.body.appendChild(button);
// button.innerText = 'Send'
// const div = document.createElement('div');
// form.appendChild(div);
//
// //Зробив двома, один просто валує взяв а інший через обєкт юзер
// button.addEventListener('click', function (){
//     div.innerHTML = `
//         <p>your name is - ${inputName.value}</p>
//         <p>your surname is - ${inputSurname.value}</p>
//         <p>your age is - ${inputAge.value}</p>
//     `
// })
// button.addEventListener('click', function (){
//  let name = inputName.value;
//  let surname = inputSurname.value;
//  let age= inputAge.value;
//
//  let user = {
//      name: name,
//      surname: surname,
//      age: age
//  }
//  div.innerHTML = `
//      <p>your name is - ${user.name}</p>
//      <p>your surname is - ${user.surname}</p>
//      <p>your age is - ${user.age}</p>
//  `
// })

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1
// const body = document.createElement('body');
// const div = document.createElement('div');
// const cifra = document.createElement('p');
// div.classList.add('task2');
// document.body.appendChild(div);
// div.appendChild(cifra);
// cifra.innerText=1;
// let cifraNew = 0;
// if (document.location.reload) {
//     //let cifraNew = 1;
//     cifraNew = localStorage.getItem('cifra')
//     localStorage.setItem('cifra', ++cifraNew);
// }


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.

let sessions = []
body.onload = function (e) {
    let time = new Date();
    let session = {
        year: time.getFullYear(),
        month: time.getMonth(),
        day: time.getDay(),
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
    sessions.push(session);
    console.log(sessions);
    let addItem = localStorage.getItem('sessions')
    if (!addItem) {
        localStorage.setItem('sessions', JSON.stringify(session))
        console.log('there')
    } else {
        localStorage.getItem('sessions', JSON.stringify(session))
        localStorage.setItem('sessions', JSON.stringify(session))
    }

}


// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)