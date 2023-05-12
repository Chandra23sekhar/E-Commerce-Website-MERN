import logo from './logo.svg';
import './App.css';
import React from 'react';
import personFill from './assets/person-circle.svg'
import cart from './assets/cart.svg'

//Import all components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      
      {/* <Footer></Footer> */}


    </div>
  );
}

export default App;
