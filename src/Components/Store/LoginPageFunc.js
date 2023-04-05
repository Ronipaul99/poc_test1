import { createSlice } from "@reduxjs/toolkit";

const LogSlice = createSlice({
    name: "Log",
    initialState: { Enable: false },
    reducers: {
        enableLogin(state) {
            state.Enable = true;
        },
        disableLogin(state) {
            state.Enable = false;
        }
    }
});
export const LogActions = LogSlice.actions;
export default LogSlice;
