import {firebaseDb} from '../../../consts/fbConfig';

export const getTodos = (userId) => {
    return (dispatch) => {
        const todos = []
        firebaseDb.collection('todos').where('userId', '==', userId).get().then(response => {
            response.forEach( doc => {
                const todo = doc.data();
                todo.id = doc.id;
                todos.push(todo);                
                dispatch({type:'GET_TODOS', todos})
            })
        })
    }
}

export const addTodo = (todo, userId) => {
    return (dispatch) => {
        firebaseDb.collection('todos').add({
            title: todo.title,
            description: todo.description,
            completed: false,
            createdAt: new Date(),
            userId: userId
        }).then((doc) => {
            
            const todo = doc;
            dispatch({type: 'ADD_TODO', todo});
            dispatch(getTodos(userId));
        }).catch(error => {
            dispatch({type:'ADD_TODO',error})
        })
    }
}

export const deleteTodo = (id, userId) => {
    return (dispatch) => {
        firebaseDb.collection('todos').doc(id).delete().then(() => {
            
            dispatch({type:'DELETE_TODO'});
            dispatch(getTodos(userId));
        })
    }
}

export const completeTodo = (id,userId) => {
    return (dispatch) => {
        firebaseDb.collection('todos').doc(id).update({
            completed: true
        }).then(() => {
            
            dispatch({type: 'COMPLETE_TODO'});
            dispatch(getTodos(userId));
        })
    }
}


// export const todoDetails = (id) => {
//     return (dispatch) => {
//         firebaseDb.collection('todos').where('id', '==', id).get().then(response => {
//             response.forEach(todo => {
//                 dispatch({type:'TODO_DETAILS', todo})
//             })
//         })
//     }
// }
