// export default function showLoading(updateModal, closeModal) {
//                 // Show Loading and remove it after 2s

// }
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';



export function useLoading() {
    const { updateModal, closeModal } = useContext(ModalContext)

    return () => {
        updateModal('Loading');

        setTimeout(() => {
            closeModal()
        }, 1000)
    }
}