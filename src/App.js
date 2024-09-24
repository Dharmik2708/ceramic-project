
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import BestSellary from './components/BestSellary';
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import NewCollection from './components/NewCollection';
import OurEmployees from './components/OurEmployees';
import OurStory from './components/OurStory';
import ProductImg from './components/ProductImg';
import Workshop from './components/Workshop';



function App() {
  
  return (
    <>
    <Navbar/>
    <Mainpage/>
    <BestSellary/>
    <NewCollection/>
    <Workshop/>
    <OurEmployees/>
    <ProductImg/>
    <ParallaxProvider>
    <OurStory/>
    </ParallaxProvider>
    <Footer/>
    </>
  );
}

export default App;