import Register from "./Register/Register";
import Login from './Login/Login';



export default function Modal(props) {



    return (
        <div className="modal">
            {props.modal === 'Register' && <Register {...props} />}
            {props.modal === 'Login' && <Login {...props} />}
        </div>
    )
}
