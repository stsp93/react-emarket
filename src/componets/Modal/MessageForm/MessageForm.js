
import { useContext, useState, useEffect } from 'react';
import {useLoading} from '../../../hooks/useLoading';
import validationApi from '../../../utils/validationApi';
import { ModalContext } from '../../../context/ModalContext';
import * as apiService from'../../../services/api/data'

export default function SendMessage() {
    const { closeModal,updateModalData, modalData } = useContext(ModalContext)
    const [payload, setPayload] = useState({username: typeof modalData === 'string' ? modalData : '', messageText:''});
    const [errors, setErrors] = useState({});
    const showLoading = useLoading()

    useEffect(() => {
        return () => updateModalData(null)
    })

    function onChange(e) {
        setPayload(p => ({...p, [e.target.name]: e.target.value}))
    }

    // validations

    function isEmpty(e) {
        validationApi.isEmpty(e.target.name,payload, setErrors)
    }

    // on Send click

    async function onSubmit(e) {
        e.preventDefault();

        try {
            await apiService.sendMessage(payload.username, payload.messageText);
            showLoading();
        } catch (error) {
            setErrors(error)
        }
    } 

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form className="user-form" >
                <h2 className="form-title title">Send a Message</h2>
                <article className="input-group">
                    <label htmlFor="username">To :</label>
        {<p className="input-error">{errors.username}</p>}
                    <i className="fa-solid fa-user"></i>
                    <input
                        value={payload.username}
                        onChange={onChange}
                        onBlur={isEmpty}
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username1234"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="messageText">Message</label>
                    {<p className="input-error">{errors.messageText}</p>}
                    <textarea
                        value={payload.message}
                        onChange={onChange}
                        onBlur={isEmpty}
                        name="messageText"
                        id="messageText"
                        cols="30"
                        rows="5"
                        placeholder="Type here..." />
                    <i className="fa-solid fa-pencil"></i>
                </article>

                {errors.message && <p className="input-error">{errors.message}</p>}



                <article className="input-group">
                    <button onClick={onSubmit} className="action-button">Send</button>
                </article>
            </form>
        </>
    )
}
