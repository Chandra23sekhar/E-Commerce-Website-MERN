import React from "react";
import crossMark from '../assets/x-lg.svg'

function OrderDeclined (){
    return(
        <div className="outer-cont">
            <div className="circle-red"><img src={crossMark} alt="cross-mark" id="crs-mrk"></img></div>
            <p  id="text-nt-fnd">OOPS!! Your Order could not be placed.</p>
            <a href="/">Return to homepage</a>
        </div>
    )
}

export default OrderDeclined;