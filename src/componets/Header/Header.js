import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import logo from '../../logo.png';
import * as userService from '../../services/api/user';
import { useLoading } from '../../hooks/useLoading';
import { AuthContext } from './../../context/AuthContext';
import { modals } from '../../utils/modalUtils';


export default function Header() {
    const { updateModal } = useContext(ModalContext);
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const showLoading = useLoading();

    //Setting active link
    const activeStyle = ({ isActive }) => isActive
        ? { color: 'var(--orange)' }
        : undefined;


    // Mobile view logic

    const [visible, setVisible] = useState(false);

    // Show/Hide Nav Button (mobile view only)
    function handleNavButton() {
        setVisible(state => !state);
    }

    //Show/Hide links className (mobile view only)
    const liClassName = (visible) => {
        return `nav__li ${visible ? 'nav__visible' : ''}`
    }


    // Search logic
    const [query, setQuery] = useState('');

    function handleSearchClick(e) {
        e.preventDefault();

        if (query === '') {
            return navigate('/');
        }
        navigate(`/search?q=${query}`);
    }

    function onSearchQueryChange(e) {
        setQuery(e.target.value);
    }

    // Logout logic
    async function onLogout() {
        try {
            await userService.logout()
            setAuth(null);
            // Show Success window and remove it after 2s
            showLoading();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <header>
            <div className="header__top">
                <p className="header__top-text">Welcome to e-market / Sell your stuff or check the recent offers</p>
                {auth && <p>Logged in with {auth && auth.email}</p>}
            </div>

            <div className="header__nav-wrapper">
                <NavLink to="/"><img className="header__logo" src={logo} alt="Shop open e-market" /></NavLink>
                <nav className="header__nav">

                    <button onClick={handleNavButton} className="nav__button"><i className="fa-solid fa-bars"></i></button>
                    <ul>
                        
                        <li className={liClassName(visible)}><NavLink className='nav__link' style={activeStyle} to="/"><i className="fa-solid fa-list-ul"></i>Categories</NavLink></li>
                        {auth ?
                            <>
                                {/* <!-- USER LINKS --> */}
                                <li className={liClassName(visible)}><NavLink className='nav__link' style={activeStyle} to="/user/profile"><i className="fa-solid fa-user"></i>Profile</NavLink></li>
                                <li className={liClassName(visible)}><button className='nav__link' onClick={onLogout}><i className="fa-solid fa-right-from-bracket"></i>Logout</button></li>
                            </>
                            : <>
                                {/* <!-- GUEST LINKS --> */}
                                <li className={liClassName(visible)}>
                                    <button className='nav__link' to="#" onClick={updateModal.bind(this, modals.login)}><i className="fa-solid fa-user-check"></i>Login</button>
                                </li>
                                <li className={liClassName(visible)}>
                                    <button className='nav__link' to="#" onClick={updateModal.bind(this, modals.register)} ><i className="fa-solid fa-file-signature"></i>Register</button>
                                </li>
                            </>
                        }

                    </ul>
                </nav>
            </div>
            {/* Search bar */}
            <form>
                <div className='search-wrapper'>
                    <select className='search-categories'>
                        <option value="Electronics">All categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <input value={query} onChange={onSearchQueryChange} className="search-box" type="text" maxLength="30" placeholder="Search anything..." />
                    <button onClick={handleSearchClick} className="search-box__button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </header>
    )
}
