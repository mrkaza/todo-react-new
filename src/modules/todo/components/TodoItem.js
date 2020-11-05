import React from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, completeTodo} from '../actions/todoActions';


const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const userId = useSelector(state=> state.auth.user.uid)

    const completedTodo = () => {
        dispatch(completeTodo(todo.id, userId));
    }

    const deleteSelected = () => {
        dispatch(deleteTodo(todo.id,userId));
    }


    return (
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="todo-item">
                    <div className="actions teal">
                        <p className="title"><Link to={'/todo/'+ todo.id}>{todo.title}</Link></p>
                        <div className="action-btn">
                            <button className="btn-small btn-floating green" onClick={completedTodo}><i className="material-icons">done</i></button>
                            <button className="btn-small btn-floating red" onClick={deleteSelected}><i className="material-icons">delete</i></button>
                        </div>
                    </div>
                    <p className={`desc ${todo.completed ? 'completed' : ""}` }>{todo.description}</p>
                    <div className="edit">
                    <p className="created">
                        Created at:
                    </p>
                        <button className="btn-small btn-floating grey"><i className="material-icons">edit</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default TodoItem;