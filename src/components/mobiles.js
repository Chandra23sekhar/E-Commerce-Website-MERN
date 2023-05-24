import React from "react";
import oneplue from '../assets/oneplus.jpg'
import samsung from '../assets/samsung.jpg'
import iphone from '../assets/iphone14pro.jpg'
import mi11 from '../assets/mi.jpg'
import '../App.css'

function mobiles(){
    return(
        <main id="mobiles-main">
            <div className="all-items">
            <div className="prod-container">
                            <img className="prod-card-img" src={oneplue} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>One Plus 9</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 29, 000</p>
                                <p>6.5 inch screen</p>
                                <p>6GB RAM</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>



            <div className="prod-container">
                            <img className="prod-card-img" src={samsung} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>Samsung M13</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 15, 000</p>
                                <p>6.55 inch screen</p>
                                {/* <p>3GB RAM</p> */}
                                <p>64Mp Rear Camera</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>


            <div className="prod-container">
                            <img className="prod-card-img" src={iphone} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>iPhone 14 Pro</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 1, 29, 000</p>
                                <p>6 inch screen</p>
                                {/* <p>3GB RAM</p> */}
                                <p>6GB RAM</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>

            <div className="prod-container">
                            <img className="prod-card-img" src={mi11} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>Redmi Note 11</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 12, 000</p>
                                <p>6.75 inch screen</p>
                                {/* <p>3GB RAM</p> */}
                                <p>8GB RAM</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>
            </div>
        </main>
    )
}

export default mobiles