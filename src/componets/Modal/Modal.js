import Register from "./Register/Register";
import Login from './Login/Login';
import { useState, useEffect } from 'react';
import Overlay from "./Overlay";
import Loading from "./Loading/Loading";


export default function Modal(props) {
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, [])

    const modalMapper = {
        'Register': <Register />,
        'Login': <Login />,
        'Loading': <Loading />
    }


    return (
        <>
            <div  style={{ opacity }} className="modal">
                {modalMapper[props.modal]}
            </div>
            <Overlay />
        </>
    )
}
