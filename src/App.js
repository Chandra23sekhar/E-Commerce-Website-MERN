import logo from './logo.svg';
import './App.css';
import Err404 from './components/Err404';
import OrderPlacedSuccessfully from './components/OrderPlaceSuccessfully';
import OrderDeclined from './components/OrderDeclined';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Err404></Err404> */}
      {/* <OrderPlacedSuccessfully></OrderPlacedSuccessfully> */}
      <Navbar></Navbar>
      {/* <OrderDeclined></OrderDeclined> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
