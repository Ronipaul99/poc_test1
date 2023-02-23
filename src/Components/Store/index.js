import { configureStore } from "@reduxjs/toolkit";
import UserActionReducer from './User'
import  UserDataActionReducer  from "./U-Data";
import CourseDataActionReducer from "./CourseData"

const store = configureStore({
    reducer: {
        User: UserActionReducer,
        UserData: UserDataActionReducer,
        CourseData:CourseDataActionReducer,
    }
});
export default store;