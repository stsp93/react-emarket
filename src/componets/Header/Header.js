import './Header.css';
import logo from '../../logo.png';
import { useState } from 'react';

export default function Header(props) {

    const [active, setActive] = useState(false);

    function handleNavButton() {
        setActive(state => !state);
    }

    return (
        <header>

            <div className="header__nav-wrapper">
                <a href="/"><img className="header__logo" src={logo} alt="Shop open e-market" /></a>

                <nav className="header__nav">
                    <button onClick={handleNavButton} className="nav__button"><i className="fa-solid fa-bars"></i></button>
                    <ul>
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><a href="/"><i className="fa-solid fa-list-ul"></i>Categories</a></li>
                        {/* <!-- USER --> */}
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><a href="/user/profile"><i className="fa-solid fa-user"></i>Profile</a></li>
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><a href="/user"><i className="fa-solid fa-right-from-bracket"></i>Logout</a></li>
                        {/* <!-- GUEST --> */}
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><a href="/" onClick={props.navClickHandler}><i className="fa-solid fa-user-check"></i>Login</a></li>
                        <li className={`nav__li ${active ? 'nav__active': ''}`}><a href="/" onClick={props.navClickHandler} ><i className="fa-solid fa-file-signature"></i>Register</a></li>
                    </ul>
                </nav>
            </div>
            <form>
                <div>
                    <input className="search-box" type="text" maxLength="30" />
                    <button className="search-box__button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </header>
    )
}
