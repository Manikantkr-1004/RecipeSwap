import axios from "axios"
import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_LOGOUT, SUCCESS_MAXUSERPOST, SUCCESS_RECIPES_ADD, SUCCESS_RECIPES_DELETE, SUCCESS_RECIPES_UPDATE, SUCCESS_USERS, SUCCESS_USERS_ADD, SUCCESS_USERS_AVATAR_UPDATE, SUCCESS_USERS_DELETE, SUCCESS_USERS_UPDATE } from "../actionTypes";


const config = {
    headers: {
        "Content-Type": "application/json",
        "auth": ""
    }
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2ZTIwNzMwMmYwYThlN2M4YzcwZWIiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2OTI4NTU4NjJ9.jfcOPD6hnARlQ0Wl0fu0bY-g6AfQt7fdevxN5Jd-Dzg

export const getTokenCookie = (data)=>{
    config.headers.auth = data;

}
// logout 
export const logoutAdmin = (token)=> async(dispatch) => {
    try {
        let res = await axios.get(`${process.env.REACT_APP_API_ADMIN_URL}/logout`, { headers: { "auth": token } });
        
        if (!res.issue) {
            dispatch({
                type: SUCCESS_LOGOUT,
                payload: res
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

// aggreated
export const findAggregate = (sort)=> async (dispatch)=>{
    dispatch({ type: LOADING });
    let baseURL = `${process.env.REACT_APP_API_ADMIN_URL}/dashboard`;
    try {
        if(sort !== ""){
            baseURL += `?userpost=${sort}`
         
        }
       
        let res = await axios.get(`${baseURL}`, config);
        res = res?.data;

        if (!res.issue) {
            dispatch({
                type: SUCCESS_MAXUSERPOST,
                payload: res
            })
        } else {
            dispatch({
                type: ERROR,
                payload: res.error
            })
        }
    }catch(error){
        dispatch({ type: ERROR, payload: error });
    }
}
// recipes
export const getAllRecipes = (search) => async (dispatch) => {
    dispatch({ type: LOADING });
    let baseURL = `${process.env.REACT_APP_API_ADMIN_URL}/recipes`;
    try {   
   
        if(search.value !== ""){
            baseURL += `?${search.key}=${search.value}`;
        }
        let  res = await axios.get(`${baseURL}`, config);
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


export const addRecipes =(recipe, handleResult) => async (dispatch)=>{
    dispatch({ type: LOADING });
    try {
        let res = await axios.post(`${process.env.REACT_APP_API_ADMIN_URL}/recipes/add`, recipe, config);
        res = res?.data;
        if(!res.issue){
            handleResult("Added");
            dispatch({
                type: SUCCESS_RECIPES_ADD,
                payload: recipe
            })
        }else{
            dispatch({
                type: ERROR,
                payload: res.error
            })
        }
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
        
    }
}


export const updateRecipes = (recipe, handleResult) => async(dispatch)=>{
    dispatch({ type: LOADING });
    try {
        let res = await axios.patch(`${process.env.REACT_APP_API_ADMIN_URL}/recipes/update/${recipe._id}`, recipe, config);
        res = res?.data;

        if (!res.issue) {
            handleResult('Updated');
            dispatch({
                type: SUCCESS_RECIPES_UPDATE,
                payload: recipe
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


export const deleteRecipes =(recipe, handleResult) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.delete(`${process.env.REACT_APP_API_ADMIN_URL}/recipes/delete/${recipe._id}`, config);
        res = res?.data;

        if (!res.issue) {
            handleResult("Deleted");
            dispatch({
                type: SUCCESS_RECIPES_DELETE,
                payload: recipe._id
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



export const getAllUsers = (data) => async (dispatch) => {
    dispatch({ type: LOADING });
    let baseURL = `${process.env.REACT_APP_API_ADMIN_URL}/users`;
    // let baseURL = `http://localhost:8080/admin/users`;
    try {
        if(data.value !== ""){
            baseURL += `?${data.key}=${data.value}`;
        }
       
        let res = await axios.get(`${baseURL}`, config);
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


export const addUers = (added, handleResult) => async (dispatch)=>{
    dispatch({type: LOADING});

    try {
        let res = await axios.post(`${process.env.REACT_APP_API_ADMIN_URL}/users/add`, added, config);
        res = res?.data;
        if(!res.issue){
            handleResult("Added");
            dispatch({
                type: SUCCESS_USERS_ADD,
                
            })
        }else{
            dispatch({
                type: ERROR,
                payload: res.error
            })
        }
    } catch (error) {
        dispatch({ type: ERROR, payload: error });
        
    }
}

export const updateUsers = (updated, handleResult) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.patch(`${process.env.REACT_APP_API_ADMIN_URL}/users/update/${updated._id}`, updated, config);
        res = res?.data;

        if (!res.issue) {
            handleResult('Updated');
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


export const updateUsersAvatar = (updated) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.patch(`${process.env.REACT_APP_API_ADMIN_URL}/users/update/${updated._id}`, updated, config);
        res = res?.data;

        if (!res.issue) {
            dispatch({
                type: SUCCESS_USERS_AVATAR_UPDATE,
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
export const deleteUsers =(deleted, handleResult) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
        let res = await axios.delete(`${process.env.REACT_APP_API_ADMIN_URL}/users/delete/${deleted._id}`, config);
        res = res?.data;

        if (!res.issue) {
            handleResult("Deleted");
            dispatch({
                type: SUCCESS_USERS_DELETE,
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

