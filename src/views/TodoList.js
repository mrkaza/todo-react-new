import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'
import Todo from '../modules/todo/index';

const TodoList = () => {
    const user = useSelector(state=>state.auth.user);

    if(!user) return <Redirect to="/login" />
    return (
        <Todo />
    )
}

export default TodoList;