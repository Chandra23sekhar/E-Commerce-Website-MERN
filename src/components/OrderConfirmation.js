import React from 'react';
import styles from '../static/css/orderConfirmation.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation(){
    var cartItems = {}

    function calcCartTotal(){
        var all_prices = document.getElementsByClassName('item-prices')
        var sum_cart = 0;
        var gst = 0;
        
        var final_amt = 0;


        for(let i=0;i<all_prices.length;i++){
            sum_cart += parseFloat(all_prices[i].textContent)
        }
        
        gst = (0.18*sum_cart);
       
        final_amt = sum_cart + gst;

        document.getElementById("total-cart-amount").innerHTML = sum_cart;
        document.getElementById("total-gst-amount").innerHTML = gst;
        
        document.getElementById("total-payable-amount").innerHTML = final_amt;
    }

    async function getCartItems(){

        getUserAddr();//get user details first

        

        cartItems = await fetch('/getcart')
        cartItems = await cartItems.json()
        console.log(cartItems[0].items)

        for(let i=0;i<cartItems[0].items.length;i++){

            var price = 0;
            //fetch prices of all the items based on th name of the product
            var prices = await fetch('/getprices' + cartItems[0].items[i])
            prices = await prices.json()
            
            var tabRow = document.createElement('tr');
            var tabData = document.createElement('td');
            var priceData = document.createElement('td');
            priceData.className = 'item-prices';
            tabData.innerHTML = cartItems[0].items[i];
            priceData.innerHTML = prices[0].itemPrice;
            tabRow.appendChild(tabData);
            tabRow.appendChild(priceData);
            var table = document.getElementById('table-odr');
            table.appendChild(tabRow);
        }

        calcCartTotal();
        // for items in cart add the name and price of the item
    }

    async function getUserAddr(){
        var user = await fetch('/getuserdet/' + "Chandu")
        user = await user.json()

        console.log(user)

        document.getElementById("user-name").innerHTML = user[0].Name;
        document.getElementById("user-addr").innerHTML = user[0].addressLine1;
        document.getElementById('user-phno').innerHTML = user[0].mobNo;

    }

    async function addTransaction(){
        var new_transac = {}
        var flag = true
        //add a transaction for every item in cart
        for(let i=0;i<cartItems[0].items.length;i++){
            var prodName = cartItems[0].items[i]
            var prices = await fetch('/getprices' + cartItems[0].items[i])
            prices = await prices.json()
            var dateOfPurchase = new Date()
            var paymentMethod = "COD"
            var status = "Order Placed"
            var userName = "Chandu"
            var price = prices[0].itemPrice

            new_transac  = {
                "productName":prodName,
                "price":price,
                "userName":userName,
                "dateOfPurchase":dateOfPurchase,
                "paymentMethod":paymentMethod,
                "status":status
            }

            var trans_status = await fetch('/addtransaction/' + JSON.stringify(new_transac))
            var trans_status = await trans_status.json()


            if(!trans_status.Status === 'OK'){
                flag = false
            }
        }

        if(flag){
            //clear the cart of the given user
            
            var remove_item = await fetch('/removefromcart/' + 'Chandu', {method : 'DELETE'})
                // var remove_item = await trans_status.json()
            console.log(remove_item)
            
        }
    }

    return(
        <main id='odr-con-main' onLoad={useEffect(() => {getCartItems();}, [])}>
            <h1>Order Confirmation</h1>

            <div className='odr-con-outer-cont'>

                <div className='odr-con-usr-det'>

                    <div className='odr-con-del-det'>
                        {/* contains delivery details like
                        name of customer
                        address */}
                        <h3>Deliver to,</h3>
                        <p id='user-name'></p>
                        <p id='user-addr'></p>
                        <p id='user-phno'></p>
                    </div>

                    <div className='odr-con-del-date'>
                        {/* contains information about delivery details like date and type */}
                        <h3>Delivery Details</h3>
                        <p>Delivery type : Standard</p>
                        <p>Delivered in 2-3 working days</p>
                    </div>

                    <div className='odr-con-payment-type'>
                        {/* contains details of the various payment methods */}
                        <p>Payment Options</p>
                        <div className='odr-con-pay-cont'>
                            Debit / Credit Card
                        </div>

                        <div className='odr-con-pay-cont'>
                            UPI - GooglePay, Paytm, PhonePe
                        </div>

                        <div className='odr-con-pay-cont'>
                            <Link to='/orderplaced' onClick={() => addTransaction()}>Cash on delivery</Link>
                        </div>
                    </div>

                </div>


                <div className='odr-con-odr-det'>
                    <p className='odr-con-xyz'>Order Summary</p>
                    <div className='odr-con-odr-sum'>
                        {/* contains item name, qty, price */}
                        {/* add new row for every item or from cart */}
                        <table className='odr-con-table' id='table-odr'>
                            <tbody>
                                <tr className='odr-con-row1'>
                                    <td>Item</td>
                                    {/* <td>Qty</td> */}
                                    <td>Price</td>
                                </tr>

                                <tr>
                                    <td><hr className='odr-con-sep'></hr></td>
                                    <td><hr className='odr-con-sep'></hr></td>
                                    <td><hr className='odr-con-sep'></hr></td>
                                </tr>

                                {/* <tr>
                                    <td>Macbook Pro</td>
                                    <td>1</td>
                                    <td>1, 08, 000</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    
                    <hr className='odr-con-sep'></hr>

                    <div className='odr-con-price-det'>
                        {/* contains the break up of final billing amount */}
                        <p className='odr-con-xyz'>Order Total</p>
                        <hr className='odr-con-sep'></hr>
                        <p id='amount-info'>Order total : &#x20B9; <span id="total-cart-amount"></span></p>
                        <p id='amount-info'>GST (18%) : &#x20B9; <span id="total-gst-amount"></span></p>
                        
                        <p id='amount-info'>Amount to be paid : &#x20B9; <span id="total-payable-amount"></span></p>
                        {/* Display diff type of costs */}

                    </div>
                </div>
            </div>

        </main>
    );
}

export default OrderConfirmation;