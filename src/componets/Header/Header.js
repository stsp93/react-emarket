import './Header.css';
import logo from '../../logo.png';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from './../../context/ModalContext';

export default function Header() {
    const {updateModal} = useContext(ModalContext);

    
    // Active nav links styling

    const [active, setActive] = useState(false);

    function handleNavButton() {
        setActive(state => !state);
    }

    const activeStyle = ({ isActive }) => isActive
        ? { color: 'var(--zomp)' }
        : undefined;


    // Search logic

    const navigate = useNavigate()
    const [query, setQuery] = useState('');

    function handleSearchClick(e) {
        e.preventDefault();

        navigate(`/search?q=${query}`);
    }

    function onSearchQueryChange(e) {
        setQuery(e.target.value);
    }


    return (
        <header>

            <div className="header__nav-wrapper">
                <NavLink to="/"><img className="header__logo" src={logo} alt="Shop open e-market" /></NavLink>

                <nav className="header__nav">
                    <button onClick={handleNavButton} className="nav__button"><i className="fa-solid fa-bars"></i></button>
                    <ul>
                        <li className={`nav__li ${active ? 'nav__active' : ''}`}><NavLink style={activeStyle} to="/"><i className="fa-solid fa-list-ul"></i>Categories</NavLink></li>
                        {/* <!-- USER --> */}
                        <li className={`nav__li ${active ? 'nav__active' : ''}`}><NavLink style={activeStyle} to="/user/profile"><i className="fa-solid fa-user"></i>Profile</NavLink></li>
                        <li className={`nav__li ${active ? 'nav__active' : ''}`}><NavLink to="/user/logout"><i className="fa-solid fa-right-from-bracket"></i>Logout</NavLink></li>
                        {/* <!-- GUEST --> */}
                        <li className={`nav__li ${active ? 'nav__active' : ''}`}><NavLink onClick={updateModal}><i className="fa-solid fa-user-check"></i>Login</NavLink></li>
                        <li className={`nav__li ${active ? 'nav__active' : ''}`}><NavLink onClick={updateModal} ><i className="fa-solid fa-file-signature"></i>Register</NavLink></li>
                    </ul>
                </nav>
            </div>
            {/* Search bar */}
            <form>
                <div>
                    <input value={query} onChange={onSearchQueryChange} className="search-box" type="text" maxLength="30" placeholder="Search anything..." />
                    <button onClick={handleSearchClick} className="search-box__button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </header>
    )
}
