import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as authReducer } from "./authReducer/reducer"
import { reducer as recipeReducer } from "./receipeReducer/reducer"
import { reducer as userReducer } from "./userReducer/reducer"
import { reducer as AdminReducer } from "./adminReducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    recipeReducer,
    userReducer,
    AdminReducer
})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))