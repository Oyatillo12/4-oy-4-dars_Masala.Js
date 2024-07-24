// let num1 = prompt("birirnchi sonni kiriting") - 0
// let action = prompt("Action (+ - / *)")
// let num2 = prompt("Ikkinchi sonni kiriting") - 0


// switch(action){
//     case "+": 
//     console.log(num1 + num2);
//     break;
//     case "-": 
//     console.log(num1 + num2);
//     break;
//     case "*": 
//     console.log(num1 + num2);
//     break;
//     case "/": 
//     console.log(num1 + num2);
//     break;
//     default:
//     console.log("Togri amal yozing");
// }

// let enterName = prompt("Ism Kiriting")
// let namesArr = ["Oyatillo", "Mohirjon", "Ikromjon", "Mardonbek"];
// let notfound = 0

// for(let i = 0; i < namesArr.length; i++){
//     switch(enterName.toLowerCase()){
//         case namesArr[i].toLowerCase():
//             console.log("bunday ism bor");
//             break;
//         default:
//             notfound++
//     }
// }
// console.log(enterName == namesArr.length ? "SIz kiritgan ism yoq" : "");


// const list = [
//     {
//         id:1,
//         name:"Oyatillo",
//         age: 19
//     }, 
//     {
//         id:2,
//         name:"Mohirjon",
//         age: 20
//     }, 
//     {
//         id:3,
//         name:"Mardonbek",
//         age: 21
//     }
    
// ]  

// let maxAge = list[0].age;


// for(let value of list){
// if( value.age > maxAge){
//     maxAge = value.age
// }

// }

// for(let listabc of list){
//     switch (listabc.age) {
//         case maxAge:
//            console.log(listabc); 
//             break;
        
//     }

// }



// 1 Task


// let num = prompt("uch honali son kiriting !") -0;

// let birlik = num % 10;
// let ikkilik = parseInt((num % 100) / 10);
// let uchlik = parseInt(num / 100)
// console.log(birlik);
// console.log(ikkilik);
// console.log(uchlik);
// console.log( " Shuncha katta: " + (birlik + uchlik) / ikkilik);



//  2 task

// let a = prompt("Sonni kirirting") - 0;
// let yigindi = 0

// for(let i = 1; i <= a; i++){
//     if(a % i === 0){
//         console.log("Boluvchilar soni: " + i);
//         yigindi += i
//     }
// }
// console.log("Boluvchilarning yigindisi: " + yigindi);



// 3 Task

// let arr = [true, "Salom", 23, undefined];

// for(let i = 0; i < arr.length ; i++){
//     if(typeof arr[i] == "string"){
//         arr[i] = null
//         console.log(arr[i]);
//     }
// }
// console.log(arr);

//  4 Task

// let arr = [2,3,4,52,2,3,4,53,2,23,43,2];

// let maxValue = arr[0];

// for(let arrMax of arr){
//     if(arrMax > maxValue){
//         maxValue = arrMax
//     }
// }
// console.log(arr);
// console.log("Eng katta qiymati: " + maxValue);

// 5 Task

// let arr = [54, 32, 76, 12, 22];

// let yigindi = 0

// for(let i of arr){
//     yigindi += i
// }
// console.log("Array qiymatlari : " + arr);
// console.log("Ushbu arrayning yigindisi: " + yigindi);


// 7 Task

// let arr = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 1; i < arr.length; i++){
//     if( arr[i] % 2 == 0){
//         arr[i] = 0
//     }
// }
// console.log(arr);


// 8 task

// let num1 = prompt("birirnchi sonni kiriting") - 0
// let action = prompt("Action (+ - /  *)")
// let num2 = prompt("Ikkinchi sonni kiriting") - 0

// switch(action){
//     case "+": 
//         console.log(num1 + num2);
//             break;
//     case "-": 
//         console.log(num1 - num2);
//             break;
//     case "*": 
//         console.log(num1 * num2);
//             break;
//     case "/": 
//         console.log(num1 / num2);
//             break;
//     default:
//     console.log("Togri amal yozing !");
// }



//  9 Task

// let enterName = prompt("Ism kiriting !");

// let arrNames = ["Nuriddin", "Shahboz", "Adham", "Suhrob"];
// let notFound = 0;

// for(let i = 0; i < arrNames.length - 1; i++){
//     switch (enterName.toLowerCase()) {
//         case arrNames[i].toLowerCase():
//             console.log(arrNames[i] + " ismi bor");
//             break;
//     default:
//         notFound++
//     }
// }
// console.log(enterName == arrNames.length ? "Bunday ism Yoq" : "");


// 10 Task

