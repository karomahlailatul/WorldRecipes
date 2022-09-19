import { configureStore } from "@reduxjs/toolkit";

import HomeNewReducer from "./Slice/HomeNewSlice";
import HomePopularReducer from "./Slice/HomePopularSlice";

// import CategoryProductReducer from "./Slice/CategoryProductSlice";

// import ProductBySearchReducer from "../feature/ProductBySearchSlice.js";
// import ProductBySellerReducer from "../feature/ProductBySellerSlice.js";

import SignInReducer from "./Slice/SignInSlice"
import SignUpUserReducer from "./Slice/SignUpUserSlice"

import ProfileUserReducer from "./Slice/ProfileUserSlice"

// import SearchProductReducer from "./Slice/SearchProductSlice"


export default configureStore({
    reducer: {

        HomeNew: HomeNewReducer,
        HomePopular: HomePopularReducer,
        // CategoryProduct : CategoryProductReducer,

        // SearchProduct :  SearchProductReducer ,
        ProfileUser: ProfileUserReducer,

        // ProductBySearch: ProductBySearchReducer,
        // ProductBySeller: ProductBySellerReducer,

        SignIn: SignInReducer,
        SignUpUser: SignUpUserReducer,



    }
});
