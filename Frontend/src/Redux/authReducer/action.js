import { USER_LOADING } from "../actionTypes";
import axios from "axios";

export const usersignup = (data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post("https://recipeswap.onrender.com/users/register",data);
}

export const userlogin = (data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post("https://recipeswap.onrender.com/users/login",data);
}

export const userforgot = (data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post("https://recipeswap.onrender.com/users/forgot",data);
}

export const usereset = (token,data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post(`https://recipeswap.onrender.com/users/resetpassword/${token}`,data);
}