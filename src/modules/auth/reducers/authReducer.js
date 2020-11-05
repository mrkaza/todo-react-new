const initState = {
    loginError: null,
    regError: null,
    user: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.user.user,
                loginError: null,
                regError: null
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                regError: action.error.message
            }
        case 'LOGIN':
            return {
                ...state,
                user:action.user.user,
                loginError: null,
                regError: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.error.message
            }
        case 'FACEBOOK_LOGIN':
            return {
                ...state,
                user: action.user.user,
                loginError: null,
                regError: null
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loginError: null,
                regError: null
            }
        default:
            return state
    }
}

export default authReducer