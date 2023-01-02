
// 33 Urok Добавление товара в корзину
let elements = document.getElementsByClassName("add_cart");

let myFunction = function(event){
    event.preventDefault();
    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll('.price > span');
    let delPrice = this.parentNode.parentNode.parentNode.querySelectorAll('.price > del');
    let image= this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img > img");

    let create_li= document.createElement('li');

    console.log(title[0].innerText);
    console.log(price[0].innerText);
    console.log(delPrice[0].innerText);
    console.log(image[0].src);

    create_li.innerHTML ='<div class="img">\
                            <img src="'+image[0].src+'">\
                        </div>\
                        <div class="body_product">\
                            <p class="title">'+title[0].innerText+'</p>\
                            <div class="price">\
                                <span>'+price[0].innerText+'</span>\
                                <del>'+delPrice[0].innerText+'</del>\
                            </div>\
                        </div>\
                        <div class="del_icon">\
                            <i class="fa-solid fa-trash-can"></i>\
                        </div>';

    let block_myCart = document.querySelector('.bag.dropdown_menu ul');
    block_myCart.appendChild(create_li);
    alert("Товар успешно добавлен в корзину.");
};

// event.preventDefault();  ----игнорировать "#"href
for (var i=0; i<elements.length; i++){
    elements[i].addEventListener('click', myFunction, false);
}

