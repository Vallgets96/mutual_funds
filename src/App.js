import './App.css';
import Home from './Components/Home/Home';
import Whyus from './Components/Whychooseus/Whyus';
import Aboutus from './Components/Aboutus/Aboutus';
import Happyclients from './Components/Happyclients/Happyclients';
import Service from './Components/Service/Service';
import Partner from './Components/Partner/Partner';
import Contactus from './Components/Contactus/Contactus';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonial/Testimonial';



function App() {
  return (
    <div className='app'>
    <Home/>
    <Whyus />
    <Aboutus />
    <Happyclients />
    <Service />
    <Partner />
    <Faq />
    <Testimonials />
    <Contactus />
    <Footer />
    </div>
  );
}

export default App;
