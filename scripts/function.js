let radius = Number(prompt('Введите радиус:', '')); 
function calculate(){
    let pi = 3.14;
    let circumference = 2*pi*radius;
    alert("длина окружности: " + circumference);
}
calculate();

function checkMin(a,b){
    if (a<b){
        return a;
    }
    else{
        return b;
    }
}
checkMin(34256,7640);

