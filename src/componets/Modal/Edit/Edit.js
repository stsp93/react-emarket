import { useContext, useState } from 'react';
import { ModalContext } from './../../../context/ModalContext';

export default function Edit() {
    const { closeModal,modalProps } = useContext(ModalContext);

    const [payload, setPayload] = useState(modalProps);

    function onChange(e) {
        setPayload(x => ({ ...x, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>

            <form className="user-form" method="POST">
                <h2 className="form-title title">Edit</h2>
                <article className="input-group">
                    <label htmlFor="title">Title*</label>
                    <p className="input-error">Error lorem</p>
                    <i className="fa-solid fa-tag"></i>
                    <input
                    value={payload.title}
                    onChange={onChange}
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Red Hat"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="category">Category*</label>
                    <p className="input-error">Error lorem</p>
                    <i className="fa-solid fa-list-ul"></i>
                    <select 
                    name="category" 
                    id="category"
                    defaultValue={payload.category}
                    >
                        <option value="Clothing">Clothing</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Deals">Deals</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Hobbies">Hobbies</option>
                        <option value="Housing">Housing</option>
                    </select>
                </article>
                <article className="input-group">
                    <label htmlFor="description">Description*</label>
                    <textarea 
                    value={payload.description}
                    onChange={onChange}
                    name="description" 
                    id="description" 
                    cols="30" 
                    rows="5" 
                    placeholder="Describe the item" />
                    <i className="fa-solid fa-pencil"></i>
                </article>


                <article className="input-group">
                    <label htmlFor="price">Price*</label>
                    <p className="input-error">Error lorem</p>
                    <i className="fa-solid fa-money-check-dollar"></i>
                    <input
                    value={payload.price}
                    onChange={onChange}
                        id="price"
                        type="text"
                        name="price"
                        placeholder="20.99"
                    />
                </article>
                <article className="input-group">
                    <label htmlFor="imageUrl">Image Url</label>
                    <p className="input-error">Error lorem</p>
                    <i className="fa-solid fa-image"></i>
                    <input
                    value={payload.imageUrl}
                    onChange={onChange}
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        placeholder="http://example.com"
                    />
                </article>


                <p className="input-error">Error lorem</p>


                <article className="input-group">
                    <button className="action-button">Edit</button>
                </article>
            </form>
        </>
    )
}
