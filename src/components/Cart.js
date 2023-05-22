import React from "react";
import styles from '../static/css/cart.css'
import macbook from '../assets/mac-sm-2.jpeg'
import samTv from '../assets/samsungtv.jpeg'
import { Link } from "react-router-dom";
import BuyNow from "./BuyNow";
import { useState, useEffect } from "react";

//get data from database onload


function Cart(){

    var cartItems = {};

    async function getCart(){
        cartItems = await fetch('/getcart')
        cartItems = await cartItems.json()

        //for every item in cart append a new cartItem child div

        var container = document.getElementById('cart-cont');

        if(cartItems[0].items.length == 0){
            document.getElementById('if-cart-empty').innerHTML = "Your cart is empty.";
        }else{
            for(let i=0;i<cartItems[0].items.length;i++){
                //update items details and add images for every item
                var card = document.createElement('div');
                card.className = 'cart-item-card';
                
                var itemDesc = document.createElement('p'); // paragraph for the description of the items
                itemDesc.className = 'item-desc-cart';
                itemDesc.innerHTML = cartItems[0].items[i];
                card.appendChild(itemDesc)
                container.appendChild(card)
            }
            
            
            console.log(cartItems[0].items);
        }
    }


    return(
        <main id="cart-main" onLoad={useEffect(() => {getCart();}, [])}>
            <h1>Cart</h1>

            

            <div className="cart-contents" id="cart-cont">
                <p id="if-cart-empty"></p>

                {/* create an item card dynamically for every item present in the users cart */}
                {/* <div className="cart-item-card">
                    <p className="item-desc-cart">Dummy Text</p>
                    <img src={macbook} alt="product image" className="cart-item-img"></img>
                </div>

                <div className="cart-item-card">
                    <p className="item-desc-cart">cart</p>
                    <img src={samTv} alt="product image" className="cart-item-img"></img>
                </div> */}

            </div>
            <button id="chk-out-btn"><Link to="/orderconfirmation">Checkout</Link></button>
        </main>
    )
}

export default Cart;