const initState = {
    errorMessage: null,
    user: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.user.user,
                errorMessage: null
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                errorMessage: action.error.message
            }
        case 'LOGIN':
            return {
                ...state,
                user:action.user.user,
                errorMessage:null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorMessage: action.error.message
            }
        case 'FACEBOOK_LOGIN':
            return {
                ...state,
                user: action.user.user,
                errorMessage: null
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                errorMessage: null
            }
        default:
            return state
    }
}

export default authReducer