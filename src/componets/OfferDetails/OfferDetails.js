import { useState, useEffect, useContext } from 'react';
import { getItemDetails } from '../../services/api/data';
import { useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import { ModalContext } from './../../context/ModalContext';
import { modals } from '../../utils/modalUtils';

export default function OfferDetails() {
    const { auth } = useContext(AuthContext)
    const {updateModal, updateModalData} = useContext(ModalContext)
    const { offerId } = useParams()
    const [offer, setOffer] = useState({});
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        (async () => {
            const result = await getItemDetails(offerId);
            setOffer(result);
            setIsOwner(auth.username === result.owner)
        })()

    }, [offerId, auth])


    function editListing(newOffer) {
        setOffer(newOffer)
    }

    // onClick functions


    function onEdit() {
        updateModal(modals.edit);
        updateModalData({offer, editListing})
    }
    
    function onDelete() {
        updateModal(modals.confirm);
        updateModalData(offer._id)
    }

    function onContact() {
        updateModal(modals.message);
        updateModalData(offer.owner)
    }

    return (
        <>
            <h2 className="title main-title">Category: <Link to={`/category/${offer.category}`}>{offer.category}</Link></h2>
            <article className="details">
                <img src={offer.imageUrl} alt="" className="main-image" />
                <div className="details-text">
                    <h3 className="details-title">
                        {offer.title}
                    </h3>
                    <p className="location">{offer.location}</p>
                    <p className="details-date">{formatDate(offer.createdOn)}</p>
                    <p className="price">Price: <strong>{offer.price}</strong> $</p>
                    <p className="details-description"><strong>Description: </strong>
                        {offer.description}
                    </p>
                    <p className="details-owner">Posted by: <em>{offer.owner}</em></p>
                </div>
                <div className="details-buttons">
                    {isOwner ? <>
                        <button onClick={onEdit} className="details-button">Edit</button>
                        <button onClick={onDelete} className="details-button">Delete</button>
                    </>
                        : <button onClick={onContact} className="details-button cta">Contact</button>}

                    <button onClick={() => window.history.back()} className="details-button">Back</button>
                </div>

            </article>
        </>
    )
}
