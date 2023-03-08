import { ModalContext } from './../../../context/ModalContext';
import { useContext } from 'react';

export default function Create() {

    const { closeModal } = useContext(ModalContext)
    return (
        <>
            <button onClick={closeModal} className="close-modal">
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <form class="user-form" method="POST">
                <h2 class="title form-title">Create</h2>
                <article class="input-group">
                    <label for="title">Title*</label>
                    <p className="input-error">Error lorem</p>
                    <i class="fa-solid fa-tag"></i>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Red Hat"
                    />
                </article>
                <article class="input-group">
                    <label for="category">Category*</label>
                    <p className="input-error">Error lorem</p>
                    <i class="fa-solid fa-list-ul"></i>
                    <select name="category" id="category">
                        <option value="Clothing">Clothing</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Deals">Deals</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Hobbies">Hobbies</option>
                        <option value="Housing">Housing</option>
                    </select>
                </article>
                <article class="input-group">
                    <label for="description">Description*</label>
                    <textarea name="description" id="description" cols="30" rows="5" placeholder="Describe the item"></textarea>
                    <i class="fa-solid fa-pencil"></i>
                </article>


                <article class="input-group">
                    <label for="price">Price*</label>
                    <p className="input-error">Error lorem</p>
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <input
                        id="price"
                        type="text"
                        name="price"
                        placeholder="20.99"
                    />
                </article>
                <article class="input-group">
                    <label for="imageUrl">Image Url</label>
                    <p className="input-error">Error lorem</p>
                    <i class="fa-solid fa-image"></i>
                    <input
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        placeholder="http://example.com"
                    />
                </article>

                <p className="input-error">Error lorem</p>

                <article class="input-group">
                    <button disabled class="action-button">Create</button>
                </article>
            </form>
        </>
    )
}
