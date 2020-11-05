import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../actions/authActions';
import Facebook from '../components/facebook'


const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.auth.loginError);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(email, password))
        setEmail('');
        setPassword('')
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={password} id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login
                    </button>
                </form>
                <p className=" col s12 red-text text-darken-1 error-message">{errorMessage}</p>
            </div>
            <p>or</p>
            <div className="row">
                <div className="col s12 facebook">
                    <Facebook />
                </div>
            </div>
        </div>
    )
}

export default Login