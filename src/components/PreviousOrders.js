import React from 'react'
import { useEffect } from 'react'
import '../static/css/previousOrdes.css'
import macbook from '../assets/mac-mini-1.jpeg'
import iphone from '../assets/iphone12.jpg'
import logitech from '../assets/logitech-mouse-main.jpg'
import razer from '../assets/keyboard-main.jpg'
import ps5 from '../assets/ps5.jpg'

export default function PreviousOrders() {

  async function getOrders(){
    var all_orders = await fetch('/getorderdet/' + "Chandu")
    all_orders = await all_orders.json()

    for(let i=0;i<all_orders.length;i++){
      //create an element

      var outer_cont = document.getElementById('outer-cont-order')

      var cont = document.createElement('div');
      cont.className = 'single-order-cont'

      var innerCont = document.createElement('div')
      innerCont.className = 'order-det'

      var name = document.createElement('h3');
      name.id = 'prod_name';
      name.innerHTML = all_orders[i].productName

      var price = document.createElement('p')
      price.id = 'prod_price'
      price.innerHTML = "Price : &#x20B9; " + all_orders[i].price

      var dop = document.createElement('p')
      dop.id = 'prod_dop'
      dop.innerHTML = "Purchased on : " + all_orders[i].dateOfPurchase.slice(0, 10)

      var img = document.createElement('img')
      img.className = 'order-img'
      
      
      if(name.innerHTML === 'ps5'){
        console.log('ps5')
        img.src = ps5
      }
      else if(name.innerHTML === 'iphone12'){
        console.log('iphone12')
        img.src = iphone
      }
      else if(name.innerHTML === 'logitechG502X'){
        console.log('mouse')
        img.src = logitech
      }else{
        img.src = razer
      }

      innerCont.appendChild(name)
      innerCont.appendChild(price)
      innerCont.appendChild(dop)
      cont.append(innerCont)
      cont.append(img)
      outer_cont.appendChild(cont)
    }
    
  }

  return (
    <main id='all-order-main' onLoad={useEffect(()=>{getOrders()}, [])}>
    <h1>Your Previous Orders</h1>
      <div className='all-orders-cont' id='outer-cont-order'>
        {/* <div className='single-order-cont'>
            <div className='order-det'>
              <span>Name : </span><h3 id='prod_name'></h3>
              <span>Price : </span><p id='prod_price'></p>
              <span>Date of Purchase : </span><p id='prod_dop'></p>
            </div>

            <img className='order-img'></img>
        </div> */}
      </div>
    </main>
  )
}
