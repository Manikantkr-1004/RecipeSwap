import { VALID_USER_LOADING } from "../actionTypes"
import axios from "axios"

export const userdataget = (token) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.get("https://recipeswap.onrender.com/users/profile",{
        headers: {
            "auth": `${token}`,
        }
    })
}
