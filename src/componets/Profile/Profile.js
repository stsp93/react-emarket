import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from './../../context/ModalContext';
import OfferCard from '../OfferCard/OfferCard';
import { getProfile } from '../../services/api/data';

export default function Profile() {
    const { updateModal, updateModalData } = useContext(ModalContext);
    const [profile, setProfile] = useState();
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const res = await getProfile();
            setProfile(res);
            setResults(res.ownListings);
            setLoading(false)
        })();
    }, []);

    function addOwnListing(listing) {
        setResults(s => [...s, listing])
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
                <Link className={`profile__link ${profile?.hasNewReplies && 'profile__new-message'} `} to="/user/messages"><i className="fa-solid fa-message"></i>Messages</Link>
                <button onClick={onCreateClick} className='profile__link' ><i className="fa-solid fa-file-circle-plus"></i>Create Listing</button>
            </div>


            {/* Listings Content */}
            {loading ? <h2>Loading...</h2>
                : <>
                    <h2 className="title main-title">Your Listings</h2>
                    <ul className="offers-list">
                        {results.map(offer => <OfferCard key={offer._id} {...offer} />)}
                    </ul>

                    {results.length ?
                        <div className="pagination">
                            <button className="pagination-arrow"><i className="fa-solid fa-chevron-left"></i></button>
                            <p className="page">1/2</p>
                            <button className="pagination-arrow"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                        :
                        <h3>No offers found...</h3>
                    }

                </>}

        </section>

    )
}
