import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import MyRecipe from "../../component/myRecipe/index";
import SavedRecipe from "../../component/savedRecipe/index";
import LikedRecipe from "../../component/likedRecipe/index";
import Footer from "../../component/footer/index";
import Navbar from "../../component/navbar/index";
import imgProfile from "../../assets/images/profile.png";

import ModalEdit from "../../component/modalEdit/index";

const Profile = () => {
  return (
    <Fragment>
      <div className="profile-page">
        <div className="container">
          <section className="profile ff-airbnb text-center mb-5">
            <div className="d-flex justify-content-center">
              <div className="position-relative">
                <img
                  className="picture rounded-circle"
                  src={imgProfile}
                  alt="Profile"
                />
                <ModalEdit />
              </div>
            </div>
            <p className="fs-5 mt-3">Rifqi Ahmad Pratama</p>
          </section>
          <div className="utama">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-my-recipe"
                  type="button"
                  role="tab"
                  aria-controls="nav-my-recipe"
                  aria-selected="true"
                >
                  My Recipe
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-saved-recipe"
                  type="button"
                  role="tab"
                  aria-controls="nav-saved-recipe"
                  aria-selected="false"
                >
                  Saved Recipe
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-liked-recipe"
                  type="button"
                  role="tab"
                  aria-controls="nav-liked-recipe"
                  aria-selected="false"
                >
                  Liked Recipe
                </button>
              </div>
            </nav>
            <div className="tab-content mt-5" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-my-recipe"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <MyRecipe />
              </div>
              <div
                className="tab-pane fade"
                id="nav-saved-recipe"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                <SavedRecipe />
              </div>
              <div
                className="tab-pane fade"
                id="nav-liked-recipe"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
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
