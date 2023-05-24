import React from "react";
import '../static/css/cart.css'
import macbook from '../assets/mac-sm-2.jpeg'
import samTv from '../assets/samsungtv.jpeg'
import { Link } from "react-router-dom";
import BuyNow from "./BuyNow";
import { useState, useEffect } from "react";

//import all the images
import iphone from '../assets/iphone12.jpg'
import logitech from '../assets/logitech-mouse.jpg_large'
import razer from '../assets/keyboard-main.jpg'
import ps5 from '../assets/ps5.jpg'
import trashIcon from '../assets/trash-fill.svg'
//get data from database onload


// async function removeFromCart(item){
//     console.log("remove this from cart")
// }

function Cart(){

    var cartItems = {};
    

    async function getCart(){
        cartItems = await fetch('/getcart')
        cartItems = await cartItems.json()

        //for every item in cart append a new cartItem child div

        var container = document.getElementById('cart-cont');
        // console.log(cartItems[0].items.length)
        if(cartItems[0].items.length === 0){
            document.getElementById('if-cart-empty').innerHTML = "Your cart is empty.";
            document.getElementById('chk-out-btn').style.display = 'none';
        }else{
            for(let i=0;i<cartItems[0].items.length;i++){
                //update items details and add images for every item
                var name = cartItems[0].items[i]
                var card = document.createElement('div');
                card.className = 'cart-item-card';
                
                var itemDesc = document.createElement('h3'); // paragraph for the description of the items
                itemDesc.className = 'item-desc-cart';
                itemDesc.innerHTML = cartItems[0].items[i];

                var itemImg = document.createElement('img');
                itemImg.className = 'cart-item-img'
                if(name === 'ps5'){
                    console.log('ps5')
                    itemImg.src = ps5
                  }
                  else if(name === 'iphone12'){
                    console.log('iphone12')
                    itemImg.src = iphone
                  }
                  else if(name === 'logitechG502X'){
                    console.log('mouse')
                    itemImg.src = logitech
                  }else{
                    itemImg.src = razer
                  }

                // var delFromCart = document.createElement('img');
                // delFromCart.src = trashIcon 
                // delFromCart.className = 'del-from-cart-icon'
                // delFromCart.addEventListener("click", removeFromCart(), false)


                card.appendChild(itemDesc)
                // card.appendChild(delFromCart)
                card.appendChild(itemImg)
                
                container.appendChild(card)

                //add remove from cart option
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