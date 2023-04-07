import './Profile.css'

import { Link } from 'react-router-dom';
import Carousel from '../common/Carousel/Carousel';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from './../../context/ModalContext';
import { getProfile } from '../../services/api/data';
import { modals } from '../../utils/modalUtils';
import OfferList from '../common/OfferList/OfferList';
import Loading from '../Modal/Loading/Loading';
import useSessionStorage from '../../hooks/useSessionStorage';

export default function Profile() {
    const { updateModal, updateModalData } = useContext(ModalContext);
    const [results, setResults] = useState([]);
    const [newMessage, setNewMessage] = useState(false);
    const [curPage, setPage] = useSessionStorage('page');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await getProfile();
            setResults(res.ownListings.sort((a,b) =>new Date(b.createdOn) -new Date(a.createdOn)));
            setNewMessage(res.hasNewReplies);
            setLoading(false)
        })();
    }, []);

    function addOwnListing(listing) {
        setResults(s => [listing,...s])
    }

    function onCreateClick() {
        updateModal(modals.create);
        updateModalData(() => addOwnListing);
    }

    return (
        <section>
            <Carousel />
            {/* Profile links */}
            <div className="profile__links">
                <button onClick={onCreateClick} className='profile__link' ><i className="fa-solid fa-file-circle-plus"></i>Create Listing</button>
                <Link className={`profile__link ${newMessage && 'profile__new-message'} `} to="/user/messages"><i className="fa-solid fa-message"></i>Messages</Link>
            </div>


            {/* Listings Content */}
            {loading ? <Loading />
                : <>
                    {results.length ? <h2 className="title main-title">Your Listings</h2>: <h2 className="title main-title">You have no listings yet</h2>} 
                    <OfferList results={results} resPerPage={5} curPage={curPage} setPage={setPage} />

                </>}

        </section>

    )
}
