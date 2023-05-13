import React from 'react';
import styles from '../static/css/orderConfirmation.css'

function OrderConfirmation(){
    return(
        <main id='odr-con-main'>
            <h1>Order Confirmation</h1>

            <div className='odr-con-outer-cont'>

                <div className='odr-con-usr-det'>

                    <div className='odr-con-del-det'>
                        {/* contains delivery details like
                        name of customer
                        address */}
                    </div>

                    <p className='odr-con-del-date'>
                        {/* contains information about delivery details like date and type */}
                    </p>

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
                            Cash on Delivery
                        </div>
                    </div>

                </div>


                <div className='odr-con-odr-det'>
                    <p className='odr-con-xyz'>Order Summary</p>
                    <div className='odr-con-odr-sum'>
                        {/* contains item name, qty, price */}
                        {/* add new row for every item or from cart */}
                        <table className='odr-con-table'>
                            
                            <tr className='odr-con-row1'>
                                <td>Item</td>
                                <td>Qty</td>
                                <td>Price</td>
                            </tr>

                            <tr>
                                <td><hr className='odr-con-sep'></hr></td>
                                <td><hr className='odr-con-sep'></hr></td>
                                <td><hr className='odr-con-sep'></hr></td>
                            </tr>

                            <tr>
                                <td>Macbook Pro</td>
                                <td>1</td>
                                <td>1, 08, 000</td>
                            </tr>
                        </table>
                    </div>
                    
                    <hr className='odr-con-sep'></hr>

                    <div className='odr-con-price-det'>
                        {/* contains the break up of final billing amount */}
                        <p className='odr-con-xyz'>Order Total</p>
                        <hr className='odr-con-sep'></hr>

                        {/* Display diff type of costs */}

                    </div>
                </div>
            </div>

        </main>
    );
}

export default OrderConfirmation;