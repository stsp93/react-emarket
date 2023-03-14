import { createContext, useState } from "react";
import Modal from '../componets/Modal/Modal';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [modal, setModal] = useState(null);
    const [modalData, setModalData] = useState({})

    function updateModal(nextModal) {
        setModal(nextModal);
    }

    function updateModalData(modalData) {
        setModalData(modalData);
    }

    function closeModal() {
        setModal(null)
    }

    return <ModalContext.Provider value={
        {
            modal,
            updateModal,
            updateModalData,
            modalData,
            closeModal,
        }
    }
    >
        {children}
        {modal && <Modal modal={modal} />}
    </ModalContext.Provider>

}

