import logo from './logo.svg';
import './App.css';
import React from 'react';
import personFill from './assets/person-circle.svg'
import cart from './assets/cart.svg'

//Import all components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Err404 from './components/Err404';
import HomePage from './components/HomePage';
import OrderPlacedSuccessfully from './components/OrderPlaceSuccessfully';
import OrderDeclined from './components/OrderDeclined';
import PreSettings from './components/PreSettings';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      {/* <Err404></Err404> */}
      {/* <OrderPlacedSuccessfully></OrderPlacedSuccessfully> */}
      <Navbar></Navbar>
      {/* <Cart></Cart> */}
      {/* <OrderDeclined></OrderDeclined> */}
      {/* <PreSettings></PreSettings> */}
      {/* <Footer></Footer> */}


    </div>
  );
}

export default App;
