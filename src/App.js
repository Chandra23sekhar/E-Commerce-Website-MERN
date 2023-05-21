import logo from './logo.svg';
import './App.css';
import React from 'react';

import personFill from './assets/person-circle.svg'
import cart from './assets/cart.svg'

//Import all components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BuyNow from './components/BuyNow';
import OrderConfirmation from './components/OrderConfirmation';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      
      {/* <Navbar /> */}
      {/* <HomePage></HomePage> */}
      {/* <BuyNow></BuyNow> */}
      <OrderConfirmation />
      {/* <Footer></Footer> */}


    </div>
  );
}

export default App;
