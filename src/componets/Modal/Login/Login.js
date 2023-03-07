import {ModalContext} from "../../../context/ModalContext";
import { useContext, useState } from 'react';
import { login } from "../../../services/api/user";
import showSuccess from './../../../utils/showSuccess';
import { AuthContext } from './../../../context/AuthContext';

export default function Login() {
    const {closeModal, updateModal} = useContext(ModalContext);
    const {setAuth} = useContext(AuthContext)
    const [error, setError] = useState('')

    async function onSubmit(e) {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.target));
        try {
            // TODO: validations
            const user = await login(email, password);
            setAuth(user)
            // Show Success window and remove it after 2s
            showSuccess(updateModal, closeModal);
        }catch(error) {
            console.log(error);
            setError('Username or Passoword are incorrect')
        }
    }

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form className="user-form" onSubmit={onSubmit}>
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
                {error && <p className="input-error">{error}</p>}
                <article className="input-group">
                    <input className="action-button" type="submit" value="Login"/>
                </article>
            </form>
        </>
    )
}
