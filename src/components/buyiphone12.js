import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/css/buyNow.css'
import ip_sm_1 from '../assets/iphone12-sm-1.jpeg'
import ip_sm_2 from '../assets/iphone-sm-2.jpg'
import ip_sm_3 from '../assets/iphone12.jpg'
import ip_main from '../assets/iphone12.png'

const changeMainImg = (curImg) => {
    var mainImgPath = document.getElementById('buy-now-main-img')
    var tmpPath = mainImgPath.src
    //console.log("main" + tmpPath)
    
    var currImgPath = document.getElementById(curImg)
    //console.log("curr" + currImgPath)
    mainImgPath.src = currImgPath.src
    currImgPath.src = tmpPath
}




const buyiphone12 = () => {
    return(
        <main id='buy-now-main'>
            <div className='buy-now-item'>
                <img src={ip_main} alt='productImage' className='buy-now-prod-main-img' id="buy-now-main-img"></img>

                <div className='buy-now-item-mini-img-cont'>
                    <img src={ip_sm_1} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-1' onClick={()=>changeMainImg('buy-now-prod-img-1')}></img>
                    <img src={ip_sm_2} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-2' onClick={()=>changeMainImg('buy-now-prod-img-2')}></img>
                    <img src={ip_sm_3} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-3' onClick={()=>changeMainImg('buy-now-prod-img-3')}></img>
                </div>
            </div>

            <div className='buy-now-item-dec'>
                <h2 className='product-title'>iPhone 12 Pro</h2>
                <p className='product-price'> &#x20B9; 55, 999</p>
                <p className='product-features'>6GB RAM</p>
                <p className='product-features'>6inch ultraHD display</p>
                <h4 className='product-features'>Rating 4.9</h4>
                <div className='buy-now-buttons'>
                    <button className='buy-now-btn' id='buy-now-cart-btn'>Add to Cart</button>
                    <button className='buy-now-btn' id='buy-now-buy-now-btn'>Buy Now</button>
                    {/* <Link to="/buynow" className='buy-now-btn'>Buy Now</Link> */}
                </div>
            </div>
        </main>
    )
}

export default buyiphone12;