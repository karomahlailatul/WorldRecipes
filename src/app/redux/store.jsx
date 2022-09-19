import { configureStore } from "@reduxjs/toolkit";

// import HomeProductNewReducer from "./Slice/HomeProductNewSlice";
// import HomeProductPopularReducer from "./Slice/HomeProductPopularSlice";

// import CategoryProductReducer from "./Slice/CategoryProductSlice";

// import ProductBySearchReducer from "../feature/ProductBySearchSlice.js";
// import ProductBySellerReducer from "../feature/ProductBySellerSlice.js";

import SignInReducer from "./Slice/SignInSlice"
import SignUpUserReducer from "./Slice/SignUpUserSlice"

import ProfileUserReducer from "./Slice/ProfileUserSlice"

// import SearchProductReducer from "./Slice/SearchProductSlice"


export default configureStore({
    reducer: {

        // HomeProductNew: HomeProductNewReducer,
        // HomeProductPopular: HomeProductPopularReducer,
        // CategoryProduct : CategoryProductReducer,

        // SearchProduct :  SearchProductReducer ,
        ProfileUser: ProfileUserReducer,

        // ProductBySearch: ProductBySearchReducer,
        // ProductBySeller: ProductBySellerReducer,

        SignIn: SignInReducer,
        SignUpUser: SignUpUserReducer,



    }
});
