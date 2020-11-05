import {firebaseAuth} from '../../../consts/fbConfig.js';
import firebase from 'firebase/app'

export const signUp = (newUser) => {
    return (dispatch) => {
        firebaseAuth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((user) => {
            dispatch({type: 'REGISTER', user})
        }).catch(error => {
            dispatch({type: 'REGISTER_ERROR', error})
        })
    }
}

export const signIn = (email,password) => {
    return (dispatch) => {
        firebaseAuth.signInWithEmailAndPassword(
            email,
            password
        ).then(user => {
            dispatch({type: 'LOGIN', user})
        }).catch(error => {
            dispatch({type:'LOGIN_ERROR', error})
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        firebaseAuth.signOut().then(() => {
            dispatch({type:'LOGOUT'})
        })
    }
}

export const facebook = () => {
    return (dispatch) => {
        const provider =new firebase.auth.FacebookAuthProvider();

        firebaseAuth.signInWithPopup(provider).then(user => {
            dispatch({type:'FACEBOOK_LOGIN', user})
        })
    }
}