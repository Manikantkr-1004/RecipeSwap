import axios from "axios";
import { ERROR, LOADING, SUCCESS_ALL_RECIPE } from "../actionTypes"

export const getAllRecipes = () => (dispatch) => {
    dispatch({type : LOADING});
    axios.get("https://recipeswap.onrender.com/recipe")
    .then((res) =>{
        dispatch({type:SUCCESS_ALL_RECIPE, payload : res.data.recipes})
    }).catch((error)=>{
        dispatch({type : ERROR})
    })
}