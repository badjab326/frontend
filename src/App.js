import './App.css';
// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import background from './images/background.mp4';
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { faImages } from '@fortawesome/free-solid-svg-icons';

function App() {

  const URL = "https://jbpfbackend.herokuapp.com/"
  return (
    <div className="App">
      <div className="bgdarken">
      <Header />
      <Route exact path ="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects URL={URL} />
      </Route>
      <Route path="/about">
        <About URL={URL} />
      </Route>
      <Route path="/contact">
        <Contact URL={URL} />
      </Route>
      <Footer />
      </div>
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
