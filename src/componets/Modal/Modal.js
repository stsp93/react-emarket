import { useState, useEffect } from 'react';
import Overlay from "./Overlay";
import { modalMapper } from './modalMapper';

export default function Modal(props) {
    const {modal} = props
    const [opacity, setOpacity] = useState(0);
    
    // useEffect for opacity animation
    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, [])

    /**
     * Scroll to top and returns modal component from specified string
     * @returns modal component 
     */
    function showModal() {
        window.scrollTo(0, 0)
        return modalMapper[modal]
    }

    return (
        <>
            <div  style={{ opacity }} className="modal">
                {modal && showModal()}
            </div>
            <Overlay />
        </>
    )
}
