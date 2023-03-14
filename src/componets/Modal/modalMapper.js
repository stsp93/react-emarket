import Register from "./Register/Register";
import Login from './Login/Login';
import Loading from "./Loading/Loading";
import Edit from "./Edit/Edit";
import Create from './Create/Create';
import Confirm from './Confirm/Confirm';
import MessageForm from "./MessageForm/MessageForm";

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