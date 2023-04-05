import formatDate from "../../../../utils/formatDate"
import { useContext } from 'react';
import { ModalContext } from './../../../../context/ModalContext';
import * as apiService from './../../../../services/api/data'
import { modals } from "../../../../utils/modalUtils";

export default function Message({username, reply, date, _id, removeComment}) {
    const {updateModal, updateModalData} = useContext(ModalContext);

    function onReply() {
        updateModal(modals.message);
        updateModalData(username);
    }

    const deleteFunction = () => {
        apiService.deleteMessage(_id);
        removeComment(_id);
    }
    async function onDelete() {
        try {
            updateModal(modals.confirm);
            updateModalData(() =>  deleteFunction);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <li className="message">
            <div className="message-content">
                <h3 className="message-username"><em>User:</em> {username}</h3>
                <p className="message-text"><em>{formatDate(date)}</em></p>
                <p className="message-text"><strong>Message:</strong> <em>{reply}</em></p>
                <div className="message-buttons action-buttons">
                    <button onClick={onReply} className="message-reply">Reply</button>
                    <button onClick={onDelete} className="message-delete">Delete</button>
                </div>
            </div>
        </li>
    )
}
