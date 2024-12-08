import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            < Route path="/" element ={ <Home /> } />
            < Route path="/search" element ={ <Home /> } />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
