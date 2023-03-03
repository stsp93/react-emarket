import './Messages.css'
import Message from './Message/Message';

export default function Messages() {
    return (
        <>
            <h2 className="title main-title">Messages</h2>

            <ul className="messages-list">
                <Message />
            </ul>

            <p className='no-offers'>You have no messages</p>

        </>
    )
}
