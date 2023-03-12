import { useState, useEffect } from 'react';
import { getItemDetails } from '../../services/api/data';
import { useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';

export default function OfferDetails() {
const {offerId} = useParams()
const [offer, setOffer] = useState({});

useEffect(() => {
    (async () => {
        const result = await getItemDetails(offerId);
        setOffer(result);
    })()

}, [offerId])


    return (
        <>
            <h2 className="title main-title">Category: <Link to={`/category/${offer.category}`}>{offer.category}</Link></h2>
            <article className="details">
                <img src={offer.imageUrl} alt="" className="main-image" />
                    <div className="details-text">
                        <h3 className="details-title">
                            {offer.title}
                        </h3>
                        <p className="details-date">{formatDate(offer.createdOn)}</p>
                        <p className="price">Price: <strong>{offer.price}</strong> $</p>
                        <p className="details-description"><strong>Description: </strong>
                            {offer.description}
                        </p>
                            <p className="details-owner">Posted by: <em>{offer.owner}</em></p>
                    </div>
                    <div className="details-buttons">
                        <Link to="/listing/123/edit" className="details-button">Edit</Link>
                        <button className="details-button">Delete</button>
                        <button className="details-button cta">Contact</button>
                        <button className="details-button">Back</button>
                    </div>

            </article>
        </>
    )
}
