
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
      object[key] = parseFloat(object[key]) + parseFloat(arrays[i][key]);
    };
  };
};

console.log(object);
