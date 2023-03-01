// // - створити блок,
// let div = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
//  div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'blue';
// div.style.width ='200px';
// div.style.height = '100px';
// // - додати цей блок в body.
// document.body.appendChild(div);
// // - клонувати його повністю, та додати клон в body.
// let divCopy = div.cloneNode(true);
// document.body.appendChild(divCopy);
//
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arr = ['Main','Products','About us','Contacts'];
// function arrToDiv (arr){
//  let ul = document.createElement('ul');
//  document.body.appendChild(ul);
//  for (const item of arr) {
//   let li = document.createElement('li');
//   li.innerText = item;
//   ul.appendChild(li);
//  }
// }
// arrToDiv(arr);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// //Завдання робити через цикли.
// function arrToDiv (coursesAndDurationArray){
//  for (const item of coursesAndDurationArray) {
//   let div = document.createElement('div');
//   document.body.appendChild(div);
//   let h2 = document.createElement('h2');
//   h2.innerText = item.title;
//   div.appendChild(h2);
//   let p = document.createElement('p');
//   p.style.fontSize = '25px'
//   p.innerText = item.monthDuration;
//   div.appendChild(p);
//  }
// }
// arrToDiv(coursesAndDurationArray);

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// function arrToDiv (coursesAndDurationArray){
//  for (const item of coursesAndDurationArray) {
//   let div = document.createElement('div');
//   div.classList.add('item');
//   document.body.appendChild(div);
//   let h1 = document.createElement('h1');
//   h1.innerText = item.title;
//   h1.classList.add('heading');
//   div.appendChild(h1);
//   let p = document.createElement('p');
//   p.classList.add('description');
//   p.style.fontSize = '25px'
//   p.innerText = item.monthDuration;
//   div.appendChild(p);
//  }
// }
// arrToDiv(coursesAndDurationArray);

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//  {
//   name: 'Bart',
//   surname: 'Simpson',
//   age: 10,
//   info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//   photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//  },
//  {
//   name: 'Homer',
//   surname: 'Simpson',
//   age: 40,
//   info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//   photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//  },
//  {
//   name: 'Marge',
//   surname: 'Simpson',
//   age: 38,
//   info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//   photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//  },
//  {
//   name: 'Lisa',
//   surname: 'Simpson',
//   age: 9,
//   info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//   photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//  },
//  {
//   name: 'Maggie',
//   surname: 'Simpson',
//   age: 1,
//   info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//   photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//  },
// ];
// function arrToDiv (simpsons){
//  for (const item of simpsons) {
//   let div = document.createElement('div');
//   div.classList.add('item');
//   document.body.appendChild(div);
//
//   let h3 = document.createElement('h3');
//   h3.innerText = item['name'];
//   h3.classList.add('name');
//   div.appendChild(h3);
//
//   let h4 = document.createElement('h4');
//   h4.classList.add('surname');
//   h4.style.fontSize = '25px'
//   h4.innerText = item['surname'];
//   div.appendChild(h4);
//
//   let h5 = document.createElement('h5');
//   h5.classList.add('age');
//   h5.style.fontSize = '25px'
//   h5.innerText = item['age'];
//   div.appendChild(h5);
//
//   let p = document.createElement('p');
//   p.classList.add('info');
//   p.style.fontSize = '14px'
//   p.innerText = item['info'];
//   div.appendChild(p);
//
//   let img = document.createElement('img');
//   img.classList.add('photo');
//   div.appendChild(img);
//   img.setAttribute('src', item['photo']);
//  }
// }
// arrToDiv(simpsons);

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// function arrToDiv (coursesArray){
//     for (const item of coursesArray) {
//         let div = document.createElement('div');
//         div.classList.add('item');
//         document.body.appendChild(div);
//
//         let h1 = document.createElement('h1');
//         h1.innerText = item.title;
//         h1.classList.add('heading');
//         div.appendChild(h1);
//
//         let p = document.createElement('p');
//         p.classList.add('monthDuration');
//         p.style.fontSize = '25px'
//         p.innerText = item.monthDuration;
//         div.appendChild(p);
//
//         let p2 = document.createElement('p');
//         p2.classList.add('hourDuration');
//         p2.style.fontSize = '25px';
//         p2.innerText = item.hourDuration;
//         div.appendChild(p2);
//         let ul = document.createElement('ul');
//         div.appendChild(ul);
//          for (const elem of item.modules) {
//              let li = document.createElement('li');
//              li.innerText = elem;
//              ul.appendChild(li);
//          }
//     }
// }
// arrToDiv(coursesArray);

// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let div = document.createElement('div');
div.setAttribute('id', 'text')
div.classList.add('onElement', 'offElement');

div.style.background = 'blue';
div.style.width ='200px';
div.style.height = '100px';
// - додати цей блок в body.
document.body.appendChild(div);

let button = document.createElement('button')
button.style.width ='50px';
button.style.height = '25px';
document.body.appendChild(button);
button.addEventListener('click', ()=> {
    div.style.display = 'none';
})


//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let br = document.createElement('br');
document.body.appendChild(br);
document.body.appendChild(br);
let input = document.createElement('input')
document.body.appendChild(input);



let button2 = document.createElement('button');
button2.style.width ='50px';
button2.style.height = '25px';
document.body.appendChild(button2);
button2.addEventListener('click', ()=> {

    let value = input.value;
    if (value >= 18) {
        alert('Дорослий')
    } else alert('Тобі нема 18')
})


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)