import React, { useEffect, useState, Fragment } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetailRecipes } from "../../app/redux/Slice/DetailRecipesSlice";

import { getDetailsRecipesGetComment } from "../../app/redux/Slice/DetailsRecipesGetCommentSlice";
import { postDetailsRecipesPostComment } from "../../app/redux/Slice/DetailsRecipesPostCommentSlice";

import { getDetailsRecipesGetLikes } from "../../app/redux/Slice/DetailsRecipesGetLikesSlice";
import { postDetailsRecipesPostLikes } from "../../app/redux/Slice/DetailsRecipesPostLikesSlice";
import { deleteDetailsRecipesDeleteLikes } from "../../app/redux/Slice/DetailsRecipesDeleteLikesSlice";

import { getDetailsRecipesGetSaved } from "../../app/redux/Slice/DetailsRecipesGetSavedRecipes";
import { postDetailsRecipesPostSaved } from "../../app/redux/Slice/DetailsRecipesPostSavedSlice";
import { deleteDetailsRecipesDeleteSaved } from "../../app/redux/Slice/DetailsRecipesDeleteSavedSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";
import LikesFill from "../../assets/images/icons/thumbs-up-solid.svg";
import LikesNone from "../../assets/images/icons/thumbs-up-regular.svg";
import SavedFill from "../../assets/images/icons/bookmark-solid.svg";
import SavedNone from "../../assets/images/icons/bookmark-regular.svg";

