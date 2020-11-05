import React from 'react';
import {NavLink} from 'react-router-dom';

const IsSignedOut = () => {
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    )
}

export default IsSignedOut;