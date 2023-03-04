
// 57 Urok Добавление товара в корзину
let myFunction = function(ttl, prc, delPrc, img){
    let title = ttl;
    let price = prc;
    let delPrice = delPrc;
    let image= img;

    let create_li= document.createElement('li');
    create_li.classList.add("bag__item");

    create_li.innerHTML ='<div class="bag__img">\
                            <img src="'+image[0].src+'">\
                        </div>\
                        <div class="bag__info">\
                            <p class="info__title">'+title[0].innerText+'</p>\
                            <div class="info__price">\
                                <span class="currency">$</span>\
                                <span class="prod_price">'+price[0].innerText+'</span>\
                                <del>'+delPrice[0].innerText+'</del>\
                            </div>\
                        </div>\
                        <div class="del_icon">\
                            <i class="fa-solid fa-trash-can"></i>\
                        </div>';

    let block_myCart = document.querySelector('.bag.dropdown_menu ul');
    block_myCart.appendChild(create_li);
    alert("Товар успешно добавлен в корзину.");

    // Удаление товара
	deleteProduct();

	//получить общее количество суммы товаров в корзине
    getTotalPrice();

    // получить общее количество товаров в корзине
    countProduct();

    fetch("http://localhost:3000/requests",{
        method: "POST",
        headers:{
            "Content-type": "Application/json"
        },
        body: JSON.stringify({
            "ttl":title[0].innerText,
            "image":image[0].src,
            "price":price[0].innerText,
            "oldPrc":delPrice[0].innerText
        })

    });
    
};

// event.preventDefault();  ----игнорировать "#"href
// for (var i=0; i<elements.length; i++){
//     elements[i].addEventListener('click', myFunction, false);
// }
document.querySelector(".list_product").addEventListener("click", event =>{
    console.log(event);
    if(event.target.parentNode.parentNode.classList.contains("product")) return false;
    let ttl = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title");
    let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.price .prod_price');
    let delPrc = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.price > del');
    let img= event.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img > img");
    myFunction(ttl, price, delPrc,img);
    
});

function deleteProduct(){
    let click_trash = document.querySelectorAll(".del_icon");

    for (var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', delFromCart, false);
    }

    function delFromCart(event){
        event.preventDefault();
        this.parentNode.remove();

        getTotalPrice();
        countProduct();
    }
}


function getTotalPrice() {
    let summPrice = document.querySelectorAll(".info__price .prod_price");

    let total_price = 0;

    for (var i = 0; i < summPrice.length; i++) {
        total_price = total_price + (+summPrice[i].textContent);
    }

    document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
    document.querySelectorAll('.total_price .get_price')[0].innerHTML = `$ ${total_price}`;
    
    
}
function countProduct(){
    let count_product =document.getElementsByClassName('bag__item').length;
    document.getElementsByClassName('cart_count')[0].innerHTML= count_product;
}

const tabs={
    list_tabs:[
        "Лидеры продаж",
        "Новинки",
        "Распродажа"
    ]
};

let create_ul = document.createElement('ul');

tabs.list_tabs.forEach((item, i) => {
    create_ul.innerHTML += `<li>${item}</li>`;
});

document.querySelector('.insert_listing').innerHTML +=create_ul.outerHTML;

// console.log(create_ul);