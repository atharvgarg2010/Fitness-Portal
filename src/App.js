// import logo from './logo.svg';
import './App.css';
// #495C83
// #7A86B6
// #A8A4CE
// #C8B6E2
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import JoinUs from './components/JU';
import Footer from './components/Footer';



function App() {
  return (
    <>
  <Router onscroll = {
console.log(window.scrollY)

}>
    <Navbar />

    <Routes>
  <Route path='/about' element={
    <>
    <About />

    </>
  }/>
  <Route path='/Gallery' element={
    <>
    <Gallery />

    </>
  }/>
  <Route path='/contact' element={
    <>
    <JoinUs />

    </>
  }/>
  <Route path='/' element={
    <>
    <Home />
    <About />
    <Services/>
    <Gallery/>
    <Packages/>
    <JoinUs/>
    </>
  }/>
    </Routes>
  <Footer/>
  </Router>
    </>
  );
}

export default App;
