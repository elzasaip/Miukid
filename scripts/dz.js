(function(){
    'use strict';

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
        // console.log([this.name, this.birthOfYear, this.birthPlace].join(','));
      };
  }
  let amantur= new createUser( "Amantur", 1997, "Bishkek");
  amantur.getInfo();
  
  let adilet = new createUser('Adilet', 1995, 'Tokmok');
  adilet.getInfo();
  
  // 45 DZ
  // Реализуйте класс Student (Студент), который будет наследовать от класса User, 
  // подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие 
  // свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), 
  // year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), 
  // с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь
  // метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
  // Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
  // Текущий год получите самостоятельно.
  
  class User{
    constructor(name,surname){
      this.name=name;
      this.surname=surname;
    }
    getFullName(){
      // console.log(this.name, this.surname);
    }
  }
  
  class Student extends User{
    constructor (name,surname,yearOfAdmission,currentYear){
      super(name,surname);
      this.yearOfAdmission = yearOfAdmission;
      this.currentYear=currentYear;
  
    }
    getCourse(){
      let grade = this.currentYear-this.yearOfAdmission;
      return grade;
    }
  }
  const student = new Student('Alisa','John',2020,2023);
  student.getFullName();
  // console.log("Учиться на "+ student.getCourse()+" курсе");


  // 49 DZ
  const inputSom = document.querySelector("#som");
  const inputUsd = document.querySelector("#usd");


  inputSom.addEventListener('input',() =>{

      const request = new XMLHttpRequest();
      request.open("GET", "current.json");
      //       request.open(method(GET/POST),url, login,password)
      request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
      request.send();

      request.addEventListener('load',()=> {
          
        if(request.status === 200){
          console.log(request.response);
           
          const currency= JSON.parse(request.response);

          const result = inputSom.value/currency.current.usd;
          
          inputUsd.value= (result).toFixed(2);
        
        }else{
          inputUsd.value = "Ошибка";
        }

      });

  });
}())