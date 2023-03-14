import './Confirm.css'
import { useContext } from 'react';
import { ModalContext } from './../../../context/ModalContext';
import * as apiService from '../../../services/api/data';
import { useNavigate } from 'react-router-dom';
import showLoading from './../../../utils/showLoading';



export default function Confirm() {
    const {closeModal,updateModal, modalData} = useContext(ModalContext);
    const navigate = useNavigate();

    async function onConfirm() {
        await apiService.deleteItemListing(modalData);
        showLoading(updateModal, closeModal);
        navigate('/user/profile');
    }

    return (
        <article className="confirm">
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <h2 className="title form-title" >Are You Sure?</h2>
            <div className="details-buttons">

                <button onClick={onConfirm} className="details-button">Yes</button>
                <button onClick={closeModal} className="details-button">No</button>

            </div>
        </article>
    )
}
