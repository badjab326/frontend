import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <nav className="nav">
                <div className="left">
                    <Link to='/' className='links'>
                        <button className="button-75" role="button"><span className="text">Home</span></button>
                    </Link>
                </div>
                <div className='right'>
                    <Link to='/projects' className='links'>
                        <button className="button-75" role="button"><span className="text">Projects</span></button>
                    </Link>
                    <Link to='/contact' className='links'>
                        <button className="button-75" role="button"><span className="text">Contact</span></button>
                    </Link>
                    <a href="/JulianBeard_ATSResume.pdf" target="_blank" className='links'>
                        <button className="button-75" role="button"><span className="text">Resume</span></button>
                        </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;