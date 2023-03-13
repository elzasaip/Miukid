/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/add_to_cart.js":
/*!***********************************!*\
  !*** ./src/module/add_to_cart.js ***!
  \***********************************/
/***/ ((module) => {

function add_to_cart(){
    // Добавление товара в корзину
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
}
module.exports = add_to_cart;

/***/ }),

/***/ "./src/module/count_product.js":
/*!*************************************!*\
  !*** ./src/module/count_product.js ***!
  \*************************************/
/***/ ((module) => {

function countProduct(){
    let count_product =document.getElementsByClassName('bag__item').length;
    document.getElementsByClassName('cart_count')[0].innerHTML= count_product;
}

module.exports = countProduct;

/***/ }),

/***/ "./src/module/delete_product.js":
/*!**************************************!*\
  !*** ./src/module/delete_product.js ***!
  \**************************************/
/***/ ((module) => {

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
module.exports = deleteProduct;

/***/ }),

/***/ "./src/module/get-list-product.js":
/*!****************************************!*\
  !*** ./src/module/get-list-product.js ***!
  \****************************************/
/***/ (() => {

"use strict";

    
      class cardProduct{
        constructor(tooltips,tooltipClass, img, title, originPrice, oldPrice, innerBlock){
          this.tooltips=tooltips;
          this.tooltipClass=tooltipClass;
          this.img=img;
          this.title=title;
          this.originPrice=originPrice;
          this.oldPrice=oldPrice;
          this.innerBlock=document.querySelector(innerBlock);
          this.rate =85;
          this.originPrice=this.convertToUSD(this.originPrice);
          this.oldPrice=this.convertToUSD(this.oldPrice); 
        }
  
  
        convertToUSD(price){
          const result = price / this.rate;
          return result.toFixed(2);
        }
  
        render(){
          const div=document.createElement("div");
          div.classList.add("product");
          div.innerHTML=`
                                <div class="img">
                                    <div class="tooltip ${this.tooltipClass}">
                                        <span>${this.tooltips}</span>
                                    </div>
                                    <img src=${this.img} alt="kurtka.jpeg">
                                    <div class="arrows">
                                        <span><i class="fas fa-arrows-alt"></i>Quick view</span>
                                    </div>
                                </div>
                                <div class="body_product">
                                    <a href="?search=#" class="title">${this.title}</a>
                                    <div class="block_reviews">
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="reviews">
                                            <span>6 review(s)</span>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="prod_price">${this.originPrice}</span>
                                        <del>$ ${this.oldPrice}</del>
                                    </div>
                                    <div class="btns hidden_btns">
                                        <div class="item_icon">
                                            <a class="icons add_cart" href="#">
                                                <i class="fa-solid fa-basket-shopping"></i>
                                            </a>
                                        </div>
                                        <div class="item_icon">
                                            <a class="icons" href="#">
                                                <i class="fa-solid fa-scale-balanced"></i>
                                            </a>
                                        </div>
                                        <div class="item_icon">
                                            <a class="icons" href="#">
                                                <i class="fa-solid fa-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `;
            this.innerBlock.append(div);
        }
      }

      const getProduct = async(url) =>{
        const result = await fetch(url);

        if (!result.ok){
          throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);
        }
        return await result.json();
      };
      
      getProduct("http://localhost:3000/products")
      .then(data =>{
        // console.log(data);
        data.forEach(({tooltips,tooltipClass, img, title,originPrice, oldPrice}) => {
          
          new cardProduct(
            tooltips,
            tooltipClass,
            img,
            title,
            originPrice,
            oldPrice,
            '.list_product'
          ).render();
        });
      });


/***/ }),

/***/ "./src/module/total_price.js":
/*!***********************************!*\
  !*** ./src/module/total_price.js ***!
  \***********************************/
/***/ ((module) => {

function getTotalPrice() {
    let summPrice = document.querySelectorAll(".info__price .prod_price");

    let total_price = 0;

    for (var i = 0; i < summPrice.length; i++) {
        total_price = total_price + (+summPrice[i].textContent);
    }

    document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
    document.querySelectorAll('.total_price .get_price')[0].innerHTML = `$ ${total_price}`; 
}
module.exports = getTotalPrice;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const countProduct = __webpack_require__(/*! ./module/count_product */ "./src/module/count_product.js");

(function(){
    const get_list_product = __webpack_require__(/*! ./module/get-list-product */ "./src/module/get-list-product.js"),
        add_to_cart = __webpack_require__(/*! ./module/add_to_cart */ "./src/module/add_to_cart.js"),
        count_product = __webpack_require__(/*! ./module/count_product */ "./src/module/count_product.js"),
        delete_product = __webpack_require__(/*! ./module/delete_product */ "./src/module/delete_product.js"),
        total_price = __webpack_require__(/*! ./module/total_price */ "./src/module/total_price.js");

        get_list_product();
        add_to_cart();
        count_product();
        delete_product();
        total_price();


}());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map