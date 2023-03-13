function countProduct(){
    let count_product =document.getElementsByClassName('bag__item').length;
    document.getElementsByClassName('cart_count')[0].innerHTML= count_product;
}

module.exports = countProduct;