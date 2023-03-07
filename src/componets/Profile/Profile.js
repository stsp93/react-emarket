import { Link, useNavigate } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import { useContext, useEffect } from 'react';
import { ModalUserContext } from './../../context/ModalUserContext';


export default function Profile() {
    const navigate = useNavigate()
    const {user} = useContext(ModalUserContext);
    
    useEffect(() => {
        if(!user) return navigate('/404', {replace:true});

    }, []);


    return (
        <section>
            <Carousel />
            <div className="profile__links">
                <Link className='profile__link profile__new-message' to="/user/messages"><i className="fa-solid fa-message"></i>Messages</Link>
                <Link className='profile__link' to="/user/messages"><i className="fa-solid fa-file-circle-plus"></i>Create Listing</Link>
            </div>
            <h2 className="title main-title">Your Listings</h2>
            <ul className="offers-list">
                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <Link to="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </Link>
                            <div className="offer-text">
                                <Link className="offer-title offer-link" to="">Brand new Nice Thingy that's red
                                </Link>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="action-buttons">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>

                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <Link to="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </Link>
                            <div className="offer-text">
                                <Link className="offer-title offer-link" to="">Brand new Nice Thingy that's red
                                </Link>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="profile-action">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>

                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <Link to="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </Link>
                            <div className="offer-text">
                                <Link className="offer-title offer-link" to="">Brand new Nice Thingy that's red
                                </Link>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="profile-action">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>

                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <Link to="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </Link>
                            <div className="offer-text">
                                <Link className="offer-title offer-link" to="">Brand new Nice Thingy that's red
                                </Link>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="profile-action">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>
            </ul>

            <div className="pagination">
                <button className="pagination-arrow"><i className="fa-solid fa-chevron-left"></i></button>
                <p className="page">1/2</p>
                <button className="pagination-arrow"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            {/* <!--  if 0 offers  --> */}
            <p>No offers found...</p>
        </section>

    )
}
