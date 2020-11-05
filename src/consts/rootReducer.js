import {combineReducers} from 'redux';
import authReducer from '../modules/auth/reducers/authReducer'
import todoReducer from '../modules/todo/reducers/todoReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer
})

export default rootReducer