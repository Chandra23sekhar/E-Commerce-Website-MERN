import React from 'react'
import styles from '../static/css/userSettings.css'
import userImg from '../assets/user.png'

export default function UserDetailsSettings() {
  return (
   <main id='usr-set-main'>
		<h1>Your Details</h1>
		<div className='usr-set-outer'>
			<form method='post' action=' settingsUpdate' encType='multipart/form-data'>
				<div className='prof-pic-cls'>
					<input type='file' placeholder="upload an image" className='prof-pic' name='profPic'></input>
				</div>
				<div className='user-new-det'>
					<label htmlFor='usrName'>Full Name : <input type='text' className='usr-det-inp' name='fullName'></input></label>
					<label htmlFor='usrName'>Email : <input type='email' className='usr-det-inp' name='usrEmail'></input></label>
					<label htmlFor='usrName'>Address Line 1 : <input type='text' className='usr-det-inp' name='addr1'></input></label>
					<label htmlFor='usrName'>Address Line 2 : <input type='text' className='usr-det-inp' name='addr2'></input></label>
					<label htmlFor='usrName'>Pincode : <input type='text' className='usr-det-inp' name='pincode'></input></label>
					<label htmlFor='usrName'>Mobile No : <input type='text' className='usr-det-inp' name='usrPhNo'></input></label>
					<div className='usr-set-btn-div'>
						<button className='usr-set-btn' id='cancel'>Cancel</button>
						<button className='usr-set-btn' id='submit'>Save Changes</button>
					</div>
				</div>
			</form>
		</div>
   </main>
  )
}


