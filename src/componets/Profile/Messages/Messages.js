import './Messages.css'
import Message from './Message/Message';
import { useState, useEffect, useContext } from 'react';
import * as apiService from '../../../services/api/data';
import Carousel from '../../Carousel/Carousel';
import { ModalContext } from './../../../context/ModalContext';

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const {updateModal} = useContext(ModalContext)

    useEffect(() => {
        (async function () {
            try {
                const res = await apiService.getMessages();
                setMessages(res);
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
        <button onClick={() => updateModal('SendMessage')} className='profile__link' ><i className="fa-solid fa-paper-plane"></i>Send a Message</button>
            <h2 className="title main-title">Messages</h2>

            {messages.length ?
                <ul className="messages-list">
                    {messages.map(m => <Message key={m._id} {...m} removeComment={removeComment} />)}
                </ul>
                : <p className='no-offers'>You have no messages</p>}
        </>
    )
}
