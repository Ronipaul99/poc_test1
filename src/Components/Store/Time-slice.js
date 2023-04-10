import { createSlice } from '@reduxjs/toolkit';

const time = window.localStorage.getItem("Time")

export const TimeDataAction = createSlice({
    name: 'TimeData',
    initialState: { value: JSON.parse(time) },

    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Data: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const { Data } = TimeDataAction.actions;

export const Tdata = (state) => state.TimeData.value;

export default TimeDataAction.reducer;