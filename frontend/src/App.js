import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/productDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            < Route path="/" element ={ <Home /> } />
            < Route path="/search" element ={ <Home /> } />
            < Route path="/product/:id" element ={ <ProductDetail /> } />
            < Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
