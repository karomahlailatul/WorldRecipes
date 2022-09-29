import React, { useEffect, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMyProfileGetLikesRecipes } from "../../app/redux/Slice/MyProfileGetLikesRecipes";

const LikesRecipes = () => {
  const dispatch = useDispatch();
  const { MyProfileGetLikesRecipes } = useSelector(
    (state) => state.MyProfileGetLikesRecipes
  );

  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMyProfileGetLikesRecipes()).unwrap();
  }, [dispatch]);

  
  return (
    <div className="tab-pane fade" id="nav-liked-recipe" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">

    <div className="row row-cols-2 row-cols-lg-5 align-items-center g-5">
      {MyProfileGetLikesRecipes.map((item) => (
          <Link className="text-decoration-none"  key={item.id} to={`../recipes/${item.recipes_id}`}>
            <div className="col categories" >
              <div className="card card-1 text-center d-flex flex-colum container">
                <img
                  referrerPolicy="no-referrer"
                  src={item.recipes_photo_id}
                  alt=""
                  className="img-fluid mt-2"
                />   
                <p className="text-truncate  text-dark mt-2 ">{item.recipes_name}</p>
              </div>
            </div>
          </Link>
      ))}
      </div>
    </div>
  );
};

export default LikesRecipes;
