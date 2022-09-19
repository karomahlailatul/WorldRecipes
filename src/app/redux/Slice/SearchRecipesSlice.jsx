import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchRecipes = createAsyncThunk("SearchRecipes/getSearchRecipes", async (valueSender) => {

    const response = await
        // (keyword 
        // !== null ? \
        axios
            .get(process.env.REACT_APP_API_BACKEND + "recipes?" + valueSender)
            //  .get(process.env.REACT_APP_API_BACKEND + "product?search=" + search + "&sortby=name&sort=" + sort + "&page=1&limit=24")
            .catch((error) => {
                console.log(error);
            })
    // : 
    // axios
    //     .get(process.env.REACT_APP_API_BACKEND + "product")
    //     //  .get(process.env.REACT_APP_API_BACKEND + "product?search=" + search + "&sortby=name&sort=" + sort + "&page=1&limit=24")
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // );

    const result = await response.data;
    return result;
});

const SearchRecipesSlice = createSlice({
    name: "SearchRecipes",
    initialState: {
        isLoading: false,
        isError: null,
        SearchRecipes: [],
    },
    extraReducers: {
        [getSearchRecipes.pending]: (state) => {
            state.isLoading = true;
        },
        [getSearchRecipes.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.SearchRecipes = action.payload.data;
            state.statusCode = action.payload.statusCode;
            state.pagination_currentPage = action.payload.pagination.currentPage;
            state.pagination_totalData = action.payload.pagination.totalData;
            state.pagination_limit = action.payload.pagination.limit;
            state.pagination_totalPage = action.payload.pagination.totalPage;
            // console.log(action.payload)
        },
        [getSearchRecipes.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default SearchRecipesSlice.reducer;
