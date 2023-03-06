import { configureStore } from "@reduxjs/toolkit";
import UserActionReducer from './User'
import  UserDataActionReducer  from "./U-Data";
import CourseDataActionReducer from "./CourseData"
import authSlice from "./Auth";

const store = configureStore({
    reducer: {
        User: UserActionReducer,
        UserData: UserDataActionReducer,
        CourseData:CourseDataActionReducer,
        auth: authSlice.reducer
    }
});
export default store;