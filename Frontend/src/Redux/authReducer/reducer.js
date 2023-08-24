import { USER_FAIL, USER_FORGOT_SUCCESS, USER_LOADING, USER_LOGIN_SUCCESS, USER_RESET_SUCCESS, USER_SIGNUP_SUCCESS } from "../actionTypes";


let initialState = {
    loading: false,
    error : false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){

        case USER_LOADING: {
            return {
                loading: true, error: false
            }
        }
        case USER_LOGIN_SUCCESS: {
            return {
                loading: false, error: false
            }
        }
        case USER_SIGNUP_SUCCESS: {
            return {
                loading: false, error: false
            }
        }
        case USER_FORGOT_SUCCESS: {
            return {
                loading: false, error: false
            }
        }
        case USER_RESET_SUCCESS: {
            return {
                loading: false, error: false
            }
        }
        case USER_FAIL: {
            return {
                loading: false, error: true
            }
        }

        default : return state;
    }
}