import axios from "axios";
import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_RECIPES_UPDATE } from "../actionTypes"

export const getAllRecipes = () => (dispatch) => {
    dispatch({type : LOADING});
    axios.get("https://recipeswap.onrender.com/recipe")
    .then((res) =>{
        dispatch({type:SUCCESS_ALL_RECIPE, payload : res.data.recipes})
    }).catch((error)=>{
        dispatch({type : ERROR});
    })
}

export const commentOnpost = (id,newdata) => (dispatch) => {
    dispatch({type : LOADING});
    axios.patch(`https://recipeswap.onrender.com/recipe/update${id}`, newdata)
    .then((res) =>{
        console.log(res);
        dispatch({type : SUCCESS_RECIPES_UPDATE})
    }).catch((error)=>{
        console.log(error)
        dispatch({type : ERROR});
    })
}