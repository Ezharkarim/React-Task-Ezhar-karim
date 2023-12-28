import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./reducers/customers"

export const store = configureStore({
    reducer: {
        customer: customerReducer
    },

})