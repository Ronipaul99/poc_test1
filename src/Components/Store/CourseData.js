import { createSlice } from '@reduxjs/toolkit';

export const CourseDataAction = createSlice({
    name: 'CourseData',
    initialState: { value: "" },

    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Data: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const { Data } = CourseDataAction.actions;

export const Cdata = (state) => state.CourseData.value;

export default CourseDataAction.reducer;