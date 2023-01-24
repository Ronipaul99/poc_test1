import { configureStore } from "@reduxjs/toolkit";
import UserActionReducer from './User'

const store = configureStore({
    reducer: {
        User: UserActionReducer,
    }
});
export default store;