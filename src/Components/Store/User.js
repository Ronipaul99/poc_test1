import { createSlice } from '@reduxjs/toolkit';
const a = window.localStorage.getItem('userType');

export const UserAction = createSlice({
    name: 'User',
    initialState: { value: a },

    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Type: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const { Type } = UserAction.actions;

export const U = (state) => state.User.value;

export default UserAction.reducer;