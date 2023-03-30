
import { Link } from 'react-router-dom';
import formatDate from '../../../../utils/formatDate';

export default function OfferCard(props) {
    const {_id, title, images,imageUrl, price, location, createdOn} = props
    return (
        <li>
            <article className="offer-card">
                <div className="offer-wrapper">
                    <Link to={`/listing/${_id}`} className="offer-link">
                        <img className="offer-img" src={images[0] || imageUrl} alt={title} />
                    </Link>
                    <div className="offer-text">
                        <Link className="offer-title offer-link" to={`/listing/${_id}`}>{title}
                        </Link>
                        <div>
                            <p className="created-at">{formatDate(createdOn)}</p>
                            <p className="location">{location}</p>
                        </div>
                    </div>
                </div>
                <p className="price"><strong>{price}</strong> $</p>
            </article>
        </li>
    )
}
