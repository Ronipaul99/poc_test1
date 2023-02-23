import { configureStore } from "@reduxjs/toolkit";
import UserActionReducer from './User'
import  UserDataActionReducer  from "./U-Data";

const store = configureStore({
    reducer: {
        User: UserActionReducer,
        UserData: UserDataActionReducer,
    }
});
export default store;