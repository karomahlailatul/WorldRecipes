import React, { useEffect, Fragment } from "react";

import MyRecipe from "../../component/myRecipe/index";
import SavedRecipe from "../../component/savedRecipe/index";
import LikedRecipe from "../../component/likedRecipe/index";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { getProfileUser } from "../../app/redux/Slice/ProfileUserSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";

// import imgProfile from "../../assets/images/profile.png";

import ModalEdit from "../../component/modalEdit/index";

const Profile = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const dispatchProfileUser = () => {
    dispatch(getProfileUser()).unwrap();
  };

  const {
    // ProfileUser
    // user_id,
    // user_email,
    user_name,
    // user_gender,
    // user_phone,
    // user_date_of_birth,
    user_picture,
    // user_role,
    // user_created_on,
    // user_updated_on
  } = useSelector((state) => state.ProfileUser);

  useEffect(() => {
    dispatchProfileUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_name,user_picture]);

  return (
    <Fragment>
      <div className="profile-page">
        <div className="container mt-5">
          <div className="profile ff-airbnb text-center mb-5">
            <div className="d-flex justify-content-center">
              <div className="position-relative">
                <img  referrerPolicy="no-referrer" className="picture-profile rounded-circle" src={user_picture === null || user_picture === undefined ? PhotoEmpty : user_picture} alt="" />
              </div>
            </div>
            <div className="d-flex mt-4 text-center justify-content-center">
              <p className="fs-5">{user_name === null || user_name === undefined ? "No Name" : user_name}&nbsp;&nbsp;</p>
              <ModalEdit />
            </div>
          </div>
          <div className="utama">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-my-recipe" type="button" role="tab" aria-controls="nav-my-recipe" aria-selected="true">
                  My Recipe
                </button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-saved-recipe" type="button" role="tab" aria-controls="nav-saved-recipe" aria-selected="false">
                  Saved Recipe
                </button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-liked-recipe" type="button" role="tab" aria-controls="nav-liked-recipe" aria-selected="false">
                  Liked Recipe
                </button>
              </div>
            </nav>
            <div className="tab-content mt-5" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-my-recipe" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <MyRecipe />
              </div>
              <div className="tab-pane fade" id="nav-saved-recipe" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <SavedRecipe />
              </div>
              <div className="tab-pane fade" id="nav-liked-recipe" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                <LikedRecipe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
