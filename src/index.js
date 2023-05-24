import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
// import App from './App';
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import PreSettings from "./components/PreSettings";
import UserDetailsSettings from "./components/UserDetailsSettings";
import PreviousOrders from "./components/PreviousOrders";
import TrackOrder from "./components/TrackOrder";
import Err404 from "./components/Err404";
import BuyNow from './components/BuyNow'
import OrderConfirmation from './components/OrderConfirmation'
import OrderPlacedSuccessfully from './components/OrderPlaceSuccessfully'
import Navbar from './components/Navbar';
import SearchBar from "./components/SearchBar";
import cart from './assets/cart.svg'
import personFill from './assets/person-circle.svg'
import mobiles from './components/mobiles';
import laptops from './components/laptops';
import buynowps5 from './components/buyps5';
import buyiphone12 from './components/buyiphone12';
import buylogiMouse from './components/buylogiMouse';
import buyhuntsmanMini from './components/buyhuntsmanMini';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));





export default function App() {
	
	return(
		<div>
			<Router>
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
							{/* <img src={hamburger} alt="list" onClick={showNav()} id="list-icon"></img> */}
					</div>
										<Routes>
										{/* const navigate = useNavigate();
										navigate("/login"); */}
											
											<Route exact path="/"  element={<HomePage />} />
											<Route exact path="/cart" element={<Cart />} />
											<Route excat path="/settings" element={<PreSettings />} />
											<Route exact path='/userdetails' element={<UserDetailsSettings />}></Route>
											<Route exact path='/previousorders' element={<PreviousOrders />}></Route>
											<Route exact path='/trackyourorder' Component={TrackOrder}></Route>
											<Route exact path='/buynow' Component={BuyNow}></Route>
											<Route exact path = '/orderplaced' Component={OrderPlacedSuccessfully}></Route>
											<Route exact path='/orderconfirmation' Component={OrderConfirmation}></Route>
											<Route excat path='/mobiles' Component={mobiles}></Route>
											<Route excat path='/laptops' Component={laptops}></Route>
											<Route excat path='/buy/ps5' Component={buynowps5}></Route>
											<Route excat path='/buy/iphone12' Component={buyiphone12}></Route>
											<Route excat path='/buy/logitechg502x' Component={buylogiMouse}></Route>
											<Route excat path='/buy/razerhuntsmanmini' Component={buyhuntsmanMini}></Route>
											<Route path="*" element={<Err404 />} />
										</Routes>
			</Router>

			{/* <footer>
				<div className='details'>
					<p id='ph-no'>Contact Us : +91 1234567897</p>
					<p id='em-ad'>Email us @ : abcd@gmail.com</p>
				</div>

					<p><span>&reg;</span>2023 - </p>

				<p id='addr'>
					Address : #123, Yelahanka <br></br> Bangalore - 560064
				</p>
				</footer> */}
			
		</div>
		
			

	)}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
