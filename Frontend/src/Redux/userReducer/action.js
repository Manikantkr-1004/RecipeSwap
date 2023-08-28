import { LOGOUT_USER_LOADING, VALID_USERECIPE_GET_SUCCESS, VALID_USERRECIPE_ADD_LOADING, VALID_USER_FAIL, VALID_USER_LOADING } from "../actionTypes"
import axios from "axios"

export const userdataget = (token) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.get("https://recipeswap.onrender.com/users/profile",{
        headers: {
            "auth": `${token}`,
        }
    })
}

export const userecipeget = (token) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.get("https://recipeswap.onrender.com/recipe/userrecipies",{
        headers: {
            "auth": `${token}`,
        }
    })
}

export const usereviewget = (token) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.get("https://recipeswap.onrender.com/recipe/users/comments",{
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

export const userecipeadd = (token,data) => (dispatch)=> {
    dispatch({type:VALID_USERRECIPE_ADD_LOADING});

    return axios.post("https://recipeswap.onrender.com/recipe/add",data,{
        headers: {
            "auth": `${token}`,
        }
    })
}

export const userecipeupdate = (token,id,data) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.patch(`https://recipeswap.onrender.com/recipe/update/${id}`,data,{
        headers: {
            "auth": `${token}`,
        }
    })
}

export const userecipedel = (id,token) => (dispatch)=> {
    dispatch({type:VALID_USER_LOADING});

    return axios.delete(`https://recipeswap.onrender.com/recipe/delete/${id}`,{
        headers: {
            "auth": `${token}`,
        }
    })
}