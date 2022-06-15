import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <h1>Julian Beard</h1>
            <nav className="nav">
                <Link to='/'>
                    <div>HOME</div>
                </Link>
                <Link to='/about'>
                    <div>ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
  }
  
  export default Header;