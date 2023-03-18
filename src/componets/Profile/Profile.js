import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from './../../context/ModalContext';
import OfferCard from '../OfferCard/OfferCard';
import { getProfile } from '../../services/api/data';
import Pagination from '../Pagination/Pagination';

export default function Profile() {
    const { updateModal, updateModalData } = useContext(ModalContext);
    const [results, setResults] = useState([]);
    const [newMessage, setNewMessage] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await getProfile();
            setResults(res.ownListings.reverse());
            setNewMessage(res.hasNewReplies);
            setLoading(false)
        })();
    }, []);

    function addOwnListing(listing) {
        setResults(s => [listing,...s])
    }

    function onCreateClick() {
        updateModal('Create');
        updateModalData(() => addOwnListing);
    }

    return (
        <section>
            <Carousel />
            {/* Profile links */}
            <div className="profile__links">
                <Link className={`profile__link ${newMessage && 'profile__new-message'} `} to="/user/messages"><i className="fa-solid fa-message"></i>Messages</Link>
                <button onClick={onCreateClick} className='profile__link' ><i className="fa-solid fa-file-circle-plus"></i>Create Listing</button>
            </div>


            {/* Listings Content */}
            {loading ? <h2>Loading...</h2>
                : <>
                    <h2 className="title main-title">Your Listings</h2>
                    <ul className="offers-list">
                        {results.map(offer => <OfferCard key={offer._id} {...offer} />)}
                    </ul>

                    {results.length ? <Pagination /> : <h3>No offers found...</h3>}

                </>}

        </section>

    )
}
