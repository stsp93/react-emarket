import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from './../../../context/ModalContext';

export default function OwnOffer() {

    const {updateModal, updateModalProps} = useContext(ModalContext)
    
    function onEdit() {
        updateModal('Edit')
        updateModalProps({title:'Test', description:'Test2', category:'Vehicles'})
    }
    return (
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
                            <button onClick={onEdit} className="profile-edit">Edit</button>
                            <button className="profile-delete">Delete</button>
                        </div>
                    </div>
                </div>
                <p className="price"><strong>20.99</strong> $</p>
            </article>
        </li>
    )
}
