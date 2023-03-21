import { ModalContext } from './../../../context/ModalContext';
import { useContext, useState, useEffect } from 'react';
import validationApi from './../../../utils/validationApi';
import CategorySelect from '../CategorySelect/CategorySelect';
import * as apiService from '../../../services/api/data';

export default function Create() {
    const { closeModal,modalData:addOwnListing } = useContext(ModalContext)
    const [payload, setPayload] = useState({ title: '', description: '', price: '', imageUrl: '', category:'Electronics'});
    const [disable, setDisable] = useState(true);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        if (Object.values(errors).some(v => v !== null)) {
            setDisable(true)
        } else {
            setDisable(false)
        }


    }, [errors])

    function onChange(e) {
        const name = e.target.name
        setPayload(x => ({ ...x, [name]: e.target.value }));
    }

    // Validations
    function minLength() {
        validationApi.minLength(payload, 'title', 3, setErrors)
    }

    function isEmpty(e) {
        const key = e.target.name
        validationApi.isEmpty(key, payload, setErrors);
    }

    function validImgUrl() {
        validationApi.validImageUrl(payload, setErrors)
    }

    function isPositiveNumber() {
        validationApi.positiveNumber(payload, setErrors)
    }

    // on Submitting

    async function onSubmit(e) {
        e.preventDefault()

        try {
            const res = await apiService.createListing(payload);
            addOwnListing(res);
            closeModal()
        } catch (error) {
            console.log(payload);
            setErrors(error);
        }

    }

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form onSubmit={onSubmit} className="user-form">
                <h2 className="title form-title">Create</h2>
                <article className="input-group">
                    <label htmlFor="title">Title</label>
                    {errors && <p className="input-error">{errors.title}</p>}
                    <i className="fa-solid fa-tag"></i>
                    <input
                        value={payload.title}
                        onChange={onChange}
                        onBlur={minLength}
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Red Hat"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="category">Category</label>
                    <i className="fa-solid fa-list-ul"></i>
                    <CategorySelect value={payload.category} onChange={onChange} />
                </article>
                <article className="input-group">
                    <label htmlFor="description">Description</label>
                    {errors && <p className="input-error">{errors.description}</p>}
                    <textarea
                        value={payload.description}
                        onChange={onChange}
                        onBlur={isEmpty}
                        name="description"
                        id="description"
                        cols="30" rows="5"
                        placeholder="Describe the item" />
                    <i className="fa-solid fa-pencil"></i>
                </article>


                <article className="input-group">
                    <label htmlFor="price">Price</label>
                    {errors && <p className="input-error">{errors.price}</p>}
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <input
                        value={payload.price}
                        onChange={onChange}
                        onBlur={isPositiveNumber}
                        id="price"
                        type="text"
                        name="price"
                        placeholder="20.99"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="location">Location</label>
                    {errors && <p className="input-error">{errors.location}</p>}
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <input
                        value={payload.location}
                        onChange={onChange}
                        onBlur={isEmpty}
                        id="location"
                        type="text"
                        name="location"
                        placeholder="New York City, NY"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="imageUrl">Image Url</label>
                    {errors && <p className="input-error">{errors.imageUrl}</p>}
                    <i className="fa-solid fa-image"></i>
                    <input
                        value={payload.imageUrl}
                        onChange={onChange}
                        onBlur={validImgUrl}
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        placeholder="http://example.com"
                    />
                </article>

                {errors.message && <p className="input-error">{errors.message}</p>}

                <article className="input-group">
                    <button disabled={disable} className="action-button">Create</button>
                </article>
            </form>
        </>
    )
}
