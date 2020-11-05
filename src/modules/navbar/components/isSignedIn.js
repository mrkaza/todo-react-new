import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../../auth/actions/authActions';

const IsSignedIn = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(logout());
    }
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><a onClick={signOut}>Logout</a></li>
        </ul>
    )
}

export default IsSignedIn;