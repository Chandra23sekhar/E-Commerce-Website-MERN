import React from "react";
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import hamburger from '../assets/list.svg'
import cross from '../assets/x-circle.svg'
import SearchBar from "./SearchBar";
import cart from '../assets/cart.svg'
import personFill from '../assets/person-circle.svg'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";





function showNav(){
    var st = document.getElementById("");
    var items_lst = document.getElementById("nav-items");
    // console.log(items_lst.style.display);
    // items_lst.style.display = 'none';
}

// const loginFunc = () => {
//     // const [data, setData] = useState(null);
//     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null);

//     // useEffect(() => {
//     // fetch("http://localhost:3000/login", {mode:'cors'})
//     // .then((response) => console.log(response));
//     // }, []);
//     // console.log("need to login")

   

function Navbar(){

   


    return(
            <div className="navbar">
                <h2>E-Commerce</h2> 
                        <ul className="nav-list">
                        <div className="nav-items" id="nav-items">
                            <li> <SearchBar></SearchBar></li>
                            {/* <li><button onClick={loginWithPopup}>Login</button></li> */}
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/cart" className="nav-link"><img src={cart} alt="Cart"></img></Link></li>
                            <li><Link to="/settings" className="nav-link"><img src={personFill} alt="Profile Picture"></img></Link></li>
                        </div>
                        </ul>
                    <img src={hamburger} alt="list" onClick={showNav()} id="list-icon"></img>
            </div>
    )
}




export default Navbar;