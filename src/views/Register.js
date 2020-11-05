import SignUp from '../modules/auth/register/index';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Register = () => {
    const user = useSelector(state=>state.auth.user);

    if(user) return <Redirect to="/" />
    return (
        <SignUp />
    )
}

export default Register