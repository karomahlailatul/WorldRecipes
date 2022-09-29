import React, { useState, Fragment } from "react";

import { useDispatch } from "react-redux";

import { postMyRecipesPostRecipes } from "../../app/redux/Slice/MyRecipesPostRecipesSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyRecipesModalCreate({
  dispatchMyRecipesGetAllRecipes,
}) {
  const id_token = localStorage.getItem("id");
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  const [previewCreate, setPreviewCreate] = useState();
  const [newPhotoCreate, setNewPhotoCreate] = useState(null);

  const dispatch = useDispatch();

  const [dataRecipes, setDataRecipes] = useState({
    id: "",
    name: "",
    photo_id: "",
    videos_id: "",
    description: "",
    category_id: "",
    users_id: "",
  });

  const handleChangeCreate = (e) => {
    setDataRecipes({
      ...dataRecipes,
      [e.target.name]: e.target.value,
    });
    // console.log(dataRecipes);
    // console.log(newPhotoCreate);
  };

  const handleUploadChange = (e) => {
    setNewPhotoCreate(e.target.files[0]);
    setPreviewCreate(URL.createObjectURL(e.target.files[0]));
  };

  const handleCreate = async (e) => {
    await e.preventDefault();
    const formDataCreate = new FormData();

    formDataCreate.append("name", dataRecipes.name);
    formDataCreate.append("photo_id", newPhotoCreate);
    formDataCreate.append("videos_id", dataRecipes.videos_id);
    formDataCreate.append("description", dataRecipes.description);
    formDataCreate.append("category_id", dataRecipes.category_id);
    formDataCreate.append("users_id", id_token);

    await dispatch(postMyRecipesPostRecipes(formDataCreate))
      .unwrap()
      .then((item) => {
        setNewPhotoCreate();
        setPreviewCreate();
        setShowCreate(false);
        dispatchMyRecipesGetAllRecipes();
      });
  };

  return (
    <Fragment>
      <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 d-grid px-3">
        <button className="btn btn-success rounded-pill" onClick={handleShowCreate}>
          Create Recipes
        </button>
      </div>
      <Modal backdrop="static" size="lg" show={showCreate} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Create Recipes</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
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
              defaultValue={id_token}
              onChange={handleChangeCreate}
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
              defaultValue={dataRecipes.name}
              onChange={handleChangeCreate}
            />

            <label className="d-flex justify-content-start mt-3  mb-1">
              Photo
            </label>
            <div className="d-flex justify-content-center">
              <div className="position-relative">
                <img
                  className="picture-profile "
                  src={
                    previewCreate === undefined ||
                    previewCreate === dataRecipes.photo_id
                      ? PhotoEmpty
                      : previewCreate
                  }
                  alt=""
                />
              </div>
            </div>
            <input
              className="form-control mt-3 mb-1 "
              type="file"
              placeholder="photo"
              defaultValue={newPhotoCreate}
              name="photo_id"
              onChange={handleUploadChange}
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
              defaultValue={dataRecipes.videos_id}
              onChange={handleChangeCreate}
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
              defaultValue={dataRecipes.description}
              onChange={handleChangeCreate}
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
              defaultValue={dataRecipes.category_id}
              onChange={handleChangeCreate}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => {
                setPreviewCreate();
                setNewPhotoCreate();
                handleCloseCreate();
              }}
            >
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Create Recipes
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
}

export default MyRecipesModalCreate;
