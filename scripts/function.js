
// 36 DZ
let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};

let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
};

let object = {};

// Создаём цикл с массивом, в который вводим массивы, которые нужно сложить
for(var i = 0, arrays = [salary, bonus]; i < arrays.length; i++){
  for(key in arrays[i]){
    if(object[key] == undefined){
      object[key] = arrays[i][key];
    }else{
      object[key] = parseInt(object[key]) + parseInt(arrays[i][key]);
    };
  };
};

// console.log(object);

// 38 DZ
// написать функцию которая запрашивает пользователю ввести число, 
// функция должна проверять что ввел пользователь строку или тип число, 
// при этом не конвертируя данные который ввел пользователь. 
// если пользователь ввел тип чисто то преобразуйте это в шестнадцатеричный код, 
// восьмеричный и двоичный код, 
// если это не строка то на консоли выводится что это не строка.

function checkInput(){
    // let inputNum = prompt('введите число', '');
    // console.log(typeof (inputNum));
    if(typeof inputNum == 'string'){
        inputNum = Number(inputNum);
        // console.log(inputNum.toString(16), inputNum.toString(2), inputNum.toString(8));
    } else {
        // console.log("это не строка.");
    }
}
checkInput();


// 43 urok
// console.log(document.querySelector('.insert_listing').nextSibling);
for(let noneText of document.body.childNodes){
  if (noneText == '#text'){
    continue;
  }
  // console.log(noneText.nodeName);
}

// 44 DZ

function createUser(name, birthOfYear,birthPlace){
    this.name = name;
    this.birthOfYear = birthOfYear;
    this.birthPlace = birthPlace;
    this.getInfo= function(){
      console.log([this.name, this.birthOfYear, this.birthPlace].join(','));
    };
}
let amantur= new createUser( "Amantur", 1997, "Bishkek");
amantur.getInfo();

let adilet = new createUser('Adilet', 1995, 'Tokmok');
adilet.getInfo();