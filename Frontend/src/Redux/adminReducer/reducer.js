import {
    ERROR,
    LOADING,
    SUCCESS_ALL_RECIPE,
    SUCCESS_RECIPE,
    SUCCESS_RECIPES_ADD,
    SUCCESS_RECIPES_DELETE,
    SUCCESS_RECIPES_UPDATE,
    SUCCESS_USERS,
    SUCCESS_USERS_ADD,
    SUCCESS_USERS_DELETE,
    SUCCESS_USERS_UPDATE,
  } from "../actionTypes";
  
  let initialState = {
    isLoading: false,
    isError: "",
    recipes: [],
    SingleUserRecipes: [],
    users: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case ERROR:
        return {
          ...state,
          isError: payload,
          isLoading: false,
        };
      case SUCCESS_ALL_RECIPE:
        return {
          ...state,
          isLoading: false,
          isError: "",
          recipes: payload,
        };
      case SUCCESS_RECIPE:
        return {
          ...state,
          isLoading: false,
          isError: "",
          SingleUserRecipes: payload,
        };
      case SUCCESS_USERS:
        return {
          ...state,
          isLoading: false,
          isError: "",
          users: payload,
        };
      case SUCCESS_RECIPES_ADD:
        return {
          ...state,
          isLoading: false,
          isError: "",
          recipes: [...state.recipes, payload],
        };
      case SUCCESS_USERS_ADD:
        return {
          ...state,
          isLoading: false,
          isError: "",
          users: [...state.users, payload],
        };
  
      case SUCCESS_RECIPES_UPDATE:
        const filteredRecipes = state.recipes.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              ...payload,
            };
          }
          return item;
        });
  
        return {
          ...state,
          isLoading: false,
          isError: "",
          recipes: filteredRecipes,
        };
      case SUCCESS_USERS_UPDATE:
        const filteredUser = state.users.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              ...payload,
            };
          }
          return item;
        });
  
        return {
          ...state,
          isLoading: false,
          isError: "",
          users: filteredUser,
        };
  
        case SUCCESS_RECIPES_DELETE:
          const updatedRecipes = state.recipes.filter((item) => item._id !== payload);
    
          return {
            ...state,
            isLoading: false,
            isError: "",
            recipes: updatedRecipes,
          };
    
  
      case SUCCESS_USERS_DELETE:
        const updatedUsers = state.users.filter((item) => item._id !== payload);
  
        return {
          ...state,
          isLoading: false,
          isError: "",
          users: updatedUsers,
        };
  
      default:
        return state;
    }
  };
  