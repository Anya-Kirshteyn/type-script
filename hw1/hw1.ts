// 2.1
//     let arr:any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "sd"];
// console.log(arr[1]);
//     console.log(arr[2]);
//     console.log(arr[3]);

// 2.2
// type Book={
//     title:string,
//     pageCount:number
//     genre:string
// }
// let book1:Book={title:'Bla', pageCount:300, genre:'horror'};
// let book2:Book={title:'Bla-Bla', pageCount:370, genre:'horror'};
// let book3:Book={title:'Bla-blah', pageCount:340, genre:'horror'};

// 2.3
// type Author={name:string,age:number}
// type Book1={
//     title:string,
//     pageCount:number,
//     genre:string,
//     authors: Author[]
// }
//
// let book1:Book1={title:'Bla', pageCount:'300', genre:'horror', authors:[{name:'Bla', age:45},{name:'Bla', age:47}]};
// let book2:Book1={title:'Bla-Bla', pageCount:'370', genre:'horror', authors:[{name:'Bla', age:45},{name:'Bla', age:47}]};
// let book3:Book1={title:'Bla-blah', pageCount:'340', genre:'horror', authors:[{name:'Bla', age:45},{name:'Bla', age:47}]};

// 2.4

// type User1={name:string, username:string,password:string}
// let users:User1[]=[
//     {name:'vasya', username:'dd',password:'222'},
//     {name:'fanya', username:'ss',password:'5520'},
//     {name:'xanya', username:'ss',password:'533'},
//     {name:'wanya', username:'ss',password:'5512'},
//     {name:'zanya', username:'ss',password:'552'},
//     {name:'canya', username:'ss',password:'567'},
//     {name:'qanya', username:'ss',password:'552'},
//     {name:'hanya', username:'ss',password:'567'},
//     {name:'janya', username:'ss',password:'543'},
//     {name:'banya', username:'ss',password:'533'},
// ]


// 2.5
//
//
// type Weektemp1={ morning:number,
//     afternoon:number,
//     evening:number}
//
// let monday:Weektemp1={
//     morning:+3,
//     afternoon:+3,
//     evening:+3,
// }
// let tuesday:Weektemp1={
//     morning:+32,
//     afternoon:+34,
//     evening:+3,
// }
// let wednesday:Weektemp1={
//     morning:+5,
//     afternoon:+5,
//     evening:+5,
// }
// let thursday:Weektemp1={
//     morning:+6,
//     afternoon:+6,
//     evening:+6,
// }
// let friday:Weektemp1={
//     morning:+7,
//     afternoon:+7,
//     evening:+7,
// }
// let saturday:Weektemp1={
//     morning:+8,
//     afternoon:+8,
//     evening:+8,
// }
// let sunday:Weektemp1={
//     morning:+9,
//     afternoon:+9,
//     evening:+9,
// }


// 2.6

// let strValue:string| null=prompt("Enter a number 1, 0, -3");
// if(strValue !== null){
//    let numValue = +strValue
//     if(numValue !== 0){console.log('true')}
//     else {console.log('false')}
// }

// 2.7

// let strtime:string|null=prompt("Enter time");
// if (strtime !== null) {
//     let time = +strtime
//
//     if (time >= 0 && time < 15) {
//         console.log("first");
//     } else if (time >= 15 && time < 30) {
//         console.log("second");
//     } else if (time >= 30 && time < 45) {
//         console.log("third");
//     } else if (time >= 45 && time < 60) {
//         console.log("fourth");
//     }
// }

// 2.8

//
// let strmonth:string|null=prompt("Enter today date");
// if (strmonth !== null) {
//     let month = +strmonth
//
//     if (month >= 1 && month <= 10) {
//         console.log("one-third")
//     } else if (month > 10 && month <= 20) {
//         console.log("two-thirds")
//     } else if (month > 20 && month <= 31) {
//         console.log("three-thirds")
//     }
// }


// 2.9

// let key : string | null=prompt("Enter number");
// if (key !== null) {
//    let  x:number = +key
//
//     switch (x) {
//
//         case 1:
//             console.log("1")
//             break;
//
//         case 2:
//             console.log("2")
//             break;
//
//
//         case 3:
//             console.log("3")
//             break;
//
//         case 4:
//             console.log("4")
//             break;
//
//         case 5:
//             console.log("5")
//             break;
//
//         case 6:
//             console.log("6")
//             break;
//
//         case 7:
//             console.log("7")
//             break;
//
//         default:
//             console.log("up to 7")
//
//     }
// }


