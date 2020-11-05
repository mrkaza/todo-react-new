import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const TodoDetails = () => {
    const user = useSelector(state=>state.auth.user);
    if(!user) return <Redirect to="/login" />
    
    return (
        <div>Todo details</div>
    )
}

export default TodoDetails;