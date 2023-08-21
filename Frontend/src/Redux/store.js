import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import {reducer as authReducer} from "./authReducer/reducer"
import {reducer as recipeReducer} from "./receipeReducer/reducer"
import {reducer as userReducer} from "./userReducer/reducer"


const rootReducer = combineReducers({
    authReducer,
    recipeReducer,
    userReducer
})



export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))