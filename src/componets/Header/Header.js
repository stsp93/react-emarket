import './Header.css';
import logo from '../../logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

    const [active, setActive] = useState(false);

    function handleNavButton() {
        setActive(state => !state);
    }

    return (
        <header>

            <div className="header__nav-wrapper">
                <Link to="/"><img className="header__logo" src={logo} alt="Shop open e-market" /></Link>

                <nav className="header__nav">
                    <button onClick={handleNavButton} className="nav__button"><i className="fa-solid fa-bars"></i></button>
                    <ul>
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><Link to="/"><i className="fa-solid fa-list-ul"></i>Categories</Link></li>
                        {/* <!-- USER --> */}
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><Link to="/user/profile"><i className="fa-solid fa-user"></i>Profile</Link></li>
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><Link to="/user"><i className="fa-solid fa-right-from-bracket"></i>Logout</Link></li>
                        {/* <!-- GUEST --> */}
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><Link to="/" onClick={props.navClickHandler}><i className="fa-solid fa-user-check"></i>Login</Link></li>
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><Link to="/" onClick={props.navClickHandler} ><i className="fa-solid fa-file-signature"></i>Register</Link></li>
                    </ul>
                </nav>
            </div>
            <form>
                <div>
                    <input className="search-box" type="text" maxLength="30" placeholder="Search anything..." />
                    <button className="search-box__button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </header>
    )
}
