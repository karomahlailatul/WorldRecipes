import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateAxios from "../../axios/PrivateAxios";
import axios from "axios";

// export const getMyRecipes = createAsyncThunk("MyRecipes/getMyRecipes", async ({valueSenderMyRecipes}) => {
//   let api = PrivateAxios();

//   try {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const response = await api.get(process.env.REACT_APP_API_BACKEND + "recipes?"+ valueSenderMyRecipes , {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Access-Control-Allow-Origin": "*",
//           // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
//         },
//       })
//       .then((res) => {
//         // console.log(res.data.data);
//         // toast.success(res.data.message, { autoClose: 2500 });
//         return res.data;
//         // console.log
//     })
//       // console.log(response.data)
//       return response;
//     }
//   } catch (error) {
//     console.log(error.response.data.message);
//   }
// });
export const getMyRecipes = createAsyncThunk("MyRecipes/getMyRecipes", async () => {
  let api = PrivateAxios();

  try {
    const token = localStorage.getItem("token");
    
  const id = localStorage.getItem("id");
    if (token) {
      const response = await api.get(process.env.REACT_APP_API_BACKEND + "recipes/usersrecipes/" +id, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        // toast.success(res.data.message, { autoClose: 2500 });
        return res.data;
        // console.log
    })
      // console.log(response.data)
      return response;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const getMyRecipesDetails = createAsyncThunk("MyRecipesDetails/getMyRecipesDetails", async ({idRecipes}) => {
  let api = PrivateAxios();

  try {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(process.env.REACT_APP_API_BACKEND + "recipes/"+ idRecipes, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        },
      })
      
      .then((res) => {
        return res.data})
      // console.log(response.data)
      return response
      // return response.data.data[0];
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
})
 ;

export const putMyRecipes = createAsyncThunk("MyRecipes/putMyRecipes", async ({recipes_id,formData}) => {
  let api = PrivateAxios();

  try {
    const token = localStorage.getItem("token");
    console.log(recipes_id)
    
    console.log(formData)
    if (token) {
      const response = await api
        .put(process.env.REACT_APP_API_BACKEND + "recipes/"+ recipes_id , formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        // console.log(response)
        .then((res) => {
          // console.log(res);
          toast.success(res.data.message, { autoClose: 2500 });
          return res.data;
        })
        .catch((err) => {
          // getMyRecipes()
          // console.log(err);
          toast.warning(err.response.data.message, { autoClose: 2500 });
          return err.response.data
          // alert(err);
        });
      // console.log(response.data)
      return response;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const postMyRecipes = createAsyncThunk("MyRecipes/postMyRecipes", async (formDataCreate) => {
  let api = PrivateAxios();

  try {
    const token = localStorage.getItem("token");
    // console.log(recipes_id)
    
    // console.log(formData)
    if (token) {
      const response = await api
        .post(process.env.REACT_APP_API_BACKEND + "recipes/", formDataCreate, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        // console.log(response)
        .then((res) => {
          // console.log(res);
          toast.success(res.data.message, { autoClose: 2500 });
          return res.data;
        })
        .catch((err) => {
          // getMyRecipes()
          // console.log(err);
          toast.warning(err.response.data.message, { autoClose: 2500 });
          return err.response.data
          // alert(err);
        });
      // console.log(response.data)
      return response;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const deletedSelectedMyRecipes = createAsyncThunk("MyRecipes/deletedSelectedMyRecipes", async (dataDeleteCheckList) => {
  let api = PrivateAxios();
  // try {
    const token = localStorage.getItem("token");
    if (token) {
       // .put(process.env.REACT_APP_API_BACKEND + "users/profile?update", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     Authorization: `Bearer ${token}`,
        //   },
        // })
        // .then((res) => {
        //   console.log(res);
        //   toast.success("Update Profile Success", { autoClose: 2500 });
        // })
        // .catch((err) => {
        //   // getMyRecipes()
        //   console.log(err);
        //   toast.warning(err.response.data.message, { autoClose: 2500 });
        //   // alert(err);
        // });
      const response = await api.delete(process.env.REACT_APP_API_BACKEND + "recipes/selected/" + dataDeleteCheckList, {
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          // alert("delete success");
          toast.success(response.data.message, { autoClose: 2500 });
          // setShowModalDeleteSelected(false);
          // getAllProduct();
          // console.log(response.data)
          return response.data;
        })
        .catch((err) => {
          // alert("delete failed");
          toast.success(err, { autoClose: 2500 });
          // setShowModalDeleteSelected(false);
          return err.response.data.message;
        });
        // console.log(response)
      return response;
      
    }
  // } catch (error) {
  //   console.log(error.response.data.message);
  // }
});




const MyRecipesSlice = createSlice({
  name: "MyRecipes",
  initialState: {
    isLoading: false,
    isError: null,
    MyRecipes: [],
  },
  extraReducers: {

    // Get recipes
    [getMyRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MyRecipes = action.payload;
      state.MyRecipes = action.payload.data;
      // if (action.payload !== undefined) {
      state.valueRecipes = action.payload.data;
      state.recipes_id  = action.payload.data.id
      state.recipes_name  = action.payload.data.name
      state.recipes_photo_id  = action.payload.data.photo_id
      state.recipes_description  = action.payload.data.description
      state.recipes_category_id  = action.payload.data.category_id
      state.recipes_users_id  = action.payload.data.users_id
      state.recipes_videos_id  = action.payload.data.videos_id
      // }
      // console.log(action.payload)
    },
    [getMyRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },
    
    // Get recipes details
    [getMyRecipesDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyRecipesDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MyRecipes = action.payload;
      state.MyRecipes = action.payload.data[0];
      // if (action.payload !== undefined) {
      state.valueRecipes = action.payload.data[0];
      state.recipes_details_id  = action.payload.data[0].id
      state.recipes_details_name  = action.payload.data[0].name
      state.recipes_details_photo_id  = action.payload.data[0].photo_id
      state.recipes_details_description  = action.payload.data[0].description
      state.recipes_details_category_id  = action.payload.data[0].category_id
      state.recipes_details_users_id  = action.payload.data[0].users_id
      state.recipes_details_videos_id  = action.payload.data[0].videos_id
      // }
      // console.log(action.payload)
    },
    [getMyRecipesDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },
 
    // Put recipes
    [putMyRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [putMyRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MyRecipes = action.payload;
    },
    [putMyRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },

    // Post recipes
    [postMyRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [postMyRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MyRecipes = action.payload;
    },
    [postMyRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },

    // Delete recipes
    [deletedSelectedMyRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [deletedSelectedMyRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MyRecipes = action.payload;
      // console.log(action.payload)
    },
    [deletedSelectedMyRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },
  },
});

export default MyRecipesSlice.reducer;
