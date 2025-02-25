import logo from './logo.svg';
import './App.css';
import LocomotiveScroll from 'locomotive-scroll';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import OurWork from './pages/OurWork';
import Contact from './components/Contact';
function App() {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-work" element={<OurWork />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Service />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
