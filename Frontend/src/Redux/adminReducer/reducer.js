import { ERROR, LOADING, SUCCESS_ALL_RECIPE, SUCCESS_RECIPE, SUCCESS_USERS } from "../actionTypes";


let initialState = {
    isLoading: false,
    isError: "",
    recipes: [],
    SingleUserRecipes: [],
    users: [],

}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ERROR:
            return {
                ...state,
                isError: payload,
                isLoading: false
            }
        case SUCCESS_ALL_RECIPE:
            return {
                ...state,
                isLoading: false,
                isError: "",
                recipes: payload
            }
        case SUCCESS_RECIPE:
            return {
                ...state,
                isLoading: false,
                isError: "",
                SingleUserRecipes: payload
            }
        case SUCCESS_USERS:
            return {
                ...state,
                isLoading: false,
                isError: "",
                users: payload
            }
        default: return state;
    }
}