import { configureStore } from "@reduxjs/toolkit";

import HomeNewReducer from "./Slice/HomeNewSlice";
import HomePopularReducer from "./Slice/HomePopularSlice";

// import CategoryProductReducer from "./Slice/CategoryProductSlice";

// import ProductBySearchReducer from "../feature/ProductBySearchSlice.js";
// import ProductBySellerReducer from "../feature/ProductBySellerSlice.js";

import SignInReducer from "./Slice/SignInSlice";
import SignUpUserReducer from "./Slice/SignUpUserSlice";

import ProfileUserReducer from "./Slice/ProfileUserSlice";

import SearchRecipesReducer from "./Slice/SearchRecipesSlice";

import RecipesUserReducer from "./Slice/RecipesUserSlice";

import DetailRecipesReducer from "./Slice/DetailRecipesSlice";
import CategoryReducer from "./Slice/CategorySlice";


// Page MyRecipes
import MyRecipesGetAllRecipesReducer from "./Slice/MyRecipesGetAllRecipesSlice"
import MyRecipesDeleteSelectedRecipesReducer from "./Slice/MyRecipesDeleteSelectedRecipesSlice"
import MyRecipesPostRecipesReducer from "./Slice/MyRecipesPostRecipesSlice"
import MyRecipesGetDetailsRecipesReducer from "./Slice/MyRecipesGetDetailsRecipesSlice"
import MyRecipesPutRecipesReducer from "./Slice/MyRecipesPutRecipesSlice"


//Page MyProfile
import MyProfileGetLikesRecipesReducer from "./Slice/MyProfileGetLikesRecipes";
import MyProfileGetSavedRecipesReducer from "./Slice/MyProfileGetSavedRecipes";

// Page DetailsRecipes
import DetailsRecipesGetCommentReducer from "./Slice/DetailsRecipesGetCommentSlice";
import DetailsRecipesPostCommentReducer from "./Slice/DetailsRecipesPostCommentSlice";

import DetailsRecipesGetLikesReducer from "./Slice/DetailsRecipesGetLikesSlice";
import DetailsRecipesPostLikesReducer from "./Slice/DetailsRecipesPostLikesSlice";
import DetailsRecipesDeleteLikesReducer from "./Slice/DetailsRecipesDeleteLikesSlice";

import DetailsRecipesGetSavedReducer from "./Slice/DetailsRecipesGetSavedRecipes";
import DetailsRecipesPostSavedReducer from "./Slice/DetailsRecipesPostSavedSlice";
import DetailsRecipesDeleteSavedReducer from "./Slice/DetailsRecipesDeleteSavedSlice";



// import DetailsRecipesGetSavedReducer from "./Slice/DetailsRecipesGetSavedSlice";

export default configureStore({
  reducer: {
    HomeNew: HomeNewReducer,
    HomePopular: HomePopularReducer,

    SearchRecipes: SearchRecipesReducer,
    DetailRecipes: DetailRecipesReducer,
    Category: CategoryReducer,

    // CategoryProduct : CategoryProductReducer,

    ProfileUser: ProfileUserReducer,

    // ProductBySearch: ProductBySearchReducer,
    // ProductBySeller: ProductBySellerReducer,

    SignIn: SignInReducer,
    SignUpUser: SignUpUserReducer,

    RecipesUser: RecipesUserReducer,

    //Page MyRecipes
    MyRecipesGetAllRecipes :  MyRecipesGetAllRecipesReducer,
    MyRecipesDeleteSelectedRecipes : MyRecipesDeleteSelectedRecipesReducer,
    MyRecipesPostRecipes : MyRecipesPostRecipesReducer,
    MyRecipesGetDetailsRecipes : MyRecipesGetDetailsRecipesReducer,
    MyRecipesPutRecipes : MyRecipesPutRecipesReducer,

    //Page MyProfile 
    MyProfileGetLikesRecipes : MyProfileGetLikesRecipesReducer,
    MyProfileGetSavedRecipes : MyProfileGetSavedRecipesReducer,

    //Page DetailsRecipes
    DetailsRecipesGetComment : DetailsRecipesGetCommentReducer,
    DetailsRecipesPostComment : DetailsRecipesPostCommentReducer,
    
    DetailsRecipesGetLikes : DetailsRecipesGetLikesReducer,
    DetailsRecipesPostLikes : DetailsRecipesPostLikesReducer,
    DetailsRecipesDeleteLikes : DetailsRecipesDeleteLikesReducer,
    
    DetailsRecipesGetSaved : DetailsRecipesGetSavedReducer,
    DetailsRecipesPostSaved : DetailsRecipesPostSavedReducer,
    DetailsRecipesDeleteSaved : DetailsRecipesDeleteSavedReducer,
    
    // DetailsRecipesGetSaved : DetailsRecipesGetSavedReducer,
    // DetailsRecipesPostComment : DetailsRecipesPostCommentReducer,
  },
});
