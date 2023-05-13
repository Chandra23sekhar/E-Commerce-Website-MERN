import React from 'react';
import styles from '../static/css/settings.css'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import userImg from '../assets/user.png'
import prevOrder from '../assets/order-now.png'
import trackOrder from '../assets/tracking.png'
import logout from '../assets/logout.png'
import TrackOrder from './TrackOrder';
import UserDetailsSettings from './UserDetailsSettings';
import PreviousOrders from './PreviousOrders';
import Logout from './Logout';
function PreSettings(){
    return(
            <main id='ps-main'>
                <h1>Settings</h1>
                <div className='all-seetings-cont'>
                        <div className='settings-card'>
                            <Link to="/userdetails">Your Details</Link>
                            <img src={userImg} alt="user-image" className='settings-img'></img>
                        </div>

                        {/* //Card for previous orders; */}
                        <div className='settings-card'>
                            <Link to="/previousorders">Previous Orders</Link>
                            <img src={prevOrder} alt="previous-orders" className='settings-img'></img>
                        </div>

                        {/* //Card for tracking orders; */}
                        <div className='settings-card'>
                            <Link to="/trackyourorder">Track your Order</Link>
                            <img src={trackOrder} alt="track-your-order" className='settings-img'></img>
                        </div>

                        {/* //Card for logout; */}
                        <div className='settings-card'>
                            <Link to="/logout">Logout</Link>
                            <img src={logout} alt="logout" className='settings-img'></img>
                        </div>
                </div>
                
            </main>
    );
}

export default PreSettings;