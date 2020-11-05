import SignIn from '../modules/auth/login/index';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Login = () => {
    const user = useSelector(state=>state.auth.user);

    if(user) return <Redirect to="/" />
    return (
        <SignIn />
    )
}

export default Login