import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

import PrivateAxios from '../../axios/PrivateAxios'

export const getProfileUser = createAsyncThunk("ProfileUser/getProfileUser", async () => {
    let api = PrivateAxios()

    try {
        const token = localStorage.getItem("token");
        if (token) {
            const response = await api.get(process.env.REACT_APP_API_BACKEND + "users/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        }
    } catch (error) {
        console.log(error.response.data.message);
    }
});


const ProfileUserSlice = createSlice({
    name: "ProfileUser",
    initialState: {
        isLoading: false,
        isError: null,
        ProfileUser: [],
    },
    extraReducers: {
        [getProfileUser.pending]: (state) => {
            state.isLoading = true;
        },
        [getProfileUser.fulfilled]: (state, action) => {
            state.isLoading = false;

            state.ProfileUser = action.payload;
            if (action.payload !== undefined) {
                state.user_id = action.payload.data.id
                state.user_username = action.payload.data.username
                state.user_email = action.payload.data.email
                state.user_name = action.payload.data.name
                state.user_gender = action.payload.data.gender
                state.user_phone = action.payload.data.phone
                state.user_date_of_birth = action.payload.data.date_of_birth
                state.user_picture = action.payload.data.picture
                state.user_shipping_address = action.payload.data.shipping_address
                state.user_role = action.payload.data.role
                state.user_created_on = action.payload.data.created_on
                state.user_updated_on = action.payload.data.updated_on
            }
            // console.log(action.payload)
        },
        [getProfileUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default ProfileUserSlice.reducer;
