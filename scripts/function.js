// // 30 DZ
// let radius = Number(prompt('Введите радиус:', '')); 
// function calculate(){
//     let pi = 3.14;
//     let circumference = 2*pi*radius;
//     alert("длина окружности: " + circumference);
// }
// calculate();

// function checkMin(a,b){
//     if (a<b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// checkMin(34256,7640);

// 31 DZ

// Сделайте функцию которая возводить в степень числа вводимые пользователем
let num = Number(prompt('Введите число:', '')); 
let degree = Number(prompt('Введите число степени:', ''));
function calcDegree(){
    let result = num**degree;
    alert("степень числа: " + result);
}
calcDegree();

// Сделайте функцию которая находит площадь круга, радиус вводить пользователь.
let radius = Number(prompt('Введите радиус:', '')); 
function calculate(){
    let pi = 3.14;
    let circleArea = pi*radius**2;
    alert("площадь круга: " + circleArea);
}
calculate();
 
// Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь. 

// function calcArea(a,b){
//     let S = a*b;
//     console.log("площадь прямоугольника: " + S);
// }
// calcArea(6,7);

let a = Number(prompt('Введите длину прямоугольника:', '')); 
let b = Number(prompt('Введите ширину прямоугольника:', ''));
function calcArea(){
    let S = a*b;
    alert("площадь прямоугольника: " + S);
}
calcArea();