// let enterName = prompt("Ism kiriting !");
// let notFound = 0; // switchga  tegishli

// const list = [
//     {
//         id:1,
//         age:20,
//         name:"Nuriddin",
//         gmail:"nuriddin@gmail.com"
//     },
//     {
//         id:2,
//         age:15,
//         name:"Komiljon",
//         gmail:"komiljon@gmail.com"
//     },
//     {
//         id:3,
//         age:25,
//         name:"Izzatbek",
//         gmail:"izzatbek@gmail.com"
//     }
// ]

// SWITCH bilan qiilingan holati
// for (let i = 0; i < list.length; i++) {
     
//     switch (enterName.toLowerCase()) {
//         case list[i].name.toLowerCase():
//             console.log(list[i]);
//             break;
    
//             default:
//                 notFound++
//     }
    
// }
// console.log(enterName == list.length ? "" : "Bunday ism Yoq");



// IF bilan qilingan holati
// for (let i = 0; i < list.length; i++){
//     if (list[i].name.toLowerCase() == enterName.toLowerCase()) {
//         console.log(list[i]);
        
//     } 
//     else{
//         console.log("Bunday ism topilmadi"); 
//         break;
//     }
// }


// 11 Task

// const list = [
//     {
//         id:1,
//         age:20,
//         name:"Nuriddin",
//         gmail:"nuriddin@gmail.com"
//     },
//     {
//         id:2,
//         age:15,
//         name:"Komiljon",
//         gmail:"komiljon@gmail.com"
//     },
//     {
//         id:3,
//         age:25,
//         name:"Izzatbek",
//         gmail:"izzatbek@gmail.com"
//     }
// ]
// let maxAge = list[0].age;

// for(let value of list){
//     if( value.age > maxAge){
//         maxAge = value.age
//     }
// }
// console.log("Agelarining eng kattasi: " + maxAge);

// 12 task


// let agesArr = 0

// const list = [
//     {
//         id:1,
//         age:20,
//         name:"Nuriddin",
//         gmail:"nuriddin@gmail.com",
//     },
//     {
//         id:2,
//         age:15,
//         name:"Komiljon",
//         gmail:"komiljon@gmail.com",
//     },
//     {
//         id:3,
//         age:25,
//         name:"Izzatbek",
//         gmail:"izzatbek@gmail.com",
//     }
// ]


// for(let i = 0 ; i <= list.length -1; i++){
//         agesArr += list[i].age
//     }
// console.log("Arrayning age yigindisi: " + agesArr);

//     console.log("Ortacha arifmetigi : " + agesArr / list.length);



// 13 Task

// let arr = [23,54,21,76,23,87];

// let firstarr = arr[0];
// let lastArr = arr[arr.length - 1];

// let addedArr = firstarr + lastArr;

// if(addedArr % 2 === 0){
//     arr.unshift(addedArr)
// }
// else{
//     arr.push(addedArr)
// }

//  console.log(arr);


//  14 Task


// let arr = [1,2,3,4,5,6,7,8,9];

// let even = []
// let odd = []


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         even.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
// }
// console.log("Arrayning qiymatlari: ", arr);
// console.log("Ushbu arrayning juft sonlari: ", even);
// console.log("Ushbu arrayning toq sonlari: ", odd);


//  15 Task

// let arr = [8,7,6,5,4];
// let reverseArr = []

// for(let value of arr){
//     reverseArr.unshift(value)
// }
// console.log("Asl holati: ", arr);
// console.log("Teskari holati: ", reverseArr);

// Qoshimcha User array sizeni kiritadi va array qiymatlarini va uning yigindisini toping;
// Uni juft va toqlarini ajratib arrayga solib chikaring


// let arrSize = prompt("Arrani sizeni kiriting !") - 0;
// let userArr = [] ;
// let arrTotal = 0;
// let even = [];
// let odd = [];
// let found = false;

// for(let i = 1; i <= arrSize; i++){
//     found = true;
//     let arrSum = prompt("Raqam kiriting !") - 0
//     userArr.push(arrSum);
//     arrTotal += arrSum ;
    
// }
// if(found){
//     console.log("Everithing Okey");
// }
// else{
//     console.log("Togri amal yozing");
// }
// for(let value of userArr){
//         if(value % 2 == 0){
//             even.push(value)
//         }
//          else{
//             odd.push(value)
//         }
//     }
// console.log("Siz kiritgan qiymatlar: " + userArr);
// console.log("Kiritgan qiymatlaringizni yigindisi: " + arrTotal);
// console.log("Kiritgan qiymatlaringizni juftlari: " + even);
// console.log("Kiritgan qiymatlaringizni toqlari: " + odd);

