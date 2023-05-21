
import React from "react";
import leftArr from '../assets/arrow-left-circle-fill.svg'
import rightArr from '../assets/arrow-right-circle-fill.svg'
import hpLaps from '../assets/hpLaps.jpg'
import '../App.css'
import ps5 from '../assets/ps5.jpg'
import iphone12 from '../assets/iphone12.jpg'
import logiMouse from '../assets/logitech-mouse.jpg_large'
import keyboard from '../assets/keyboard-main.jpg'
import close from '../assets/close.png'
import success from '../assets/success.png'

var msg = "";

function HomePage(){


//function to update the cart and display the status message
const updateCart = async (item) => {
    //call fetch and put the data into the cart
   
	var all_res = {}
    var update_message = "";
	all_res = await fetch('/updatecart/' + "chan45645664564du", {
        method : 'PUT'
    })
	all_res = await all_res.json()

	if(!all_res.acknowledged){
        update_message = "Oops!! Cart could not be updated please try later."

        document.getElementById('popup_img').src = close
        document.getElementById("cartPopup").style.display = 'block';
        document.getElementById("cartPopup").style.borderColor = 'red';
        document.getElementById("msg").innerHTML = "Oops!! Your cart could not be updated."
        console.log("cart could not be updated" + all_res.ackowledged)
    }else{

        document.getElementById('popup_img').src = success
        document.getElementById("cartPopup").style.display = 'block';
        document.getElementById("cartPopup").style.borderColor = 'green';
        document.getElementById("msg").innerHTML = "Your cart has been updated successfully!"
        update_message = "Cart has been updated"
        console.log("Your cart has been updated")
    }
}



    const closePopup = () =>{
        document.getElementById("cartPopup").style.display = "none";
    }

    return(
        <main id="homePage-main">
            <div className="homepage-trending-products" id="chBg">
                <h2>Trending</h2>
            </div>

            
        
        <div className="othProd">
            <div className="prod-container">
                            <img className="prod-card-img" src={ps5} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>PS5</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 39, 000</p>
                                <p>feat - 1</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage" onClick={updateCart} name="ps5" value="ps5">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>

            <div className="prod-container">
                            <img className="prod-card-img" src={iphone12} alt="product image"></img>

                            <div className="prod-card-desc">
                            <h2>Iphone 12</h2>
                            <p className="prod-card-price"><span>Price : &#x20B9;</span> 55, 999</p>
                           
                                <p>
                                    feat - 1
                                    feat - 2
                                    feat - 3
                                </p>
                            </div>

                            <div className="btns-cont">
                            
                                <button className="btns-homepage" name="iphone12" value="iphone12">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>



            <div className="prod-container">
                            <img className="prod-card-img" src={logiMouse} alt="product image"></img>

                            <div className="prod-card-desc">
                            <h2>Logitech G502 X</h2>
                            <p className="prod-card-price"><span>Price : &#x20B9;</span> 5, 300</p>
                                <p>
                                    feat - 1
                                    feat - 2
                                    feat - 3
                                </p>
                            </div>

                            <div className="btns-cont">
                            
                                <button className="btns-homepage" name="mouse" value="logitechG502X">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>


            <div className="prod-container">
                            <img className="prod-card-img" src={keyboard} alt="product image"></img>

                            <div className="prod-card-desc">
                            <h2>Razer Hunstman mini</h2>
                            <p className="prod-card-price"><span>Price : &#x20B9;</span> 9, 999</p>
                                <p>
                                    feat - 1
                                    feat - 2
                                    feat - 3
                                </p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage" name="keyboard" value="RazerHuntsmanMini">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>
        </div>


        <div className="cart-popup" id="cartPopup">
            <button onClick={closePopup}>x</button>
            <img src="" alt="status" id="popup_img"></img>
            <p id="msg"></p>
        </div>


        </main>
    )
}

export default HomePage;