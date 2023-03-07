import { useEffect, useState } from 'react';
import { useContext } from 'react';
import {ModalUserContext} from '../../context/ModalUserContext';


export default function Overlay(props) {
    const {closeModal} = useContext(ModalUserContext);
    const [opacity, setOpacity] = useState(0);

    
    useEffect(() => {
        setOpacity(0.5);

        // Close modal with Esc key
        const handleEsc = function(e) {
            if(e.key === 'Escape') {
                closeModal();
            }
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [closeModal])

   

    return (
        <div  onClick={closeModal} className="overlay" style={{ opacity }}></div>
    )
}
