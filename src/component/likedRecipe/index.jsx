import React, { useEffect, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import hiclipart1 from "../../assets/images/1.png";
import hiclipart2 from "../../assets/images/2.png";
import hiclipart3 from "../../assets/images/profile.png";

const LikedRecipe = () => {
  return (
    <div className="row row-cols-2 row-cols-lg-5 align-items-center g-5">
      <div className="col categories">
        <div className="card card-1 text-center d-flex flex-colum">
          <img src={hiclipart1} alt="Bootstrap" className="img-fluid" />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
            <a href="/category/{category[0].id}">
              <p className="font-category"></p>
            </a>
          </div>
        </div>
      </div>
      <div className="col categories">
        <div className="card card-2">
          <img src={hiclipart2} alt="Bootstrap" className="img-fluid" />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
            <p className="font-category"></p>
          </div>
        </div>
      </div>
      <div className="col categories">
        <div className="card card-3">
          <img src={hiclipart3} alt="Bootstrap" className="img-fluid" />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
            <p className="font-category"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedRecipe;
