import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import {getTodos} from './actions/todoActions';


const Todo = () => {
    const userId = useSelector(state=> state.auth.user.uid)
    const dispatch = useDispatch();
    const todos = useSelector(state=> state.todo);

    useEffect(() => {
        dispatch(getTodos(userId))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <TodoForm />
                </div>
                {/* <div className="col s12">
                </div> */}
                {todos.todos && todos.todos.length === 0 ? (
                    <div className="col s12">
                        No todos.
                    </div>
                ) : (
                    <div className="col s12">
                        {todos.todos && todos.todos.map(todo => {
                            return (
                                <TodoItem todo={todo} key={todo.id} />
                            )
                        })}
                    </div>
                )}
            </div>
        </div>

    )
}

export default Todo;