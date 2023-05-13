import React from "react";
import styles from '../static/css/err404.css'

function Err404(){
    return(
        <div className="outer-cont">
            <div className="err-cont">
                <p id="s4" className="err-num">4</p>
                <p id="m0" className="err-num">0</p>
                <p id="l4" className="err-num">4</p>
            </div>
            <p id="text-nt-fnd">Page not found!</p>
            <a href="/">Return to homepage</a>
        </div>
    )
}

export default Err404;