import { configureStore } from "@reduxjs/toolkit";

import HomeNewReducer from "./Slice/HomeNewSlice";
import HomePopularReducer from "./Slice/HomePopularSlice";

// import CategoryProductReducer from "./Slice/CategoryProductSlice";

// import ProductBySearchReducer from "../feature/ProductBySearchSlice.js";
// import ProductBySellerReducer from "../feature/ProductBySellerSlice.js";

import SignInReducer from "./Slice/SignInSlice"
import SignUpUserReducer from "./Slice/SignUpUserSlice"

import ProfileUserReducer from "./Slice/ProfileUserSlice"

import SearchRecipesReducer from "./Slice/SearchRecipesSlice"


import RecipesUserReducer from "./Slice/RecipesUserSlice"

import MyRecipesReducer from "./Slice/MyRecipesSlice";

export default configureStore({
    reducer: {

        HomeNew: HomeNewReducer,
        HomePopular: HomePopularReducer,
        
        SearchRecipes :  SearchRecipesReducer ,

        // CategoryProduct : CategoryProductReducer,

        ProfileUser: ProfileUserReducer,

        MyRecipes : MyRecipesReducer,
        // ProductBySearch: ProductBySearchReducer,
        // ProductBySeller: ProductBySellerReducer,

        SignIn: SignInReducer,
        SignUpUser: SignUpUserReducer,

        RecipesUser : RecipesUserReducer,

    }
});
