import './Messages.css'
import Message from './Message/Message';
import { useState, useEffect } from 'react';
import * as apiService from '../../../services/api/data';

export default function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                const res = await apiService.getMessages();
                setMessages(res);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <>
            <h2 className="title main-title">Messages</h2>

            {messages.length ?
                <ul className="messages-list">
                    {messages.map(m => <Message {...m} />)}
                </ul>
                : <p className='no-offers'>You have no messages</p>}




        </>
    )
}
