import React, { useState, Fragment, useEffect } from "react";
import pen from "../../assets/images/Vector.png";

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes,getMyRecipesDetails, postMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";


import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyRecipesModalCreate() {
  
  const id_token = localStorage.getItem("id");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let idproduct = id.id;

  // console.log(idRecipes)

  const [preview, setPreview] = useState();
  const [newPicture, setNewPicture] = useState(null);

  const dispatch = useDispatch();

  // const dispatchMyRecipes = () => {
  //   dispatch(getMyRecipes(idRecipes)).unwrap();
  // };

  // const dispatchMyRecipesDetails = () => {
  //   dispatch(getMyRecipesDetails({idRecipes})).unwrap();
  // };

  // const {
  //   recipes_details_id,
  //   recipes_details_name,
  //   recipes_details_photo_id,
  //   recipes_details_videos_id,
  //   recipes_details_description,
  //   recipes_details_category_id,
  //   recipes_details_users_id,
  // } = useSelector((state) => state.MyRecipes);

  // console.log(recipes_id)
  const [dataRecipes, setDataRecipes] = useState({
    id: '',
    name: '',
    photo_id : '',
    videos_id: '',
    description: '',
    category_id : '', 
    users_id : '', 
  });


  // // console.log(user_role)

  const handleChange = (e) => {
    setDataRecipes({
      ...dataRecipes,
      [e.target.name]: e.target.value,
    });
    // console.log(dataRecipes);
    // console.log(newPicture);
  };

  const handleUpload = (e) => {
    setNewPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleCreate = async (e) => {
    await e.preventDefault();
    const formData = new FormData();
    // formData.append("id", dataRecipes.id === undefined ? recipes_id : dataRecipes.id);
    formData.append("name",  dataRecipes.name);
    formData.append("photo_id",  newPicture);
    formData.append("videos_id",  dataRecipes.videos_id);
    formData.append("description",  dataRecipes.description);
    formData.append("category_id", dataRecipes.category_id);
    formData.append("users_id",  dataRecipes.users_id);

    // console.log( dataRecipes.id === undefined ? recipes_details_id : dataRecipes.id);
    // console.log( dataRecipes.name === undefined ? recipes_details_name : dataRecipes.name);
    // console.log( newPicture === undefined ? recipes_details_photo_id : newPicture);
    // console.log( dataRecipes.videos_id === undefined ? recipes_details_videos_id : dataRecipes.videos_id);
    // console.log( dataRecipes.description === undefined ? recipes_details_description : dataRecipes.description);
    // console.log( dataRecipes.category_id === undefined ? recipes_details_category_id : dataRecipes.category_id);
    // console.log( dataRecipes.users_id === undefined ? recipes_details_users_id : dataRecipes.users_id);

    // const put_user_name = (dataRecipes.name === undefined ? user_name : dataRecipes.name);
    // const put_user_gender = (dataRecipes.gender === undefined ? user_gender : dataRecipes.gender);
    // const put_user_date_of_birth = (dataRecipes.date_of_birth === undefined ? user_date_of_birth : dataRecipes.date_of_birth);
    // const put_user_phone =  (dataRecipes.phone === undefined ? user_phone : dataRecipes.phone);
    // const put_user_role = (dataRecipes.role === undefined ? user_role : dataRecipes.role);
    // const put_user_picture =  (newPicture === undefined ? user_picture : newPicture);

    await dispatch(postMyRecipes({formData}))
      .unwrap()
      .then((item) => {
        setNewPicture();
        setPreview();
        setShow(false)
      //   dispatchMyRecipes();
      //   // dispatchProfileUser();
      });
  };
  
    // console.log( dataRecipes.id === undefined ? recipes_id : dataRecipes.id);
    // console.log( dataRecipes.name === undefined ? recipes_name : dataRecipes.name);
    // console.log( newPicture === undefined ? recipes_photo_id : newPicture);
    // console.log( dataRecipes.videos_id === undefined ? recipes_videos_id : dataRecipes.videos_id);
    // console.log( dataRecipes.description === undefined ? recipes_description : dataRecipes.description);
    // console.log( dataRecipes.category_id === undefined ? recipes_category_id : dataRecipes.category_id);
    // console.log( dataRecipes.users_id === undefined ? recipes_users_id : dataRecipes.users_id);

  useEffect(() => {
    // dispatchMyRecipesDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* <div className="d-flex justify-content-center text-center my-auto">
      <img type="button" className="icon-edit mt-2" src={pen} alt="Create Icon" data-bs-toggle="modal" data-bs-target="#modal-create" 
      // onClick={(e) => { dispatchMyRecipesDetails()}} 
      /><p className="">Edit</p>

    </div>
      <div
        className="modal fade"
        id="modal-create"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="modal-create"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <form 
          onSubmit={
            handleUpdate  }
            >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Profile
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    setPreview();
                    setNewPicture();
                  }}
                ></button>
              </div>

              <div className="modal-body">
               
                <label className="d-flex justify-content-start mb-1">ID Recipes :</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="ID" name="id" defaultValue={null} disabled onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3  mb-1">User ID</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="User ID" name="users_id" disabled defaultValue={null} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3 mb-1">Name Recipes</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Name Recipes" name="name" defaultValue={null} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Photo</label>
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img className="picture-profile " src={preview === undefined || preview === null ? (null === null || null === undefined ? PhotoEmpty : null) : preview} alt="" />
                  </div>
                </div>
                <input className="form-control mt-3 mb-1 " type="file" placeholder="photo" defaultValue={newPicture === undefined ? null : newPicture} name="photo" onChange={handleUpload} />

               
                <label className="d-flex justify-content-start mt-3  mb-1">Videos</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Videos Url" name="videos_id" defaultValue={null} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Description</label>
                <textarea autoComplete="off" className="form-control " type="text" placeholder="description Recipes" name="description"  rows="25" defaultValue={null} onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3  mb-1">Category id</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Category Id" name="category_id" defaultValue={null} onChange={handleChange} />
                
              
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    setPreview();
                    setNewPicture();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-warning text-light"
                  onClick={(e) => {
                    // setTimeout(() => {
                      setPreview();
                      setNewPicture();
                    // }, 2500);
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}


<button className="btn btn-success rounded-pill" onClick={handleShow}>
        Create Recipes
      </button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
        <Modal.Body>
        {/* <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name"
              value={dataRecipes.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              name="stock"
              value={dataRecipes.stock}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              name="price"
              value={dataRecipes.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo_id"
              onChange={handleUpload}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={dataRecipes.description}
              onChange={handleChange}/> */}


              
                <label className="d-flex justify-content-start  mb-1">User ID</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="User ID" name="users_id" disabled defaultValue={id_token} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3 mb-1">Name Recipes</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Name Recipes" name="name" defaultValue={dataRecipes.name} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Photo</label>
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img className="picture-profile " src={preview === undefined || preview === dataRecipes.photo_id ? PhotoEmpty : preview} alt="" />
                  </div>
                </div>
                <input className="form-control mt-3 mb-1 " type="file" placeholder="photo" defaultValue={newPicture === undefined ? dataRecipes.photo_id : newPicture} name="photo_id" onChange={handleUpload} />

               
                <label className="d-flex justify-content-start mt-3  mb-1">Videos</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Videos Url" name="videos_id" defaultValue={dataRecipes.videos_id} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Description</label>
                <textarea autoComplete="off" className="form-control " type="text" placeholder="description Recipes" name="description"  rows="25" defaultValue={dataRecipes.description} onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3  mb-1">Category id</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Category Id" name="category_id" defaultValue={dataRecipes.category_id} onChange={handleChange} />
              


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => {
            setPreview();
            setNewPicture();
            handleClose();
          }}>
            Close
          </Button>
          <button type="submit" className="btn btn-primary">Create Recipes</button>
        </Modal.Footer>
        </form>
      </Modal>


    </Fragment>
  );
}

export default MyRecipesModalCreate;
