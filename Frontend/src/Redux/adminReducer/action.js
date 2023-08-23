import axios from "axios"
import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_USERS } from "../actionTypes";


const config = {
    headers: {
        "Content-Type": "application/json",
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU1Y2M0NzUwNDAyMGI4NmE0NTkzY2MiLCJ1c2VybmFtZSI6Imhhc2ltIiwiZW1haWwiOiJzaGFpa2hoYXNpbTI1N0BnbWFpbC5jb20iLCJpYXQiOjE2OTI3ODE2NTF9._LmhrBK0toxNJRTzSf2hOELdOMYa36sZIcbHkSzc6Ps"
    }
}

export const getAllRecipes = () => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.get("https://recipeswap.onrender.com/recipe");
        res = res?.data;
        if (!res.issue) {
            dispatch({
                type: SUCCESS_ALL_RECIPE,
                payload: res.recipes
            })
        } else {
            dispatch({
                type: ERROR,
                payload: res.error
            })
        }

    } catch (error) {
        dispatch({ type: ERROR, payload: error });
    }
}



export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.get("https://recipeswap.onrender.com/users", config);
        res = res?.data;

        if (!res.issue) {
            dispatch({
                type: SUCCESS_USERS,
                payload: res.users
            })
        } else {
            dispatch({
                type: ERROR,
                payload: res.error
            })
        }

    } catch (error) {
        dispatch({ type: ERROR, payload: error });
    }
}