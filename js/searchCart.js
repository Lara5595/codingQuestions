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

    const addToCart = document.querySelectorAll(".add-to-cart-button")

    const cartSize = document.getElementById("cart-size");
    console.log(cartSize)
    let counter = 0;



    addToCart.forEach(button => {
        button.addEventListener('click', function () {
            counter++
            console.log(counter)
            cartSize.textContent = counter;
        })
    })

}

