import React from "react";
import macbook from '../assets/mac-sm-2.jpeg'
import samTv from '../assets/samsungtv.jpeg'


function Cart(){
    return(
        <main id="cart-main">
            <h1>Cart</h1>

            <div className="cart-contents">

                {/* create an item card dynamically for every item present in the users cart */}
                <div className="cart-item-card">
                    <p className="item-desc-cart">Dummy Text</p>
                    <img src={macbook} alt="product image" className="cart-item-img"></img>
                </div>

                <div className="cart-item-card">
                    <p className="item-desc-cart">Dummy Text</p>
                    <img src={samTv} alt="product image" className="cart-item-img"></img>
                </div>

                <button id="chk-out-btn">CHECKOUT</button>
            </div>

        </main>
    )
}

export default Cart;