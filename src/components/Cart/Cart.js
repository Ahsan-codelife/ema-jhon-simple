import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     totalPrice = total + product.price;
    // }

    let shipping = 0;
    if (totalPrice>35) {
        shipping=0;
    }
    else if (totalPrice>15) {
        shipping = 4.99;
    }
    else if (totalPrice>0) {
        shipping = 12.99;
    }

    const tax = (totalPrice / 10).toFixed(2)

    return (
        <div>
            <h4>Order summary</h4>
            <p>Item Ordered:{cart.length}</p>
    <p>Product Price: {totalPrice}</p>
    <p><small>Shipping Cost: {shipping}</small></p>
    <p><small>Tax: {tax}</small></p>
            <p>Total Price: {totalPrice + shipping + tax}</p>
        </div>
    );
};

export default Cart;