import { createSlice } from "@reduxjs/toolkit";
const ini = window.localStorage.getItem("IniIn");
const value = ini;
console.log(JSON.parse(value) === true)

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: JSON.parse(value) === true },
    reducers: {
        Login(state) {
            state.isLoggedIn = true;
        },
        Logout(state) {
            state.isLoggedIn = false;
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice;
