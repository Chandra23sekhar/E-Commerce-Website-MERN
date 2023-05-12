import React from "react";
import hamburger from '../assets/list.svg'
import cross from '../assets/x-circle.svg'
import SearchBar from "./SearchBar";
import cart from '../assets/cart.svg'
import personFill from '../assets/person-circle.svg'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";


import HomePage from "./HomePage";
import Cart from "./Cart";
import PreSettings from "./PreSettings";


function showNav(){
    var st = document.getElementById("");
    var items_lst = document.getElementById("nav-items");
    // console.log(items_lst.style.display);
    // items_lst.style.display = 'none';
}

function Navbar(){
    return(
        <Router>
            <div className="navbar">
                <h2>E-Commerce</h2> 
                        
                        <ul className="nav-list">
                        <div className="nav-items" id="nav-items">
                        <SearchBar></SearchBar>
                        {/* <li><Link to="/login">Login</Link></li> //Implement after react routing */}
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/cart" className="nav-link"><img src={cart} alt="Cart"></img></Link></li>
                            <li><Link to="/settings" className="nav-link"><img src={personFill} alt="Profile Picture"></img></Link></li>

                            <Routes>
                                <Route exact path="/"  element={<HomePage />} />
                                <Route exact path="/cart" element={<Cart />} />
                                <Route excat path="/settings" element={<PreSettings />} />
                            </Routes>
                            

                        
                    </div>

                    <img src={hamburger} alt="list" onClick={showNav()} id="list-icon"></img>

                </ul>
                
            </div>
        </Router>
       
    )
}

export default Navbar;