// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import  Team from './pages/Team';
import Contact from './pages/ContactUs';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<AboutUs/>} />
            <Route path="/Team" element={<Team/>} />
            <Route path='/ContactUs' element={<Contact/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
