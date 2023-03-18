import Register from "../componets/Modal/Register/Register";
import Login from '../componets/Modal/Login/Login';
import Loading from "../componets/Modal/Loading/Loading";
import Edit from "../componets/Modal/Edit/Edit";
import Create from '../componets/Modal/Create/Create';
import Confirm from '../componets/Modal/Confirm/Confirm';
import MessageForm from "../componets/Modal/MessageForm/MessageForm";

/**
 * Object to map modal components
 */
export const modalMapper = {
    'Register': <Register />,
    'Login': <Login />,
    'Edit': <Edit />,
    'Loading': <Loading />,
    'Create': <Create />,
    'Confirm': <Confirm />,
    'MessageForm': <MessageForm />
}

/**
 * Object of all modals
 */
export const modals = {
    register:'Register',
    login:'Login',
    edit:'Edit',
    loading:'Loading',
    create:'Create',
    confirm:'Confirm',
    message:'MessageForm',
}