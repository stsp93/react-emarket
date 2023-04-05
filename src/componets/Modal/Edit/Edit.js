import { useContext, useState, useEffect } from 'react';
import CategorySelect from '../CategorySelect/CategorySelect';
import { ModalContext } from './../../../context/ModalContext';
import validationApi from './../../../utils/validationApi';
import * as apiService from './../../../services/api/data';
import * as dropboxApi from '../../../services/dropboxApi';
import Loading from '../Loading/Loading';
import FormImages from '../common/FormImages/FormImages';


export default function Edit() {
    const { closeModal, modalData } = useContext(ModalContext);
    const { offer, editListing } = modalData;
    const [payload, setPayload] = useState(offer);
    const [errors, setErrors] = useState({});
    const [disable, setDisable] = useState(true);
    const [imageLoading, setImageLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    // Check if no image
    if(payload.images[0] === 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'){
        payload.images = [];
    }

    useEffect(() => {
        if (Object.values(errors).some(v => v !== null)) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [errors])

    function onChange(e) {
        setPayload(x => ({ ...x, [e.target.name]: e.target.value }));
    }

    // Validations
    function minLength(e) {
        validationApi.minLength(payload, 'title', 3, setErrors);
    }

    function isEmpty(e) {
        const key = e.target.name
        validationApi.isEmpty(key, payload, setErrors);
    }



    function isPositiveNumber() {
        validationApi.positiveNumber(payload, setErrors)
    }

    // images logic

    async function onUpload(e) {
        const images = Array.from(e.target.files);
        // File count, type, size validations
        if(images.length + payload.images.length > 3) return setErrors(x => ({...x, images: 'Max 3 images allowed'}))
        const valid = validationApi.imagesValidation(images, setErrors);
        if (!valid) return;
        
        setImageLoading(true)
        try {
           let links = await Promise.all(images.map(async i => {
            const res = await dropboxApi.uploadImage(i);
            return (await dropboxApi.createLink(res)).url + '&raw=1';
        }))

        // remove duplicates and set new imgs
        links = links.filter(l => !payload.images.includes(l))
        setPayload(x=> ({...x, images: [...payload.images,...links]}));
        } catch (error) {
            console.log(error);
        }
        setImageLoading(false)
    }

    async function deleteImage(imgUrl) {

        setImageLoading(true)
        try {
            await dropboxApi.deleteImage(imgUrl);
            setPayload(x=> ({...x, images: payload.images.filter(img => img !== imgUrl)}));

        } catch(error) {
            console.log(error);
        }
        setImageLoading(false)
    }

    //Submitting to server

    async function onSubmit(e) {
        e.preventDefault()
        if(imageLoading) return;

        try {
            setLoading(true);
            const edited = await apiService.editListing(payload._id, payload);
            editListing(edited);
            setLoading(false);
            closeModal();
        } catch (error) {
            setLoading(false);
            setErrors(error);
        }
    }

    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>

            <form className="user-form" >
                <h2 className="form-title title">Edit</h2>
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
                    <CategorySelect onChange={onChange} value={payload.category} />
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
                        cols="30"
                        rows="5"
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
                    <label htmlFor="images">Images</label>
                    {errors && <p className="input-error">{errors.images}</p>}
                    {imageLoading && <Loading />}
                    {payload.images && <FormImages deleteImage={deleteImage} images={payload.images} />}
                    <i className="fa-solid fa-image"></i>
                    <input
                        onChange={onUpload}
                        id="images"
                        type="file"
                        name="images"
                        placeholder="http://example.com"
                        multiple={true}
                    />
                </article>
                {errors.message && <p className="input-error">{errors.message}</p>}
                <article className="input-group">
                    {loading ? <Loading /> : <button onClick={onSubmit} disabled={disable} className="action-button">Edit</button>}
                </article>
            </form>
        </>
    )
}
