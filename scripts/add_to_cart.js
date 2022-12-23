// ДЗ 28
// let title=document.getElementsByClassName("title");
// console.log(title[0].innerText);

// let price=document.getElementsByClassName("price");
// console.log(price[0].outerText);

// let image = document.getElementsByTagName("img");
// console.log (image[1].src);

// ДЗ 29
//        1)
// let title=document.querySelectorAll(".body_product > .title");
// for ( let text of title){
//     console.log(text.innerText);
// }

// let price=document.getElementsByClassName("price");
// for( var value of price){
//     console.log(value.outerText);
// }

// let image=document.querySelectorAll(".img > img");
// for(var picture of image){
//     console.log(picture.src);
// }

//         2)
//   add text
var elements = document.getElementsByClassName("add_cart");

var myFunction = function(){
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
    console.log(attribute[0].innerText);
};
for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', myFunction, false);
}

//    add price
var addPrice = function(){
    var attrib = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
    console.log(attrib[0].innerText);
};
for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', addPrice, false);
}

//    add Picture
var addImage = function(){
    var picture = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img > img");
    console.log(picture[0].src);
};
for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', addImage, false);
}