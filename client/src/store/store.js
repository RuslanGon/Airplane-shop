import { configureStore } from "@reduxjs/toolkit";
import planesReducer from '../redux/planes/planesSlice.js'

export const store = configureStore(({
    reducer: {
        planes: planesReducer
    }
}))