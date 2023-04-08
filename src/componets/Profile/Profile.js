import './Profile.css'

import { Link } from 'react-router-dom';
import { useContext, useEffect, useReducer } from 'react';
import { ModalContext } from './../../context/ModalContext';
import { getProfile } from '../../services/api/data';
import { modals } from '../../utils/modalUtils';
import OfferList from '../common/OfferList/OfferList';
import Loading from '../Modal/Loading/Loading';
import useSessionStorage from '../../hooks/useSessionStorage';


const profileReducer = function (state, action) {
    switch (action.type) {
        case 'FETCH_PROFILE': {
            return {
                username: action.profile.username,
                results: action.profile.ownListings.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn)),
                newMessage: action.profile.hasNewReplies,
                loading: false
            }
        }
        case 'ADD_LISTING': {
            return {
                ...state,
                results: [action.listing, ...state.results]
            }
        }
        default: return;
    }
}

export default function Profile() {
    const { updateModal, updateModalData } = useContext(ModalContext);
    const [curPage, setPage] = useSessionStorage('page');
    const [profile, dispatch] = useReducer(profileReducer, { username: '', results: [], newMessage: false, loading: true })

    useEffect(() => {
        (async () => {
            const res = await getProfile();
            dispatch({ type: 'FETCH_PROFILE', profile: res })
        })();
    }, []);

    function addOwnListing(listing) {
        dispatch({type:'ADD_LISTING', listing})
    }

    function onCreateClick() {
        updateModal(modals.create);
        updateModalData(() => addOwnListing);
    }

    return (
        <section>

            <h2 className='profile__title'>Profile</h2>
            <p className='profile__text'>Hello {profile.username},<br />here you can see the items you listed, create new listings or check your messages!</p>

            {/* <Carousel /> */}
            {/* Profile links */}
            <div className="profile__links">
                <button onClick={onCreateClick} className='profile__link' ><i className="fa-solid fa-file-circle-plus"></i>Create Listing</button>
                <Link className={`profile__link ${profile.newMessage && 'profile__new-message'} `} to="/user/messages"><i className="fa-solid fa-message"></i>Messages</Link>
            </div>


            {/* Listings Content */}
            {profile.loading ? <Loading />
                : <>
                    {profile.results.length ? <h2 className="title main-title">Your Listings</h2> : <h2 className="title main-title">You have no listings yet</h2>}
                    <OfferList results={profile.results} resPerPage={5} curPage={curPage} setPage={setPage} />

                </>}

        </section>

    )
}
