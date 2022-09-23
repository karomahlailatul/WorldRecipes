import React, { useState, Fragment, useEffect } from "react";
import pen from "../../assets/images/Vector.png";

import { useDispatch, useSelector } from "react-redux";

import {
  getProfileUser,
  putProfileUser,
} from "../../app/redux/Slice/ProfileUserSlice";

import { putMyRecipesPutRecipes } from "../../app/redux/Slice/MyRecipesPutRecipesSlice";
import { getMyRecipesGetDetailsRecipes } from "../../app/redux/Slice/MyRecipesGetDetailsRecipesSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";

function MyRecipesModalEdit({ idRecipes, dispatchMyRecipesGetAllRecipes }) {
  const id_token = localStorage.getItem("id");

  const [previewEdit, setPreviewEdit] = useState();
  const [newPhotoEdit, setNewPhotoEdit] = useState(null);

  const dispatch = useDispatch();

  const dispatchMyRecipesGetDetailsRecipes = () => {
    dispatch(getMyRecipesGetDetailsRecipes({ idRecipes })).unwrap();
  };

  const {
    MyRecipesGetDetailsRecipes,
    recipes_details_id,
    recipes_details_name,
    recipes_details_photo_id,
    recipes_details_videos_id,
    recipes_details_description,
    recipes_details_category_id,
    recipes_details_users_id,
  } = useSelector((state) => state.MyRecipesGetDetailsRecipes);

  const [dataRecipesEdit, setDataRecipes] = useState({
    // id: "" || recipes_details_id,
    name: recipes_details_name,
    photo_id: recipes_details_photo_id,
    videos_id: recipes_details_videos_id,
    description: recipes_details_description,
    category_id: recipes_details_category_id,
    users_id: recipes_details_users_id,
  });

  // console.log(user_role)

  const handleChangeEdit = (e) => {
    setDataRecipes({
      ...dataRecipesEdit,
      [e.target.name]: e.target.value,
    });
    console.log(dataRecipesEdit);
    // console.log(newPhotoEdit);
  };

  const handleUploadEdit = (e) => {
    setNewPhotoEdit(e.target.files[0]);
    setPreviewEdit(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdateRecipes = async (e) => {
    await e.preventDefault();
    const formDataEdit = new FormData();
    formDataEdit.append(
      "name",
      dataRecipesEdit.name === undefined
        ? recipes_details_name
        : dataRecipesEdit.name
    );
    formDataEdit.append(
      "description",
      dataRecipesEdit.description === undefined
        ? recipes_details_description
        : dataRecipesEdit.description
    );
    formDataEdit.append(
      "category_id",
      dataRecipesEdit.category_id === undefined
        ? recipes_details_category_id
        : dataRecipesEdit.category_id
    );
    formDataEdit.append("users_id", id_token);
    formDataEdit.append(
      "videos_id",
      dataRecipesEdit.videos_id === undefined
        ? recipes_details_videos_id
        : dataRecipesEdit.videos_id
    );
    formDataEdit.append(
      "photo_id",
      newPhotoEdit === undefined ? recipes_details_photo_id : newPhotoEdit
    );

    dispatch(putMyRecipesPutRecipes({ idRecipes, formDataEdit }))
      .unwrap()
      .then((item) => {
        setNewPhotoEdit();
        setPreviewEdit();
        dispatchMyRecipesGetAllRecipes();
        document.getElementById("close-modal-edit-recipes").click();
      });
  };


  return (
    <Fragment>
      <img
        type="button"
        className="icon-edit mt-2"
        src={pen}
        alt="Edit Icon"
        data-bs-toggle="modal"
        data-bs-target="#modal-edit-recipes"
        onClick={(e) => {
          dispatchMyRecipesGetDetailsRecipes();
        }}
      />

      <div
        className="modal fade"
        id="modal-edit-recipes"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="modal-edit-recipes"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <form id="form-edit-recipes" onSubmit={handleUpdateRecipes}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Recipes
                </h5>
                <button
                  type="button"
                  id="close-modal-edit-recipes"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    setPreviewEdit();
                    setNewPhotoEdit();
                    document.getElementById("form-edit-recipes").reset();
                  }}
                ></button>
              </div>

              <div className="modal-body">
              

                <label className="d-flex justify-content-start mb-1">
                  User ID
                </label>
                <input
                  autoComplete="off"
                  className="form-control "
                  type="text"
                  placeholder="User ID"
                  name="users_id"
                  disabled
                  defaultValue={recipes_details_users_id}
                  onChange={handleChangeEdit}
                />

                <label className="d-flex justify-content-start  mt-3  mb-1">
                  ID Recipes :
                </label>
                <input
                  autoComplete="off"
                  className="form-control "
                  type="text"
                  placeholder="ID"
                  name="id"
                  defaultValue={recipes_details_id}
                  disabled
                  onChange={handleChangeEdit}
                />

                <label className="d-flex justify-content-start mt-3 mb-1">
                  Name Recipes
                </label>
                <input
                  autoComplete="off"
                  className="form-control "
                  type="text"
                  placeholder="Name Recipes"
                  name="name"
                  defaultValue={recipes_details_name}
                  onChange={handleChangeEdit}
                />

                <label className="d-flex justify-content-start mt-3  mb-1">
                  Photo
                </label>
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img
                      className="picture-profile "
                      src={
                        previewEdit === undefined || previewEdit === null
                          ? recipes_details_photo_id === null ||
                            recipes_details_photo_id === undefined
                            ? PhotoEmpty
                            : recipes_details_photo_id
                          : previewEdit
                      }
                      alt=""
                    />
                  </div>
                </div>
                <input
                  className="form-control mt-3 mb-1 "
                  type="file"
                  placeholder="photo"
                  defaultValue={
                    newPhotoEdit === undefined
                      ? recipes_details_photo_id
                      : newPhotoEdit
                  }
                  name="photo_id"
                  onChange={handleUploadEdit}
                />

                <label className="d-flex justify-content-start mt-3  mb-1">
                  Videos
                </label>
                <input
                  autoComplete="off"
                  className="form-control "
                  type="text"
                  placeholder="Videos Url"
                  name="videos_id"
                  defaultValue={recipes_details_videos_id}
                  onChange={handleChangeEdit}
                />

                <label className="d-flex justify-content-start mt-3  mb-1">
                  Description
                </label>
                <textarea
                  autoComplete="off"
                  className="form-control "
                  type="text"
                  placeholder="description Recipes"
                  name="description"
                  rows="25"
                  defaultValue={recipes_details_description}
                  onChange={handleChangeEdit}
                />

                <label className="d-flex justify-content-start mt-3  mb-1">
                  Category id
                </label>
                <input
                  autoComplete="off"
                  className="form-control "
                  type="text"
                  placeholder="Category Id"
                  name="category_id"
                  defaultValue={recipes_details_category_id}
                  onChange={handleChangeEdit}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    setPreviewEdit();
                    setNewPhotoEdit();
                    document.getElementById("form-edit-recipes").reset();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-warning text-light"
                 
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default MyRecipesModalEdit;
