(function(){
  'use strict';

    // 46 Urok
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
    new cardProduct(
    'NEW',
    'bg_green',
    'images/body_img/kurtka.jpeg',
    'Blue Sweartshirt',
    1230,
    2500,
    '.list_product'
    ).render();

    new cardProduct(
    '-25%',
    'bg_orange',
    'images/body_img/Sweatshirt.jpeg',
    'Sweartshirt for girl',
    1500,
    2750,
    '.list_product'
    ).render();

    new cardProduct(
    '',
    '',
    'images/body_img/kurtka_for_girl.jpeg',
    'Pink Sweartshirt',
    2500,
    3125,
    '.list_product'
    ).render();

    new cardProduct(
    '',
    '',
    'images/body_img/backpack.jpeg',
    'Backpack with Animal',
    1400,
    1900,
    '.list_product'
    ).render();

    new cardProduct(
    'NEW',
    'bg_green',
    'images/body_img/pants.jpeg',
    'Winter Pants',
    1300,
    1750,
    '.list_product'
    ).render();




}());