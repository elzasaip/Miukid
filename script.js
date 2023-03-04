(function(){
    'use strict';
      // fetch("http://localhost:3000/posts")
      // .then(data => data.json())
      // .then(res  => console.log(res));

      // axios.get("http://localhost:3000/products")
      // .then(data  => console.log(data));

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

  
}());