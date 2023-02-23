const rates = {};
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const select = document.querySelector("#select");
const select1=document.querySelector("#select1");

fetch('https://www.nbkr.kg/XML/daily.xml').then(res=> res.json())
.then(data => console.log(data));

// 
// fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function(result){
//     return result.json();
// }).then(function(data){
    
//     rates.KGS = data.Valute.KGS;
//     rates.USD = data.Valute.USD;
//     rates.RUB = data.Valute.RUB;
//     console.log(rates);
// });

// input.oninput= function(){
//     result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
// };

// input.oninput= function(){
//     if (select1 == select1.USD){
//         result.value = (parseFloat(input.value) * rates[select.value].Value).toFixed(2);
//     }
//     result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
// };

// select.oninput= convertValue;

// function convertValue(){
//     result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
// }


// getCurrencies();

// async function getCurrencies(){
//     const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
//     const data = await response.json();
//     const result =  await data;

//     console.log(result.Valute.KGS.Value);
// }

