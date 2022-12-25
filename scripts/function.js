let radius = Number(prompt('Введите радиус:', '')); 
function calculate(){
    let pi = 3.14;
    let circumference = 2*pi*radius;
    alert("длина окружности: " + circumference);
}
calculate();