import axios from "axios"
import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_USERS, SUCCESS_USERS_UPDATE } from "../actionTypes";


const config = {
    headers: {
        "Content-Type": "application/json",
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2ZTIwNzMwMmYwYThlN2M4YzcwZWIiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2OTI4NTU4NjJ9.jfcOPD6hnARlQ0Wl0fu0bY-g6AfQt7fdevxN5Jd-Dzg"
    }
}

export const getAllRecipes = () => async (dispatch) => {
    dispatch({ type: LOADING });
    try {

        let res = await axios.get(`${process.env.REACT_APP_API_ADMIN_URL}/recipes`, config);
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
        let res = await axios.get(`${process.env.REACT_APP_API_ADMIN_URL}/users`, config);
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



export const updateUsers = (updated, handleEdit) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.patch(`${process.env.REACT_APP_API_ADMIN_URL}/users/update/${updated._id}`, updated, config);
        res = res?.data;

        if (!res.issue) {
            handleEdit();
            dispatch({
                type: SUCCESS_USERS_UPDATE,
                payload: updated
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


export const deleteUsers =(deleted, handleDelete) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.delete(`${process.env.REACT_APP_API_ADMIN_URL}/users/delete/${deleted._id}`, config);
        res = res?.data;

        if (!res.issue) {
            handleDelete();
            dispatch({
                type: SUCCESS_USERS_UPDATE,
                payload: deleted._id
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

