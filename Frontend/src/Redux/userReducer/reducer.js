import { LOGOUT_USER_LOADING, VALID_USERDATA_GET_SUCCESS, VALID_USER_DELETE_SUCCESS, VALID_USER_FAIL, VALID_USER_LOADING, VALID_USER_LOGOUT_SUCCESS } from "../actionTypes";


let initialState = {
    loading: false,
    logout_loading: false,
    userdata : {},
    error : false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){

        case VALID_USER_LOADING: {
            return {
                ...state, loading: true, error: false
            }
        }
        case LOGOUT_USER_LOADING: {
            return {
                ...state, logout_loading: true, error: false
            }
        }
        case VALID_USERDATA_GET_SUCCESS: {
            return {
                ...state, loading: false, userdata: payload
            }
        }
        case VALID_USER_DELETE_SUCCESS: {
            return {
                ...state, loading: false
            }
        }
        case VALID_USER_LOGOUT_SUCCESS: {
            return {
                ...state, logout_loading: false, userdata: {}
            }
        }
        case VALID_USER_FAIL: {
            return {
                ...state, loading: false, error: true, logout_loading: false
            }
        }
        

        default : return state;
    }
}