import React from 'react';
import userImg from '../assets/user.png'
import prevOrder from '../assets/order-now.png'
import trackOrder from '../assets/tracking.png'
import logout from '../assets/logout.png'


function PreSettings(){
    return(
       <main id='ps-main'>
        <h1>Settings</h1>
        <div className='all-seetings-cont'>
            
            <div className='settings-card'>
                <h4>Your Details</h4>
                <img src={userImg} alt="user-image" className='settings-img'></img>
            </div>

            {/* //Card for previous orders; */}
            <div className='settings-card'>
                <h4>Previous Orders</h4>
                <img src={prevOrder} alt="previous-orders" className='settings-img'></img>
            </div>

            {/* //Card for tracking orders; */}
            <div className='settings-card'>
                <h4>Track your Order</h4>
                <img src={trackOrder} alt="track-your-order" className='settings-img'></img>
            </div>

            {/* //Card for logout; */}
            <div className='settings-card'>
                <h4>Logout</h4>
                <img src={logout} alt="logout" className='settings-img'></img>
            </div>
        </div>
       </main>
    );
}

export default PreSettings;