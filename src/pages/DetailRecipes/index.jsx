import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

import Footer from "../../component/footer/index";
import Navbar from "../../component/navbar/index";
import ReactPlayer from "react-player";

const DetailRecipes = () => {
  return (
    <Fragment>
      <div className="detail-resep-page">
        <div className="container">
          <div className="position-relative text-center">
            <h1 className="mt-5">Loream Sandwich</h1>
            <img
              className="img-promotion"
              crossOrigin="anonymous"
              src={require("../../assets/images/home_1.png")}
              alt=""
            />
          </div>

          <div className="container">
            <h2 className="text cover mt-5">Ingredients</h2>
            <h5>- 2 Eggs</h5>
            <h5>- 2 Tbsp Mayonnaise</h5>
            <h5>- 3 Slices Bread</h5>
            <h5>- 1/3 Carton Of Cress</h5>
            <h5>- 2-3 Slices Of Tomato Or A Lettuce Leaf</h5>
            <h2 className="text cover mt-5">Video Step</h2>
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
            <div className="position-relative">
              <div className="input-group mt-5">
                <span className="input-group-text">Comment</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>
            <section className="profile ff-airbnb text-center mb-5 mt-3">
              <div className="d-flex justify-content-center">
                <div className="position-relative">
                  <button type="button" class="btn btn-warning btn-lg">
                    Warning
                  </button>
                </div>
              </div>
            </section>
            <h3>Comment</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailRecipes;
