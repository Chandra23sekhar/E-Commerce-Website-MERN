import React from "react";

import checkMark from '../assets/check2.svg'

function OrderPlacedSuccessfully (){
    return(
        <div className="outer-cont">
            <div className="circle"><img src={checkMark} alt="check-mark" id="chk-mrk"></img></div>
            <p  id="text-nt-fnd">Your Order has been placed successfully.</p>
            <a href="/">Return to homepage</a>
        </div>
    )
}

export default OrderPlacedSuccessfully;