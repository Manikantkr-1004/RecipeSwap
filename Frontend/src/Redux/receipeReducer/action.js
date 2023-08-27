import axios from "axios";
import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_RECIPES_COMMENT_UPDATE, SUCCESS_RECIPES_UPDATE } from "../actionTypes"

export const getAllRecipes = (searched) => (dispatch) => {
    dispatch({type : LOADING});
  
    let baseURL = `${process.env.REACT_APP_APIURL}/recipe`;
    if(searched !== undefined){
        baseURL += `?search=${searched}`
    }
    axios.get(baseURL)
    .then((res) =>{
        dispatch({type:SUCCESS_ALL_RECIPE, payload : res.data.recipes})
    }).catch((error)=>{
        dispatch({type : ERROR});
    })
}
export const getCategory = (valued) => (dispatch) => {
    dispatch({type : LOADING});
  
    let baseURL = `${process.env.REACT_APP_APIURL}/recipe/find/category/`;
   if(valued !== undefined){
    baseURL += valued
   }
    axios.get(baseURL)
    .then((res) =>{
        dispatch({type:SUCCESS_ALL_RECIPE, payload : res.data.recipes})
    }).catch((error)=>{
        dispatch({type : ERROR});
    })
}

export const commentOnpost = (id,newdata, token) => (dispatch) => {
    dispatch({type : LOADING});
    console.log(id, newdata);
    axios.patch(`${process.env.REACT_APP_APIURL}/recipe/update/comment/${id}`, newdata, {headers: {"Content-Type": "application/json", "auth" : token}})
    .then((res) =>{
        // console.log(res);
        dispatch({type : SUCCESS_RECIPES_COMMENT_UPDATE})
    }).catch((error)=>{
        console.log(error)
        dispatch({type : ERROR});
    })
}