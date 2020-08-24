import React from 'react';

const Cart = (props) => {
    const cart = props.Cart

    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div>
            <h4>Order summary</h4>
            <p>Item Ordered:{cart.length}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;