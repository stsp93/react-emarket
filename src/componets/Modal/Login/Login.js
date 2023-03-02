export default function Login(props) {
    return (
        <>
            <button onClick={props.closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form className="user-form" method="POST">
                <h2 className="title form-title">Login</h2>
                <article className="input-group">
                    <label htmlFor="email">Email</label>
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@abv.bg"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="password">Password</label>
                    <i className="fa-sharp fa-solid fa-key"></i>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </article>
                <article className="input-group">
                    <p className="message-field"></p>
                </article>
                <article className="input-group">
                    <input className="action-button" type="submit" value="Login"/>
                </article>
            </form>
        </>
    )
}
