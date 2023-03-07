import { useContext } from "react"
import {ModalUserContext} from "../../../context/ModalUserContext"

export default function Register() {

    const {closeModal} = useContext(ModalUserContext);

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form  className="user-form" method="POST">
                <h2 className="title form-title">Register</h2>
                <article className="input-group">
                    <label htmlFor="email">Email*</label>
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@abv.bg"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="username">Username*</label>
                    <i className="fa-solid fa-user"></i>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="john123"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="password">Password*</label>
                    <i className="fa-sharp fa-solid fa-key"></i>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="repeatPassword">Repeat Password*</label>
                    <i className="fa-solid fa-repeat"></i>
                    <input
                        id="repeatPassword"
                        type="password"
                        name="repeatPassword"
                        placeholder="********"
                    />
                </article>
                <article className="input-group">
                    <p className="message-field">* Mandatory fields</p>
                </article>
                <article className="input-group">
                    <button className="action-button" >Register</button>
                </article>
            </form>
        </>

    )
}
