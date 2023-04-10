import { configureStore } from "@reduxjs/toolkit";
import UserActionReducer from './User'
import UserDataActionReducer from "./U-Data";
import CourseDataActionReducer from "./CourseData"
import authSlice from "./Auth";
import LogSlice from "./LoginPageFunc";
import TimeDataActionReducer from "./Time-slice"

const store = configureStore({
    reducer: {
        User: UserActionReducer,
        UserData: UserDataActionReducer,
        CourseData: CourseDataActionReducer,
        auth: authSlice.reducer,
        Log: LogSlice.reducer,
        TimeData: TimeDataActionReducer
    }
});
export default store;