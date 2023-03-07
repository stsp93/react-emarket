import { useState } from 'react';

function useModal() {
    const [modal, setModal] = useState(null);

    function navClickHandler(e) {
        e.preventDefault();
        setModal(e.target.textContent);
    }

    function closeModal() {
        setModal(null)
    }

    return {modal, navClickHandler, closeModal}
}

export default useModal;