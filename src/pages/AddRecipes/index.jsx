import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

import Footer from "../../component/footer/index";
import Navbar from "../../component/navbar/index";
import imgProfile from "../../assets/images/add_photo.png";

const AddRecipes = () => {
  return (
    <Fragment>
      <div className="add-resep-page">
        <div className="container">
          <div className="text-center">
            <img
              className="picture rounded-circle"
              src={imgProfile}
              alt="Profile"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Title
            </label>
            <div className="text-center">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Ingredients
            </label>
            <div className="text-center">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Video
            </label>
            <div className="text-center">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="button" class="btn btn-warning btn-lg">
              Warning
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddRecipes;
