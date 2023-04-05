import {ModalContext} from "../../../context/ModalContext";
import { useContext, useState } from 'react';
import { login } from "../../../services/api/user";
import { AuthContext } from './../../../context/AuthContext';
import { modals } from "../../../utils/modalUtils";
import Loading from "../Loading/Loading";

export default function Login() {
    const {closeModal, updateModal} = useContext(ModalContext);
    const {setAuth} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.target));
        try {
            setLoading(true);
            const user = await login(email, password);
            setAuth(user)
            setLoading(false);
            closeModal();
        }catch(error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form className="user-form" onSubmit={onSubmit}>
                <h2 className="title form-title">Sign in</h2>
                <article className="input-group">
                {error.message && <p className="input-error">{error.message}</p>}
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
                    {loading ? <Loading /> : <input className="action-button" type="submit" value="Login"/>}
                    
                </article>
                <article className="input-group">
                    <p>Don't have an account? <button onClick={() => updateModal(modals.register)} className="additional-button">Sign up</button></p>
                </article>
            </form>
        </>
    )
}
