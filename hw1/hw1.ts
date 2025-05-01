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
type Course={ title:string,monthDuration:number }
    let coursesAndDurationArray:Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("super")}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("super")}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("super")}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("super")}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("super")}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("super")}










