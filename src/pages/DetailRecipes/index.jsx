import React, { useEffect, Fragment } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailRecipes } from "../../app/redux/Slice/DetailRecipesSlice";

const DetailRecipes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { DetailRecipes } = useSelector((state) => state.DetailRecipes);
  console.log(DetailRecipes);

  useEffect(() => {
    dispatch(getDetailRecipes(id)).unwrap();
  }, [dispatch]);
  return (
    <Fragment>
      <div className="detail-resep-page">
        <div className="container">
          <div className="position-relative text-center">
            <div className="DetailRecipes">
              <h1 className="mt-5">{DetailRecipes.name}</h1>
              <img
                referrerPolicy="no-referrer"
                className="img-promotion"
                src={DetailRecipes.photo_id}
                alt=""
              />
            </div>
          </div>

          <div className="container">
            <h2 className="text cover mt-5">Description</h2>
            <p className="mt-2">{DetailRecipes.description}</p>
            <h2 className="text cover mt-5">Video Step</h2>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
              controls={false}
            />
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
