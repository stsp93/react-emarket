import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import logo from '../../logo.png';
import * as userService from '../../services/api/user';
import showSuccess from '../../utils/showLoading';
import { AuthContext } from './../../context/AuthContext';


export default function Header() {
    const { updateModal, closeModal } = useContext(ModalContext);
    const { auth, setAuth } = useContext(AuthContext)

    // Active nav links styling

    const [activeStatus, setActive] = useState(false);

    function handleNavButton() {
        setActive(state => !state);
    }

    const activeStyle = ({ isActive }) => isActive
        ? { color: 'var(--zomp)' }
        : undefined;

    const liClassName = (activeStatus) => {
        return `nav__li ${activeStatus ? 'nav__active' : ''}`
    }

    // Search logic

    const navigate = useNavigate()
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

    // Logout 
    async function onLogout() {
        try {
            userService.logout()
            setAuth(null)
            // Show Success window and remove it after 2s
            showSuccess(updateModal, closeModal)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <header>

            <div className="header__nav-wrapper">
                <NavLink to="/"><img className="header__logo" src={logo} alt="Shop open e-market" /></NavLink>

                <nav className="header__nav">
                    <button onClick={handleNavButton} className="nav__button"><i className="fa-solid fa-bars"></i></button>
                    <ul>
                        <li className={liClassName(activeStatus)}><NavLink className='nav__link' style={activeStyle} to="/"><i className="fa-solid fa-list-ul"></i>Categories</NavLink></li>
                        {auth ?
                            <>
                                {/* <!-- USER --> */}
                                <li className={liClassName(activeStatus)}><NavLink className='nav__link' style={activeStyle} to="/user/profile"><i className="fa-solid fa-user"></i>Profile</NavLink></li>
                                <li className={liClassName(activeStatus)}><button className='nav__link' onClick={onLogout}><i className="fa-solid fa-right-from-bracket"></i>Logout</button></li>
                            </>
                            : <>
                                {/* <!-- GUEST --> */}
                                <li className={liClassName(activeStatus)}>
                                    <button className='nav__link' to="#" onClick={updateModal.bind(this, 'Login')}><i className="fa-solid fa-user-check"></i>Login</button>
                                </li>
                                <li className={liClassName(activeStatus)}>
                                    <button className='nav__link' to="#" onClick={updateModal.bind(this, 'Register')} ><i className="fa-solid fa-file-signature"></i>Register</button>
                                </li>
                            </>
                        }

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
