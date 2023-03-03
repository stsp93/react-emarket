import './Messages.css'
import Message from './Message/Message';

export default function Messages() {
    return (
        <>
            <h2 className="title main-title">Messages</h2>

            <ul className="messages-list">
                <Message />
            </ul>

            <h4 className='message-text'>You have no messages</h4>

        </>
    )
}
