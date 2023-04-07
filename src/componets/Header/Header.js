import './Header.css';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import logo from '../../logo.png';
import * as userService from '../../services/api/user';
import { AuthContext } from './../../context/AuthContext';
import { modals } from '../../utils/modalUtils';
import SearchBar from './SearchBar/SearchBar';


export default function Header() {
    const { updateModal, closeModal } = useContext(ModalContext);
    const { auth, setAuth } = useContext(AuthContext);


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

    // Logout logic
    async function onLogout() {
        try {
            updateModal(modals.loading)
            await userService.logout()
            setAuth(null);
            // Show Success window and remove it after 2s
            closeModal();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <header>
            <div className="header__top">
                <p className="header__top-text">Welcome to e-market / Sell your stuff or check the recent offers</p>
                {auth && <p>Signed as {auth && auth.email}</p>}
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
                                    <button className='nav__link' to="#" onClick={updateModal.bind(this, modals.login)}><i className="fa-solid fa-user-check"></i>Sign in</button>
                                </li>
                                <li className={liClassName(visible)}>
                                    <button className='nav__link' to="#" onClick={updateModal.bind(this, modals.register)} ><i className="fa-solid fa-file-signature"></i>Sign up</button>
                                </li>
                            </>
                        }

                    </ul>
                </nav>
            </div>
            <SearchBar />
        </header>
    )
}
