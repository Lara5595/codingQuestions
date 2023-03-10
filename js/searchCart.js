// function attachAddToCart() {
//
//     // this is for the add to cart button
//     const addItemsToCard = document.querySelectorAll(".add-to-cart-button");
//
//     // This is for the number of items
//     const cartSize = document.getElementById("cart-size");
//
//     let numsItemsInCart = 0;
//
//     addItemsToCard.forEach(button => {
//         button.addEventListener('click', function() {
//             numsItemsInCart++
//             cartSize.textContent = numsItemsInCart.toString();
//
//         });
//     });
//
//
//
// }


function  attachAddToCart() {


    const addItems = document.querySelectorAll(".add-to-cart-button");

    const cartSize = document.getElementById("cart-size")

    let counter = 0;

    addItems.forEach(button => {
        button.addEventListener('click', function () {
            counter++;
        cartSize.textContent = counter.toString();
        })
    })


}

