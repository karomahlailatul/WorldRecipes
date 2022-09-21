import React, { useState, Fragment, useEffect } from "react";
import pen from "../../assets/images/Vector.png";

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes,getMyRecipesDetails, postMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";


import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyRecipesModalCreate({getAllProduct}) {
  
  const id_token = localStorage.getItem("id");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let idproduct = id.id;

  // console.log(idRecipes)

  const [previewCreate, setPreviewCreate] = useState();
  const [newPhotoCreate, setNewPhotoCreate] = useState(null);

  const dispatch = useDispatch();

  const dispatchMyRecipes = () => {
    dispatch(getMyRecipes()).unwrap();
  };

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

  const handleChangeCreate = (e) => {
    setDataRecipes({
      ...dataRecipes,
      [e.target.name]: e.target.value,
    });
    console.log(dataRecipes);
    console.log(newPhotoCreate);
  };

  const handleUploadChange = (e) => {
    setNewPhotoCreate(e.target.files[0]);
    setPreviewCreate(URL.createObjectURL(e.target.files[0]));
  };


  const handleCreate = async (e) => {
    await e.preventDefault();
    const formDataCreate = new FormData();
    // formData.append("id", dataRecipes.id === undefined ? recipes_id : dataRecipes.id);
    formDataCreate.append("name",  dataRecipes.name);
    formDataCreate.append("photo_id",  newPhotoCreate);
    formDataCreate.append("videos_id",  dataRecipes.videos_id);
    formDataCreate.append("description",  dataRecipes.description);
    formDataCreate.append("category_id", dataRecipes.category_id);
    formDataCreate.append("users_id", id_token);

    // console.log( dataRecipes.id === undefined ? recipes_details_id : dataRecipes.id);
    // console.log( dataRecipes.name)
    // console.log( newPhotoCreate )
    // console.log( dataRecipes.videos_id )
    // console.log( dataRecipes.description )
    // console.log( dataRecipes.category_id )
    // console.log( id_token )

     await dispatch(postMyRecipes(formDataCreate))
      .unwrap()
      .then((item) => {
        setNewPhotoCreate();
        setPreviewCreate();
        setShow(false)
        getAllProduct()
        // dispatchMyRecipes();
        // dispatchProfileUser();
      });
  };



  useEffect(() => {
    
    // dispatchMyRecipes();
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
                    setPreviewCreate();
                    setNewPhotoCreate();
                  }}
                ></button>
              </div>

              <div className="modal-body">
               
                <label className="d-flex justify-content-start mb-1">ID Recipes :</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="ID" name="id" defaultValue={null} disabled onChange={handleChangeCreate} />

                <label className="d-flex justify-content-start mt-3  mb-1">User ID</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="User ID" name="users_id" disabled defaultValue={null} onChange={handleChangeCreate} />
                
                <label className="d-flex justify-content-start mt-3 mb-1">Name Recipes</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Name Recipes" name="name" defaultValue={null} onChange={handleChangeCreate} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Photo</label>
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img className="picture-profile " src={previewCreate === undefined || previewCreate === null ? (null === null || null === undefined ? PhotoEmpty : null) : previewCreate} alt="" />
                  </div>
                </div>
                <input className="form-control mt-3 mb-1 " type="file" placeholder="photo" defaultValue={newPhotoCreate === undefined ? null : newPhotoCreate} name="photo" onChange={handleUploadChange} />

               
                <label className="d-flex justify-content-start mt-3  mb-1">Videos</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Videos Url" name="videos_id" defaultValue={null} onChange={handleChangeCreate} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Description</label>
                <textarea autoComplete="off" className="form-control " type="text" placeholder="description Recipes" name="description"  rows="25" defaultValue={null} onChange={handleChangeCreate} />

                <label className="d-flex justify-content-start mt-3  mb-1">Category id</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Category Id" name="category_id" defaultValue={null} onChange={handleChangeCreate} />
                
              
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    setPreviewCreate();
                    setNewPhotoCreate();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-warning text-light"
                  onClick={(e) => {
                    // setTimeout(() => {
                      setPreviewCreate();
                      setNewPhotoCreate();
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
              onChange={handleChangeCreate}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              name="stock"
              value={dataRecipes.stock}
              onChange={handleChangeCreate}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              name="price"
              value={dataRecipes.price}
              onChange={handleChangeCreate}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo_id"
              onChange={handleUploadChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={dataRecipes.description}
              onChange={handleChangeCreate}/> */}


              
                <label className="d-flex justify-content-start  mb-1">User ID</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="User ID" name="users_id" disabled defaultValue={id_token} onChange={handleChangeCreate} />
                
                <label className="d-flex justify-content-start mt-3 mb-1">Name Recipes</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Name Recipes" name="name" defaultValue={dataRecipes.name} onChange={handleChangeCreate} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Photo</label>
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img className="picture-profile " src={previewCreate === undefined || previewCreate === dataRecipes.photo_id ? PhotoEmpty : previewCreate} alt="" />
                  </div>
                </div>
                <input className="form-control mt-3 mb-1 " type="file" placeholder="photo" defaultValue={newPhotoCreate} name="photo_id" onChange={handleUploadChange} />

               
                <label className="d-flex justify-content-start mt-3  mb-1">Videos</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Videos Url" name="videos_id" defaultValue={dataRecipes.videos_id} onChange={handleChangeCreate} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Description</label>
                <textarea autoComplete="off" className="form-control " type="text" placeholder="description Recipes" name="description"  rows="25" defaultValue={dataRecipes.description} onChange={handleChangeCreate} />

                <label className="d-flex justify-content-start mt-3  mb-1">Category id</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Category Id" name="category_id" defaultValue={dataRecipes.category_id} onChange={handleChangeCreate} />
              


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => {
            setPreviewCreate();
            setNewPhotoCreate();
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
