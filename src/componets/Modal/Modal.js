import Register from "./Register/Register";
import Login from './Login/Login';
import { useState, useEffect } from 'react';
import Overlay from "./Overlay";


export default function Modal(props) {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(o => 1);
        return () => setOpacity(o => 0);
    }, [])

    return (
        <>
            <div  style={{ opacity }} className="modal">
                {props.modal === 'Register' && <Register {...props} />}
                {props.modal === 'Login' && <Login {...props} />}
            </div>
            <Overlay closeModal={props.closeModal} />
        </>
    )
}
