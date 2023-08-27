import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_RECIPES_COMMENT_UPDATE, SUCCESS_RECIPES_UPDATE } from "../actionTypes";

let initialState = {
  recipes : [],
  loading: false,
  error: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
   
    case LOADING:
        return {...state, loading : true, error : false};

    case SUCCESS_ALL_RECIPE:
        return {...state, loading : false, recipes : payload}

    case SUCCESS_RECIPES_COMMENT_UPDATE:
      return {...state, loading: false, error :false }
    case ERROR:
        return {...state, error : true}    

    default:
      return state;
  }
};
