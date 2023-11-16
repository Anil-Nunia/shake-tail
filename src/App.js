import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Component/Hero';
import Mainfeatures from './Component/Mainfeatures';
import Customer from './Component/Customer';
import Work from './Component/Work';
import Pricing from './Component/Pricing';
import Aboutus from './Component/Aboutus';
import Testemonial from './Component/Testemonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Help from './Component/Help';
import Footer from './Component/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, [])
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Mainfeatures />
      <Customer />
      <Work />
      <Pricing />
      <Aboutus />
      <Testemonial />
      <Help />
      <Footer/>
    </div>
  );
}

export default App;
