import Register from "./Register/Register";
import Login from './Login/Login';
import { useState, useEffect } from 'react';
import Overlay from "./Overlay";
import Loading from "./Loading/Loading";
import Edit from "./Edit/Edit";
import Create from './Create/Create';
import Confirm from './Confirm/Confirm';
import MessageForm from "./MessageForm/MessageForm";


export default function Modal(props) {
    const {modal} = props
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, [])

    const modalMapper = {
        'Register': <Register />,
        'Login': <Login />,
        'Edit': <Edit />,
        'Loading': <Loading />,
        'Create': <Create />,
        'Confirm': <Confirm />,
        'MessageForm': <MessageForm />
    }

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
