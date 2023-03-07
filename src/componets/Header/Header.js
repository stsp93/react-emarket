import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ModalUserContext } from '../../context/ModalUserContext';
import logo from '../../logo.png';


export default function Header() {
    const { updateModal, user } = useContext(ModalUserContext);

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

        if (query === '') return navigate('/');

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
                        <li className={liClassName(activeStatus)}><NavLink style={activeStyle} to="/"><i className="fa-solid fa-list-ul"></i>Categories</NavLink></li>
                        {user ?
                            <>
                                {/* <!-- USER --> */}
                                <li className={liClassName(activeStatus)}><NavLink style={activeStyle} to="/user/profile"><i className="fa-solid fa-user"></i>Profile</NavLink></li>
                                <li className={liClassName(activeStatus)}><NavLink to="/user/logout"><i className="fa-solid fa-right-from-bracket"></i>Logout</NavLink></li>
                            </>
                            : <>
                                {/* <!-- GUEST --> */}
                                <li className={liClassName(activeStatus)}>
                                    <NavLink onClick={updateModal.bind(this,'Login')}><i className="fa-solid fa-user-check"></i>Login</NavLink>
                                </li>
                                <li className={liClassName(activeStatus)}>
                                    <NavLink onClick={updateModal.bind(this,'Register')} ><i className="fa-solid fa-file-signature"></i>Register</NavLink>
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
