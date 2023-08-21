import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from './authReducer';
import globalReducer from './globalReducer';
import chatbotReducer from './chatbotReducer';
import snackBarReducer from "./snackBarReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    globalState: globalReducer,
    chatbotState: chatbotReducer,
    authState: authReducer,
    snackBarState: snackBarReducer
})


export default configureStore({
    reducer: rootReducer
}, composeWithDevTools);