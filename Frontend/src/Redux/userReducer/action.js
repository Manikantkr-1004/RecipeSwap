import { LOGOUT_USER_LOADING, VALID_USER_LOADING } from "../actionTypes"
import axios from "axios"

export const userdataget = (token) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.get("https://recipeswap.onrender.com/users/profile",{
        headers: {
            "auth": `${token}`,
        }
    })
}

export const userlogout = (token) => (dispatch)=> {
    dispatch({type:LOGOUT_USER_LOADING});

    return axios.get("https://recipeswap.onrender.com/users/logout",{
        headers: {
            "auth": `${token}`,
        }
    })
}