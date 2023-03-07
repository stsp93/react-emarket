import { useContext, useState } from "react"
import {ModalContext} from "../../../context/ModalContext"
// import * as userService from "../../../services/api/user";
import showSuccess from './../../../utils/showSuccess';

export default function Register() {
    const {closeModal, updateModal} = useContext(ModalContext);
    const [error, setError] = useState({});
    const [payload, setPayload] = useState({});


    function onBlur(e) {
        console.log(e.target.name);
        // setPayload(x => ({...x, e.target.name: }))
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            // TODO: validations
            

            // await userService.register(email, username, password);

            // Show Success
            showSuccess(updateModal, closeModal);
        } catch(error) {

            console.log(error);
        }

    }

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form  className="user-form" onSubmit={onSubmit}>
                <h2 className="title form-title">Register</h2>
                <article className="input-group">
                    <label htmlFor="email">Email</label>
                    <p className="input-error">* Mandatory fields</p>
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        value={payload.email}
                        onBlur={onBlur}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@abv.bg"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="username">Username</label>
                    <p className="input-error">* Mandatory fields</p>
                    <i className="fa-solid fa-user"></i>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="john123"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="password">Password</label>
                <p className="input-error">* Mandatory fields</p>
                    <i className="fa-sharp fa-solid fa-key"></i>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <p className="input-error">* Mandatory fields</p>
                    <i className="fa-solid fa-repeat"></i>
                    <input
                        id="repeatPassword"
                        type="password"
                        name="repeatPassword"
                        placeholder="********"
                    />
                </article>
                <article className="input-group">
                    <button className="action-button" >Register</button>
                </article>
            </form>
        </>

    )
}
