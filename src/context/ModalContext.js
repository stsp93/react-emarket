import { createContext, useState } from "react";
import Modal from '../componets/Modal/Modal';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [modal, setModal] = useState(null);
    const [modalProps, setModalProps] = useState({})

    function updateModal(nextModal) {
        setModal(nextModal);
    }

    function updateModalProps(modalProps) {
        setModalProps(modalProps);
    }

    function closeModal() {
        setModal(null)
    }

    return <ModalContext.Provider value={
        {
            modal,
            updateModal,
            updateModalProps,
            modalProps,
            closeModal,
        }
    }
    >
        {children}
        {modal && <Modal modal={modal} />}
    </ModalContext.Provider>

}

