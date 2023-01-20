// Features folder - one feature is counter. Counter will have a slice.
// Slice: splitting up redux state objects into multiple slices of state
// Slice = collection of reducer logic and actions for a single feature in the app.
// ex. Blog has slice for posts, slice for comments - handle logic differently 


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0 
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: { // has 2 actions 
        increment: (state) => { 
            state.count += 1;
        },
        decrement: (state) => { 
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0; 
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload; 
            //action.payload similar to useReducer hook which also has payload 
            //action.payload is an amount we pass in and it will be in the payload of this fx
        }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
// exporting full reducer here because store needs it