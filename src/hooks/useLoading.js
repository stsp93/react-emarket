// export default function showLoading(updateModal, closeModal) {
//                 // Show Loading and remove it after 2s

// }
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { modals } from '../utils/modalUtils';



export function useLoading() {
    const { updateModal, closeModal } = useContext(ModalContext)

    return () => {
        updateModal(modals.loading);

        setTimeout(() => {
            closeModal()
        }, 1000)
    }
}