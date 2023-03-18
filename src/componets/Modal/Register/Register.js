import { useContext, useState, useEffect } from "react"
import { ModalContext } from "../../../context/ModalContext"
import * as userService from "../../../services/api/user";
import { useLoading } from '../../../hooks/useLoading';
import validationApi from "../../../utils/validationApi";
import { AuthContext } from './../../../context/AuthContext';
import { modals } from "../../../utils/modalUtils";

export default function Register() {
    const { closeModal, updateModal } = useContext(ModalContext);
    const { setAuth } = useContext(AuthContext)
    const [errors, setErrors] = useState({});
    const [disable, setDisable] = useState(true);
    const showLoading = useLoading()

    const [payload, setPayload] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    });

    useEffect(() => {
        if (Object.values(errors).some(v => v !== null)) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [errors])

    function onChange(e) {
        setPayload(x => ({ ...x, [e.target.name]: e.target.value }))
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const { email, username, password } = payload
            const user = await userService.register(email, username, password);
            setAuth(user);
            // Show Loading
            showLoading();
        } catch (error) {
            setErrors(error)
        }
    }

    // Validations 
    function minLength(e) {
        const key = e.target.name;
        validationApi.minLength(payload, key, 3, setErrors)
    }
    function passwordsMatch() {
        validationApi.passwordsMatch(payload, setErrors)
    }


    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form className="user-form" onSubmit={onSubmit}>
                <h2 className="title form-title">Register</h2>
                <article className="input-group">
                    <label htmlFor="email">Email</label>
                    {errors.email && <p className="input-error">{errors.email}</p>}

                    <i className="fa-solid fa-envelope"></i>
                    <input
                        value={payload.email}
                        onChange={onChange}
                        onBlur={minLength}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@abv.bg"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="username">Username</label>
                    {errors.username && <p className="input-error">{errors.username}</p>}
                    <i className="fa-solid fa-user"></i>
                    <input
                        value={payload.username}
                        onChange={onChange}
                        onBlur={minLength}
                        id="username"
                        name="username"
                        type="text"
                        placeholder="john123"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="password">Password</label>
                    {errors.password && <p className="input-error">{errors.password}</p>}
                    <i className="fa-sharp fa-solid fa-key"></i>
                    <input
                        value={payload.password}
                        onChange={onChange}
                        onBlur={(e) => {
                            minLength(e);
                            passwordsMatch()
                        }}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    {errors.repeatPassword && <p className="input-error">{errors.repeatPassword}</p>}
                    <i className="fa-solid fa-repeat"></i>
                    <input
                        value={payload.repeatPassword}
                        onChange={onChange}
                        onBlur={(e) => {
                            minLength(e);
                            passwordsMatch()
                        }}
                        id="repeatPassword"
                        type="password"
                        name="repeatPassword"
                        placeholder="********"
                    />
                </article>
                {errors.message && <p className="input-error">{errors.message}</p>}
                <article className="input-group">
                    <button disabled={disable} className="action-button" >Register</button>
                </article>
                <article className="input-group">
                    <p >Already have account? <button onClick={() => updateModal(modals.login)} className="additional-button">Sign in</button></p>
                </article>
            </form>
        </>

    )
}
