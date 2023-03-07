import { createContext, useState } from "react";
import Modal from './../componets/Modal/Modal';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [modal, setModal] = useState(null);

    function updateModal(e) {
        setModal(e.target.textContent);
    }

    function closeModal() {
        setModal(null)
    }

    return <ModalContext.Provider value={
        {
            modal,
            updateModal,
            closeModal
        }
    }>
        {children}
        {modal && <Modal modal={modal} />}
    </ModalContext.Provider>

}

