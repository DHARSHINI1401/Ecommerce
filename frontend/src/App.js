import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/productDetail';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';
import About from './pages/about';
import Product from './pages/products';

function App() {
  const [cartItems,setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='light' position='top-center'/>
          <Header cartItems={cartItems} />
          <About />
          <Routes>
            < Route path="/" element ={ <Home /> } />
            < Route path="/search" element ={ <Home /> } />
            < Route path="/about" element ={ <About /> } />
            < Route path="/products" element ={ <Product /> } />
            < Route path="/product/:id" element ={ <ProductDetail cartItems={cartItems} setCartItems={setCartItems}/> } />
            < Route path="/cart" element ={ <Cart cartItems={cartItems} setCartItems={setCartItems}/> } />
            < Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
