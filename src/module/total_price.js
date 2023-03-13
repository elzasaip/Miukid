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