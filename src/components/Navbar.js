import React from "react";
import hamburger from '../assets/list.svg'
import cross from '../assets/x-circle.svg'
import SearchBar from "./SearchBar";
import cart from '../assets/cart.svg'
import personFill from '../assets/person-circle.svg'

function showNav(){
    var st = document.getElementById("");
    var items_lst = document.getElementById("nav-items");
    // console.log(items_lst.style.display);
    // items_lst.style.display = 'none';
}

function Navbar(){
    return(
        <div className="navbar">
            <h2>E-Commerce</h2>
            <ul className="nav-list">
                <div className="nav-items" id="nav-items">
                    <SearchBar></SearchBar>
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link"><img src={cart} alt="Cart"></img></a></li>
                    <li><a href="#" className="nav-link"><img src={personFill} alt="Profile Picture"></img></a></li>
                </div>

                <img src={hamburger} alt="list" onClick={showNav()} id="list-icon"></img>

            </ul>
        </div>
    )
}

export default Navbar;