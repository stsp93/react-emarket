import { useEffect, useState } from 'react';


export default function Overlay(props) {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(0.5)

        // Close modal with Esc key
        const handleEsc = function(e) {
            if(e.key === 'Escape') {
                props.closeModal();
            }
        }
        window.addEventListener('keydown', handleEsc)

        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

   

    return (
        <div  onClick={props.closeModal} className="overlay" style={{ opacity }}></div>
    )
}
