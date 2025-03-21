import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'

const ffStore=configureStore({
    reducer:{
        productReducer:productSlice,
    }
})

export default ffStore