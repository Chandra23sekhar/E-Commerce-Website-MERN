import React from 'react'
import { Link } from 'react-router-dom'
import macMain from '../assets/mac-sm-2.jpeg'
import macMini1 from '../assets/mac-mini-1.jpeg'
import macMini2 from '../assets/mac-mini-2.jpeg'
import macMini3 from '../assets/mac-mini-3.jpeg'
import styles from '../static/css/buyNow.css'


const changeMainImg = () => {
    console.log("hello") 
}

changeMainImg.bind(this, changeMainImg)


const BuyNow = () => {
    return(
        <main id='buy-now-main'>
            <div className='buy-now-item'>
                <img src={macMain} alt='productImage' className='buy-now-prod-main-img' id="buy-now-main-img"></img>

                <div className='buy-now-item-mini-img-cont'>
                    <img src={macMini1} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-1' ></img>
                    <img src={macMini2} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-2' ></img>
                    <img src={macMini3} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-3' ></img>
                </div>
            </div>

            <div className='buy-now-item-dec'>
                <h2 className='product-title'>Apple MacBook Pro 15.6inch</h2>
                <p className='product-price'>1, 08, 000</p>
                <p className='product-features'>Dummy text</p>
                <div className='buy-now-buttons'>
                    <button className='buy-now-btn' id='buy-now-cart-btn'>Add to Cart</button>
                    <button className='buy-now-btn' id='buy-now-buy-now-btn'>Buy Now</button>
                    {/* <Link to="/buynow" className='buy-now-btn'>Buy Now</Link> */}
                </div>
            </div>
        </main>
    )
}

export default BuyNow