import { createContext, useState, useEffect } from "react";
import Modal from '../componets/Modal/Modal';
import * as authService from "../services/api/auth";

export const ModalUserContext = createContext();

export const ModalUserProvider = ({ children }) => {

    const [modal, setModal] = useState(null);
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(authService.getUser())
    }, [modal])

    function updateModal(nextModal) {
        setModal(nextModal);
    }

    function closeModal() {
        setModal(null)
    }

    return <ModalUserContext.Provider value={
        {
            modal,
            updateModal,
            closeModal,
            user
        }
    }
    >
        {children}
        {modal && <Modal modal={modal} />}
    </ModalUserContext.Provider>

}

