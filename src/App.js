import './App.css';
// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import background from './images/background2.mov';
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  const URL = "https://jbpfbackend.herokuapp.com/"
  return (
    <div className="App">
      <div className="bgdarken">
      <Header />
      {/* <Route exact path ="/">
        <Home />
      </Route> */}
      <Route path="/projects">
        <Projects URL={URL} />
      </Route>
      <Route exact path="/">
        <About URL={URL} />
      </Route>
      <Route path="/contact">
        <Contact URL={URL} />
      </Route>
      <Footer />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>
      </div>
    </div>
  );
}

export default App;
