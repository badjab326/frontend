import "./App.css";
// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import background from "./images/background.mov";
// Import Pages
// import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="bgdarken">
        <Header />
        {/* <Route exact path ="/">
        <Home />
      </Route> */}
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
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
