import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await axios.get('https://fakestoreapi.com/products');
    console.log(result);
    return result.data;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        dummyAllProducts: [],
        pending: false,
        error: "",
        selectedCategory: "All" // New state for category filtering
    },
    reducers: {
        searchProduct: (state, action) => {
            state.allProducts = state.dummyAllProducts.filter(item => 
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.allProducts = action.payload === "All" 
                ? state.dummyAllProducts 
                : state.dummyAllProducts.filter(item => item.category === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.dummyAllProducts = action.payload;
            state.pending = false;
            state.err = "";
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.allProducts = [];
            state.pending = true;
            state.err = "";
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.allProducts = [];
            state.pending = false;
            state.err = "API call failed, please try again later";
        });
    }
});

export const { searchProduct, setCategory } = productSlice.actions;
export default productSlice.reducer;
