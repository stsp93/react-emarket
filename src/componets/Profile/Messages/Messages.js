import './Messages.css'
import Message from './Message/Message';
import { useState, useEffect, useContext } from 'react';
import * as apiService from '../../../services/api/data';
import Carousel from '../../common/Carousel/Carousel';
import { ModalContext } from './../../../context/ModalContext';
import { modals } from '../../../utils/modalUtils';
import { Link } from 'react-router-dom';

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const {updateModal} = useContext(ModalContext)

    useEffect(() => {
        (async function () {
            try {
                const res = await apiService.getMessages();
                setMessages(res.reverse());
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    function removeComment(id) {
        setMessages(m => m.filter(x => x._id !== id));
    }

    return (
        <>
        <Carousel />
        <div className="profile__links">
        <button onClick={() => updateModal(modals.message)} className='profile__link' ><i className="fa-solid fa-paper-plane"></i>Send Message</button>
        <Link to={`/user/profile`} className='profile__link' ><i className="fa-solid fa-file"></i>Back to Listings</Link>
        </div>
            <h2 className="title main-title">Your Inbox</h2>

            {messages.length ?
                <ul className="messages-list">
                    {messages.map(m => <Message key={m._id} {...m} removeComment={removeComment} />)}
                </ul>
                : <p className='no-offers'>You have no messages</p>}
        </>
    )
}
