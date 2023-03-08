import Register from "./Register/Register";
import Login from './Login/Login';
import { useState, useEffect } from 'react';
import Overlay from "./Overlay";
import Loading from "./Loading/Loading";
import Edit from "./Edit/Edit";
import Create from './Create/Create';


export default function Modal(props) {
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, [])

    const modalMapper = {
        'Register': <Register />,
        'Login': <Login />,
        'Loading': <Loading />,
        'Edit': <Edit />,
        'Create': <Create />
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
