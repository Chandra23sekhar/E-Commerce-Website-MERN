import React from "react";
import macbook from '../assets/mac-sm-2.jpeg'

function TrackOrder(){
    return(
        <main id="trk-order-main">
            <h1>Track your Order</h1>

            {/* Create tracking status for each order */}
            <div className="track-order-card">

                <img className="trk-order-img" src={macbook} alt="Product Image"></img>


                <div className="trk-order-details">
                        <h2>Product Name</h2>

                        <div className="trk-prg-wrapper">
                            <div className="trk-status">Order Placed</div>
                            <div className="trk-cur-circle"></div>
                                <div id="trk-progress-line"></div>
                        </div> 
                </div>
            </div>
        </main>
    )
}

export default TrackOrder;