import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from './../../context/ModalContext';
import OfferCard from '../OfferCard/OfferCard';
import { getProfile } from '../../services/api/data';

export default function Profile() {
    const { updateModal, updateModalProps } = useContext(ModalContext);
    const [profile, setProfile] = useState();
    const [results, setResults] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getProfile();
            setProfile(res);
            setResults(res.ownListings)
        })();
    },[]);

    function addOwnListing(listing) {
        setResults(s => [...s, listing])
    }

    function onCreateClick() {
        updateModal('Create');
        updateModalProps(() => addOwnListing);
    }

    return (
        <section>
            <Carousel />
            {/* Profile links */}
            <div className="profile__links">
                <Link className={`profile__link ${profile?.hasNewReplies && 'profile__new-message'} `} to="/user/messages"><i className="fa-solid fa-message"></i>Messages</Link>
                <button onClick={onCreateClick} className='profile__link' ><i className="fa-solid fa-file-circle-plus"></i>Create Listing</button>
            </div>

            {/* Listings Content */}
            <h2 className="title main-title">Your Listings</h2>
            <ul className="offers-list">
                {results.length && results.map(offer => <OfferCard key={offer._id} {...offer} />)}
            </ul>

            {/* Pagination */}
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
