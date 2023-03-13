import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav className="nav">
        <div className="left">
          <Link to="/" className="links">
            <img
              className="logo"
              alt="home"
              src="https://cdn.discordapp.com/attachments/944706362288517200/998785650419581038/icons2.png"
            />
          </Link>
        </div>
        <div className="right">
          <Link to="/projects" className="links">
            <button className="button-75">
              <span className="text">Projects</span>
            </button>
          </Link>
          <Link to="/contact" className="links">
            <button className="button-75">
              <span className="text">Contact</span>
            </button>
          </Link>
          <a href="/JulianBeard_AOResume.pdf" target="_blank" className="links">
            <button className="button-75">
              <span className="text">Resume</span>
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
