import React from "react";
import asus from '../assets/asus.jpg'
import hp from '../assets/hp.jpeg'
import mac from '../assets/mac.jpg'
import '../App.css'

function laptops(){
    return(
        <main id="mobiles-main">
            <div className="all-items">
            <div className="prod-container">
                            <img className="prod-card-img" src={asus} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>Asus TUF</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 64, 000</p>
                                <p>Ryzen 5 3550H processor</p>
                                <p>8GB RAM</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>



            <div className="prod-container">
                            <img className="prod-card-img" src={hp} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>HP Pavilion</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 51, 000</p>
                                <p>Intel i5 1135g7 processor</p>
                                {/* <p>3GB RAM</p> */}
                                <p>16GB RAM</p>
                            </div>

                            <div className="btns-cont">
                                <button className="btns-homepage">Cart</button>
                                <button className="btns-homepage">Buy Now</button>
                            </div>
            </div>


            <div className="prod-container">
                            <img className="prod-card-img" src={mac} alt="product image"></img>

                            <div className="prod-card-desc">
                            `   <h2>Macbook Pro</h2>
                                <p className="prod-card-price"><span>Price : &#x20B9;</span> 1, 08, 000</p>
                                <p>i7 1135K processor</p>
                                {/* <p>3GB RAM</p> */}
                                <p>16GB RAM</p>
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

export default laptops