import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Section3 from './Components/Section3';
import Roadmapsection from './Components/Roadmapsection';
import Accordiansection from './Components/Accordiansection';
import Lastsection from './Components/Lastsection';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  return (
    <div className="bg-color">
     <Header />
     <Section />
     <Section3 />
     <Roadmapsection />
     <Accordiansection />
     <Lastsection />
     <Footer />
    </div>
  );
}

export default App;
