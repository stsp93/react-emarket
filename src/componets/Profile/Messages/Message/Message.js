export default function Message() {
    return (
        <li className="message">
            <div className="message-content">
                <h3 className="message-username">User: mary</h3>
                <p className="message-text">Message: <em>Hello John</em></p>
                <div className="message-buttons action-buttons">
                    <button className="message-reply">Reply</button>
                    <button className="message-delete">Delete</button>
                </div>
            </div>
        </li>
    )
}
