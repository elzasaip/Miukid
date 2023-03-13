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