import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import hamburger from '../assets/list.svg'
import cross from '../assets/x-circle.svg'
import SearchBar from "./SearchBar";
import cart from '../assets/cart.svg'
import personFill from '../assets/person-circle.svg'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";


import HomePage from "./HomePage";
import Cart from "./Cart";
import PreSettings from "./PreSettings";
import UserDetailsSettings from "./UserDetailsSettings";
import PreviousOrders from "./PreviousOrders";
import TrackOrder from "./TrackOrder";
import Logout from "./Logout";
import Err404 from "./Err404";
import Login from "./Login";

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
        
        <Router>
            <div className="navbar">
                <h2>E-Commerce</h2> 
                        
                        <ul className="nav-list">
                        <div className="nav-items" id="nav-items">
                        <SearchBar></SearchBar>
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/cart" className="nav-link"><img src={cart} alt="Cart"></img></Link></li>
                            <li><Link to="/settings" className="nav-link"><img src={personFill} alt="Profile Picture"></img></Link></li>

                            <Routes>
                            {/* const navigate = useNavigate();
                            navigate("/login"); */}
                                
                                <Route exact path="/"  element={<HomePage />} />
                                <Route exact path="/cart" element={<Cart />} />
                                <Route excat path="/settings" element={<PreSettings />} />
                                <Route exact path='/userdetails' element={<UserDetailsSettings />}></Route>
                                <Route exact path='/previousorders' element={<PreviousOrders />}></Route>
                                <Route exact path='/trackyourorder' Component={TrackOrder}></Route>
                                <Route path="*" element={<Err404 />} />
                                <Route exact path='/logout' element={<Logout />}></Route>
                            </Routes>
                            

                        
                    </div>

                    <img src={hamburger} alt="list" onClick={showNav()} id="list-icon"></img>

                </ul>
                
            </div>
        </Router>
       
    )
}




export default Navbar;