const DetailRecipes = () => {
  const isAuth = localStorage.getItem("token");
  const isUserId = localStorage.getItem("id");

  const { id } = useParams();

  const dispatch = useDispatch();
  const { DetailRecipes } = useSelector((state) => state.DetailRecipes);
  const { DetailsRecipesGetComment } = useSelector(
    (state) => state.DetailsRecipesGetComment
  );
  const { DetailsRecipesGetLikes } = useSelector(
    (state) => state.DetailsRecipesGetLikes
  );
  const { DetailsRecipesGetSaved } = useSelector(
    (state) => state.DetailsRecipesGetSaved
  );

  // console.log(DetailsRecipesGetLikes.length)

  const [dataComment, setDataComment] = useState({
    users_id: isUserId,
    recipes_id: id,
    comment: "",
  });

  const [dataLikes, setDataLikes] = useState({
    users_id: isUserId,
    recipes_id: id,
  });

  const [dataSaved, setDataSaved] = useState({
    users_id: isUserId,
    recipes_id: id,
  });

  const handleChangeComment = (e) => {
    setDataComment({
      ...dataComment,
      [e.target.name]: e.target.value,
    });
    // console.log(dataComment)
  };

  const handleComment = async (e) => {
    await e.preventDefault();
    await dispatch(postDetailsRecipesPostComment(dataComment))
      .unwrap()

      .then((item) => {
        if (item.statusCode === 201) {
          dispatch(getDetailsRecipesGetComment(id)).unwrap();
        }
      });
  };

  const detailLikes = () => {
    if (isAuth) {
    if (DetailsRecipesGetLikes.length === 0) {
      document.getElementById("likes").checked = false;
      // document.getElementById("btn-likes").click = false;
    } else {
      document.getElementById("likes").checked = true;
      // document.getElementById("btn-likes").checked = true;
      
    }}
  };

  const detailSaved = () => {

    if (isAuth) {
    if (DetailsRecipesGetSaved.length === 0) {
      document.getElementById("saved").checked = false;
      // document.getElementById("btn-saved").checked = false;
    } else {
      document.getElementById("saved").checked = true;
      // document.getElementById("btn-saved").checked = true;
    }}
  };

  useEffect(() => {
    dispatch(getDetailRecipes(id)).unwrap();
    dispatch(getDetailsRecipesGetComment(id)).unwrap();

    dispatch(getDetailsRecipesGetLikes(id)).unwrap();
    dispatch(getDetailsRecipesGetSaved(id)).unwrap();

    detailLikes();
    detailSaved();
  }, [dispatch]);

  return (
    <Fragment>
      <div className="detail-resep-page my-5 mb-5">
        <div className="container">
          <div className="position-relative text-center">
            <div className="DetailRecipes">
              <h1 className="">{DetailRecipes.name}</h1>
              <img
                referrerPolicy="no-referrer"
                className="img-promotion mt-5"
                src={DetailRecipes.photo_id}
                alt=""
              />
              {isAuth ? (
                <Fragment>
                  <div className="d-flex justify-content-end">
                    <div>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="likes"
                        name="likes"
                        autoComplete="off"
                        onChange={(e) => {
                          if (e.target.checked) {
                            // console.log("checked likes")
                            dispatch(postDetailsRecipesPostLikes(dataLikes))
                              .unwrap()
                              .then((item) => {
                                if (item.statusCode === 201) {
                                  dispatch(
                                    getDetailsRecipesGetLikes(id)
                                  ).unwrap();
                                }
                              });
                          } else {
                            // console.log("uncheck likes")

                            dispatch(deleteDetailsRecipesDeleteLikes(id))
                              .unwrap()
                              .then((item) => {
                                if (item.statusCode === 200) {
                                  dispatch(
                                    getDetailsRecipesGetLikes(id)
                                  ).unwrap();
                                }
                              });
                          }
                        }}
                      />

                      <label
                        className="btn btn-light btn-likes"
                        id="btn-likes"
                        htmlFor="likes"
                      >
                        <img
                          className="icon-likes"
                          alt=""
                          src={
                            DetailsRecipesGetLikes.length === 0
                              ? LikesNone
                              : LikesFill
                          }
                        ></img>
                      </label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="saved"
                        name="saved"
                        autoComplete="off"
                        onChange={(e) => {
                          if (e.target.checked) {
                            // console.log("checked likes")
                            dispatch(postDetailsRecipesPostSaved(dataSaved))
                              .unwrap()
                              .then((item) => {
                                if (item.statusCode === 201) {
                                  dispatch(
                                    getDetailsRecipesGetSaved(id)
                                  ).unwrap();
                                }
                              });
                          } else {
                            // console.log("uncheck likes")

                            dispatch(deleteDetailsRecipesDeleteSaved(id))
                              .unwrap()
                              .then((item) => {
                                if (item.statusCode === 200) {
                                  dispatch(
                                    getDetailsRecipesGetSaved(id)
                                  ).unwrap();
                                }
                              });
                          }
                        }}
                      />

                      <label
                        className="btn btn-light btn-saved"
                        id="btn-saved"
                        htmlFor="saved"
                      >
                        <img
                          className="icon-likes"
                          alt=""
                          src={
                            DetailsRecipesGetSaved.length === 0
                              ? SavedNone
                              : SavedFill
                          }
                        ></img>
                      </label>
                    </div>
                  </div>
                </Fragment>
              ) : null}
            </div>
          </div>

          <div className="container">
            <h2 className="text cover mt-5">Description</h2>
            <p className="mt-5 recipes-details-description">
              {DetailRecipes.description}
            </p>
            <h2 className="text cover my-5">Video Step</h2>
            <ReactPlayer
              className="react-player"
              url={DetailRecipes.videos_id}
              width="100%"
              height="100%"
              controls={false}
            />

            {isAuth ? (
              <Fragment>
                <form onSubmit={handleComment}>
                  <div className="mb-3">
                    <label className="form-label">Comment</label>
                    <textarea
                      className="form-control text-area-comment"
                      name="comment"
                      rows="5"
                      onChange={handleChangeComment}
                    ></textarea>
                    <button
                      className="btn btn-warning text-light my-2"
                      type="submit"
                    >
                      Send Comment
                    </button>
                  </div>
                </form>
              </Fragment>
            ) : null}

            <div className="mb-5">
              <h3 className="mt-5 mb-4">Comment</h3>
              {DetailsRecipesGetComment.map((item) => (
                <div className="card my-3 shadow-sm" key={item.id}>
                  <div className="card-body">
                    <div className="d-flex ">
                      <img
                        referrerPolicy="no-referrer"
                        src={
                          item.users_picture === null ||
                          item.users_picture === undefined
                            ? PhotoEmpty
                            : item.users_picture
                        }
                        width="40"
                        height="40"
                        className="rounded-circle"
                        alt=""
                      />
                      <div className="ms-3 w-100 ">
                        <h6 className="fw-bold">{item.users_name}</h6>
                        <p className="recipes-details-comment">
                          {item.comment}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailRecipes;
