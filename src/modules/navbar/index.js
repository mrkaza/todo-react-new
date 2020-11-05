import React from 'react';
import {Link} from 'react-router-dom';
import IsSignedIn from './components/isSignedIn';
import IsSignedOut from './components/isSignedOut';
import {useSelector} from 'react-redux';


const Navbar = () => {
    const user = useSelector(state=>state.auth.user);
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Todo App</Link>
                {user ? (
                    <IsSignedIn />
                ) : (
                    <IsSignedOut />
                )}     
            </div>
        </nav>
    );
}

export default Navbar;