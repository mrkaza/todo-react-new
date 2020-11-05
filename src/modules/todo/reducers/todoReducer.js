const initState = {
    todos: []
}

const todoReducer = (state=initState, action) => {
    switch(action.type) {

        case 'GET_TODOS': 
            return {
                ...state, 
                todos: action.todos
            }
        case 'ADD_TODO':
            return state
        case 'DELETE_TODO':
            return state
        case 'COMPLETE_TODO':
            return state;
        default:
            return state
    }
}

export default todoReducer