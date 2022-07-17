import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <nav className="nav">
                <Link to='/' className='links'>
                <button className="button-75" role="button"><span className="text">Home</span></button>
                </Link>
                <Link to='/about' className='links'>
                <button className="button-75" role="button"><span className="text">About</span></button>
                </Link>
                <Link to='/projects' className='links'>
                <button className="button-75" role="button"><span className="text">Projects</span></button>
                </Link>
                <Link to='/contact' className='links'>
                <button className="button-75" role="button"><span className="text">Contact</span></button>
                </Link>
            </nav>
        </header>
    );
  }
  
  export default Header;