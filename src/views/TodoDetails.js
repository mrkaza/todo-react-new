import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';


const TodoDetails = (props) => {
    const user = useSelector(state=>state.auth.user);
    const todos = useSelector(state=> state.todo)

    const todoArr = todos.todos.filter(todo => {
        const id = props.match.params.id;
        return todo.id === id
    })

    const todo = todoArr[0]

    if(!user) return <Redirect to="/login" />

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6 offset-l3">
                <div className="card">
                        <div className="todo-item">
                            <p className="title teal white-text">{todo.title}</p>
                            <p className="desc">{todo.description}</p>
                            <div className="edit">
                                {/* <p className="created">Created at: {moment(todo.createdAt.toDate()).calendar()}</p> */}
                                {todo.completed ? (
                                    <p className="created">Completed: true</p>
                                ) : (
                                    <p className="created">Completed: false</p>
                                )}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoDetails;