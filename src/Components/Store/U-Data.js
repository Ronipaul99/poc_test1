import { createSlice } from '@reduxjs/toolkit';
const data = window.localStorage.getItem('userData');


export const UserDataAction = createSlice({
    name: 'UserData',
    initialState: { value: JSON.parse(data) },

    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Type1: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const { Type1 } = UserDataAction.actions;

export const U1 = (state) => state.UserData.value;

export default UserDataAction.reducer;