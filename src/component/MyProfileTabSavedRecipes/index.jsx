import React, { useEffect, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import hiclipart1 from "../../assets/images/1.png";
import hiclipart2 from "../../assets/images/2.png";
import hiclipart3 from "../../assets/images/profile.png";

import { useDispatch, useSelector } from "react-redux";
import { getMyProfileGetSavedRecipes } from "../../app/redux/Slice/MyProfileGetSavedRecipes";


const SavedRecipes = () => {
  const dispatch = useDispatch();
  const { MyProfileGetSavedRecipes } = useSelector(
    (state) => state.MyProfileGetSavedRecipes
  );

  const navigate = useNavigate();

//   console.log(MyProfileGetSavedRecipes);

  useEffect(() => {
    dispatch(getMyProfileGetSavedRecipes()).unwrap();
  }, [dispatch]);

  return (
    <div className="tab-pane fade" id="nav-saved-recipe" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
      <div className="row row-cols-2 row-cols-lg-5 align-items-center g-5">
      {MyProfileGetSavedRecipes.map((item) => (
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

export default SavedRecipes;
