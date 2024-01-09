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
import Footer from './components/Footer';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Blog from './components/Blog';
import Bmi from './components/Bmi';

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
  <Route path='/login' element={
    <>
    <Login />

    </>
  }/>
  <Route path='/createpost' element={
    <>
    <CreatePost/>

    </>
    
  }/>
    {/* <Route path='/Review' element={
    <>
    <Review/>

    </> */}
    
  {/* }/> */}
  <Route path='/bmi' element={
    <>
    <Bmi/>
    </>
    
  }/>
  <Route path='/' element={
    <>
    <Home />
    <About />
    <Services/>
    <Gallery/>
    {/* <Packages/> */}
    <Blog/>
    {/* <ReviewView/> */}
    {/* <Try/> */}

    {/* <FirebaseImageUpload/> */}
    </>
  }/>
    </Routes>
  <Footer/>
  </Router>
    </>
  );
}

export default App;
