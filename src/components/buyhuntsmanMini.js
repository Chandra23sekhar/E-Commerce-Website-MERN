import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/css/buyNow.css'
import key_sm_1 from '../assets/keyboard-sm-1.jpg'
import key_sm_2 from '../assets/keyboard-sm-2.jpg'
// import mouse_sm_3 from '../assets/logitech-mouse.jpg_large'
import key_main from '../assets/keyboard-main.jpg'

const changeMainImg = (curImg) => {
    var mainImgPath = document.getElementById('buy-now-main-img')
    var tmpPath = mainImgPath.src
    //console.log("main" + tmpPath)
    
    var currImgPath = document.getElementById(curImg)
    //console.log("curr" + currImgPath)
    mainImgPath.src = currImgPath.src
    currImgPath.src = tmpPath
}




const buyhuntsmanMini = () => {
    return(
        <main id='buy-now-main'>
            <div className='buy-now-item'>
                <img src={key_main} alt='productImage' className='buy-now-prod-main-img' id="buy-now-main-img"></img>

                <div className='buy-now-item-mini-img-cont'>
                    <img src={key_sm_1} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-1' onClick={()=>changeMainImg('buy-now-prod-img-1')}></img>
                    <img src={key_sm_2} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-2' onClick={()=>changeMainImg('buy-now-prod-img-2')}></img>
                    {/* <img src={mouse_sm_3} alt="productImage-1" className='buy-now-product-mini-image' id='buy-now-prod-img-3' onClick={()=>changeMainImg('buy-now-prod-img-3')}></img> */}
                </div>
            </div>

            <div className='buy-now-item-dec'>
                <h2 className='product-title'>Razer Hunstman Mini</h2>
                <p className='product-price'> &#x20B9; 9, 999</p>
                <p className='product-features'>60% form factor</p>
                <p className='product-features'>Blue cherryMX switches</p>
                <h4 className='product-features'>Rating 5.0</h4>
                <div className='buy-now-buttons'>
                    <button className='buy-now-btn' id='buy-now-cart-btn'>Add to Cart</button>
                    <button className='buy-now-btn' id='buy-now-buy-now-btn'>Buy Now</button>
                    {/* <Link to="/buynow" className='buy-now-btn'>Buy Now</Link> */}
                </div>
            </div>
        </main>
    )
}

export default buyhuntsmanMini;