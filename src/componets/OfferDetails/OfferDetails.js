import { useState, useEffect } from 'react';
import { getItemDetails } from '../../api/data';
import { useParams } from 'react-router-dom';

export default function OfferDetails() {
const {offerId} = useParams()
const [offer, setOffer] = useState({});

useEffect(() => {
    (async () => {
        const result = await getItemDetails(offerId);
        setOffer(o => result);
    })()

}, [])

    return (
        <>
            <h2 className="title main-title">Category: <a href="">{offer.category}</a></h2>
            <article className="details">
                <img src={offer.imageUrl} alt="" className="main-image" />
                    <div className="details-text">
                        <h3 className="details-title">
                            {offer.title}
                        </h3>
                        <p className="details-date">{offer.createdAt}</p>
                        <p className="price">Price: <strong>{offer.price}</strong> $</p>
                        <p className="details-description"><strong>Description: </strong>
                            {offer.description}
                        </p>
                            <p className="details-owner">Posted by: <em>{offer.owner}</em></p>
                    </div>
                    <div className="details-buttons">
                        <button className="details-button">Edit</button>
                        <button className="details-button">Delete</button>
                        <button className="details-button cta">Contact</button>
                        <button className="details-button">Back</button>
                    </div>

            </article>
        </>
    )
}
