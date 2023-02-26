const rates = {};
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const select = document.querySelector("#select");
// const select1=document.querySelector("#select1");

fetch("current.json")
    .then(function(result){
        return result.json();
    }).then(function(data){
        rates.USD = data.current.USD;
        rates.RUB = data.current.RUB;
        rates.EUR = data.current.EUR;
        console.log(rates);
});

    input.oninput= convertValue;
    select.oninput= convertValue;

function convertValue(){
        result.value = (parseFloat(input.value) / rates[select.value].value).toFixed(2);
    }
