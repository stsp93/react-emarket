import formatDate from "../../../../utils/formatDate"
import { useContext } from 'react';
import { ModalContext } from './../../../../context/ModalContext';

export default function Message({username, reply, date, _id, removeComment}) {
    const {updateModal, updateModalData} = useContext(ModalContext);

    function onReply() {
        updateModal('MessageForm');
        updateModalData(username);
    }

    return (
        <li className="message">
            <div className="message-content">
                <h3 className="message-username">User: {username}</h3>
                <p className="message-text"><em>{formatDate(date)}</em></p>
                <p className="message-text"><strong>Message:</strong> <em>{reply}</em></p>
                <div className="message-buttons action-buttons">
                    <button onClick={onReply} className="message-reply">Reply</button>
                    <button onClick={removeComment.bind(null, _id)} className="message-delete">Delete</button>
                </div>
            </div>
        </li>
    )
}