// 2.10
// Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let b:number=0
// let aStr:string|null =prompt("Enter a number")
// if (aStr !==null) {
// let a:number = +aStr
//
//     if (a > b) {
//         console.log("a won")
//     } else if (a < b) {
//         console.log("b won")
//     } else if (a === b) {
//         console.log("peace")
//     }
// }

// 2.11
// <!--є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який,буде присвоювати змінній х значення "default"
//   якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//   тобто ті, які приводиться до false, а це 0 null undefined і тд).-->

// let x:string | number | null | undefined = 0;
// if(!x){
//     x="default"
//     console.log(x);
// }


// 2.12

// <!--За допомоги іф перевірити кожен його елемент на тривалість навчання.-->
// <!--У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".-->
// type Course={ title:string,monthDuration:number }
//     let coursesAndDurationArray:Course[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[1].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[2].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[3].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[4].monthDuration > 5){
//     console.log("super")}
// if (coursesAndDurationArray[5].monthDuration > 5){
//     console.log("super")}

// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
// ====================================================================================================================================
//
// --------------------hw3.3--------------------
//     За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i:number=0;
// while(i<20){
//     document.write('<h1> AAAAAAAAAAA</h1>');
//     i++;
// }
// / ---------------------hw3.4---------------------
//     - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i:number=0;
// while (i < 20) {
//     document.write(`<h1>sdfsdfsdfsdf ${i}</h1>`);
//     i++;
// }
// --------------------hw3.5-------------------------
//     - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for( let item of listOfItems){
//
//     document.write(` <li> ${item} </li> `);
//
//
// }
// document.write(`</ul>`);

// ------------------hw3.6-------------------
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// type Product={
//     title: string,
//         price:number,
//         image: string
// }
//
//     let products: Product= [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for(let product of products){
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image"/>
//         </div>
//     `)
//
//
// }
// / --------------------hw3.7------------------------
// //     за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
//
// type User={
//     name:string,
//     age: number,
//     status: boolean
// }
//     let users:User[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
//     hw 4.1

// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function upright(a:number,b:number){
//     return a*b;
// }
// створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(radius:number) {
//     return 3.14*radius*radius;
// }
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function  cylinder(radius:number, height:number) {
//     return 2*3.14*radius*(radius+height);
// }
// console.log(cylinder(10,15));
// створити функцію яка приймає масив та виводить кожен його елемент
// function printer<T>(arrays:T[]) {
//     for( let array of arrays ) {
//         console.log(array);
//     }
// }
// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function writeParagraph(text: string):void {
//     document.write(`
//         <p>
//         ${text}
//         </p>`
//     )
//
// }
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
// function triLi(textLi:string):void {
//     document.write(
//         `
//        <ul>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//
//        </ul>
//         `
//     )
// }
// triLi("sobaka")
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function somename(textLi:string, print:number):void {
//
//     document.write("<ul>")
//
// for( let i = 0; i < print; i++){
//
//     document.write(`<li>${textLi}</li>`)
// }
//
//     document.write("</ul>")
// }
// somename('gusi', 5);
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
//
// function createList(array:(string | number | boolean)[]):void{
//     document.write("<ul>")
//
//     for(let item of array){
//         document.write(`<li>${String(item)}</li>`)
//     }
//     document.write("</ul>")
//
// }
// createList([12, true, 'pompa',13, 31])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' +
// ' та виводить їх в документ. Для кожного об'єкту окремий блок.
// type User={
//     id:number,
//     name:string,
//     age:number
// }
// function usercount(users:User[]):void {
//     for (let user of users) {
//         document.write(
//             `
//         <div>
//         <p>${user.id}</p>
//         <p>${user.name}</p>
//         <p>${user.age}</p>
//        </div>
//         `)
//     }
// }
// const usersArray:User[] = [
//     { id: 1, name: "Анна", age: 25 },
//     { id: 2, name: "Иван", age: 30 },
//     { id: 3, name: "Олег", age: 22 }
// ];
// usercount(usersArray);
// // / - створити функцію яка повертає найменьше число з масиву
// function minValue(numbers:number[]):number{
//     let min=numbers[0];
//     for (let number of numbers){
//         if(number<min){min=number;}
//     }
//     return min;
// }
// console.log(minValue([80,2,3,4,5,6]));
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
// function sum(arrays:number[]):number {
//     let suma:number = 0;
//     for (let array of arrays) {
//         suma=suma+array;
//     }
//     return suma;
// }
// console.log(sum([1,2,10]));
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// function swap(arr:(number|string|boolean)[], index1:number, index2:number):(number|string|boolean)[]{
// let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// type CurVal={
//     currency:string,
//     value:number
// }
// function exchange(sumUAH:number,currencyValues:CurVal[],exchangeCurrency:string):number |string{
//     for(let cheker of currencyValues){
//         if(cheker.currency === exchangeCurrency){
//             return sumUAH/cheker.value;
//         }
//     }
//     return 'currency not found';
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
// ===========================================================================
// ============================================================================
//     =========================================================================
// ========================================================================
// hw 5.1
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const upright=(a:number, b:number):number => a*b;
// console.log(upright(11,22));
// 5.2
// створити функцію яка обчислює та повертає площу кола з радіусом r
// const circle=(radius:number):number=>Math.PI*radius*radius;
// 5.3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const cylinder=(radius:number, height:number):number=>2*3.14*radius*(radius+height)
// console.log(cylinder(10,15))
// 5.4
// // створити функцію яка приймає масив та виводить кожен його елемент
// const printer = (array:(string |number | boolean )[]):void => {
//     array.forEach(element => console.log(element));
// };
// printer([1, 22, 33, 42]);
// 5.5
// / створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//
// const writeParagraph=(text:string):void=>{
//
//     document.write(`
//         <p>
//         ${text}
//         </p>`
//     )
//
// }
// writeParagraph('Hello World!')
// 5.6
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
// const triLi=(textLi:string):void=>{document.write(
//     `
//          <ul>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        </ul>
//
//     `)
// }
// triLi("sobaka")
// 5.7
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//  const somename=(textLi:string, print:number):void=>{
//      document.write("<ul>")
//
//      for (let i = 0; i < print; i++) {
//          document.write(`<li>${textLi}</li>`);
//      }
//
//      document.write("</ul>")
//
//  }
// somename('gusi', 5);
// 5.8
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
// const createList=(array:(string|number|boolean)[]):void=>{
//     document.write("<ul>")
//     array.forEach(element => {
//         document.write(`<li>${String(element)}</li>`)
//     })
//
//     document.write("</ul>")
//
// }
// createList([12, true, 'pompa',13, 31])
// 5.9
// type User={
//     id:number,
//     name:string,
//     age:number
// }
// const usercount=(users:User[]):void=>{
//     users.forEach(user=>{
//         document.write(
//             `
//         <div>
//         <p>${user.id}</p>
//         <p>${user.name}</p>
//         <p>${user.age}</p>
//        </div>`)})
// }
//
// const usersArray:User[] = [
//     { id: 1, name: "Анна", age: 25 },
//     { id: 2, name: "Иван", age: 30 },
//     { id: 3, name: "Олег", age: 22 }
// ];
// usercount(usersArray);
// 5.10
// - створити функцію яка повертає найменьше число з масиву
// const minValue=(numbers:number[]): number=>{
//     let min=numbers[0];
//     numbers.forEach(number=>{
//         if(number<min){
//             min=number;
//         }
//     })
//     return min;
// }
// console.log(minValue([80,50,38,4,5,6]));
// 5.11
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
// const sum=(arrays:number[]):number=>{
//     let suma = 0;
//     arrays.forEach(array=>{
//         suma=suma+array;
//     })
//     return suma;
// }
// console.log(sum([1,2,10]));
// 5.12
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap=(arr:number[], index1:number, index2:number):number[]=>{
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
//
// }
// console.log(swap([11, 22, 33, 44], 0, 1));
// 5.13
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// type CurVal={
//     currency: string,
//     value: number
// }
// const exchange = (sumUAH:number, currencyValues:CurVal[], exchangeCurrency:string):'currency not found'|number => {
//     for (let cheker of currencyValues) {
//         if (cheker.currency === exchangeCurrency) {
//             return sumUAH / cheker.value;
//         }
//     }
//     return 'currency not found';
// };
//
// console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================

// hw6.1
