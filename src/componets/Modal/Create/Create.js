import { ModalContext } from './../../../context/ModalContext';
import { useContext, useState, useEffect } from 'react';
import validationApi from './../../../utils/validationApi';
import CategorySelect from '../CategorySelect/CategorySelect';
import * as apiService from '../../../services/api/data';
import * as dropboxApi from '../../../services/dropboxApi';
import Loading from '../Loading/Loading';
import FormImages from './../common/FormImages/FormImages';

export default function Create() {
    const { closeModal, modalData: addOwnListing } = useContext(ModalContext)
    const [payload, setPayload] = useState({ title: '', description: '', price: '', location: '', images: [], category: 'Electronics' });
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ title: 'Enter title', description: 'Enter description', location: 'Enter location', price: 'Enter price' });

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

    // images logic 
    async function onUpload(e) {
        const images = Array.from(e.target.files);
        // File count, type, size validations
        if(images.length + payload.images.length > 3) return setErrors(x => ({...x, images: 'Max 3 images allowed'}))
        const valid = validationApi.imagesValidation(images, setErrors);
        console.log(valid);
        if (!valid) return;

        setLoading(true)
        let links = await Promise.all(images.map(async i => {
            const res = await dropboxApi.uploadImage(i);
            return (await dropboxApi.createLink(res)).url + '&raw=1';
        }))

        // remove duplicates and set new imgs
        links = links.filter(l => !payload.images.includes(l))
        setPayload(x => ({ ...x, images: [...payload.images,...links] }));
        setLoading(false)
    }

    async function deleteImage(imgUrl) {

        setLoading(true)
        try {
            await dropboxApi.deleteImage(imgUrl);
            setPayload(x => ({ ...x, images: payload.images.filter(img => img !== imgUrl) }));

        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    // Validations
    function minLength() {
        validationApi.minLength(payload, 'title', 3, setErrors)
    }

    function isEmpty(e) {
        const key = e.target.name
        validationApi.isEmpty(key, payload, setErrors);
    }

    function isPositiveNumber() {
        validationApi.positiveNumber(payload, setErrors)
    }

    // on Submitting
    async function onSubmit(e) {
        e.preventDefault()
        if (loading) return;

        try {
            const res = await apiService.createListing(payload);
            addOwnListing(res);
            closeModal()
            console.log(res);
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
                <h2 className="title form-title">Create listing</h2>
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
                    <label htmlFor="imageFile">Upload Images</label>
                    {errors && <p className="input-error">{errors.images}</p>}
                    {loading && <Loading />}
                    {payload.images && <FormImages deleteImage={deleteImage} images={payload.images} />}
                    <i className="fa-solid fa-image"></i>
                    <input
                        onChange={onUpload}
                        id="imageFile"
                        type="file"
                        name="imageFile"
                        placeholder="http://example.com"
                        multiple={true}
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
