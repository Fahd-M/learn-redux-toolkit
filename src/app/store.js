// Redux-store/store interchangeable name that stand for a container for js apps.
// It stores whole state of the app in an immutable object tree.
// Typically one store per app.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        //can add other slices here for the same store if needed
    }
})

// With counterReducer added to store it is available to entire app via the provider in index.js
