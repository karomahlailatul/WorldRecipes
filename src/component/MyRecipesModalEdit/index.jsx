import React, { useState, Fragment, useEffect } from "react";
import pen from "../../assets/images/Vector.png";

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes,getMyRecipesDetails, putMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";

function MyRecipesModalEdit({id}) {

  // let idproduct = id.id;

  // console.log(id)

  const [preview, setPreview] = useState();
  const [newPicture, setNewPicture] = useState(null);

  const dispatch = useDispatch();

  const dispatchMyRecipes = () => {
    dispatch(getMyRecipes(id)).unwrap();
  };

  const dispatchMyRecipesDetails = () => {
    dispatch(getMyRecipesDetails(id)).unwrap();
  };

  const {
    recipes_id,
    recipes_name,
    recipes_photo_id,
    recipes_videos_id,
    recipes_description,
    recipes_category_id,
    recipes_users_id,
  } = useSelector((state) => state.MyRecipes);

  console.log(recipes_id)
  const [dataRecipes, setDataRecipes] = useState({
    id: recipes_id,
    name: recipes_name,
    photo_id : recipes_photo_id,
    videos_id: recipes_videos_id,
    description: recipes_description,
    category_id : recipes_category_id, 
    users_id : recipes_users_id, 
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

  const handleUpdate = async (e) => {
    await e.preventDefault();
    const formData = new FormData();
    formData.append("id", dataRecipes.id === undefined ? recipes_id : dataRecipes.id);
    formData.append("name", dataRecipes.name === undefined ? recipes_name : dataRecipes.name);
    formData.append("photo_id", newPicture === undefined ? recipes_photo_id : newPicture);
    formData.append("videos_id", dataRecipes.videos_id === undefined ? recipes_videos_id : dataRecipes.videos_id);
    formData.append("description", dataRecipes.description === undefined ? recipes_description : dataRecipes.description);
    formData.append("category_id", dataRecipes.category_id === undefined ? recipes_category_id : dataRecipes.category_id);
    formData.append("users_id", dataRecipes.users_id === undefined ? recipes_users_id : dataRecipes.users_id);

    // console.log( dataRecipes.id === undefined ? recipes_id : dataRecipes.id);
    // console.log( dataRecipes.name === undefined ? recipes_name : dataRecipes.name);
    // console.log( newPicture === undefined ? recipes_photo_id : newPicture);
    // console.log( dataRecipes.videos_id === undefined ? recipes_videos_id : dataRecipes.videos_id);
    // console.log( dataRecipes.description === undefined ? recipes_description : dataRecipes.description);
    // console.log( dataRecipes.category_id === undefined ? recipes_category_id : dataRecipes.category_id);
    // console.log( dataRecipes.users_id === undefined ? recipes_users_id : dataRecipes.users_id);

    // const put_user_name = (dataRecipes.name === undefined ? user_name : dataRecipes.name);
    // const put_user_gender = (dataRecipes.gender === undefined ? user_gender : dataRecipes.gender);
    // const put_user_date_of_birth = (dataRecipes.date_of_birth === undefined ? user_date_of_birth : dataRecipes.date_of_birth);
    // const put_user_phone =  (dataRecipes.phone === undefined ? user_phone : dataRecipes.phone);
    // const put_user_role = (dataRecipes.role === undefined ? user_role : dataRecipes.role);
    // const put_user_picture =  (newPicture === undefined ? user_picture : newPicture);

    dispatch(putMyRecipes(id,formData))
      .unwrap()
      .then((item) => {
        setNewPicture();
        setPreview();
        dispatchMyRecipes();
        // dispatchProfileUser();
      });
  };

  
    console.log( dataRecipes.id === undefined ? recipes_id : dataRecipes.id);
    console.log( dataRecipes.name === undefined ? recipes_name : dataRecipes.name);
    console.log( newPicture === undefined ? recipes_photo_id : newPicture);
    console.log( dataRecipes.videos_id === undefined ? recipes_videos_id : dataRecipes.videos_id);
    console.log( dataRecipes.description === undefined ? recipes_description : dataRecipes.description);
    console.log( dataRecipes.category_id === undefined ? recipes_category_id : dataRecipes.category_id);
    console.log( dataRecipes.users_id === undefined ? recipes_users_id : dataRecipes.users_id);

  useEffect(() => {
    dispatchMyRecipesDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <img type="button" className="icon-edit mt-2" src={pen} alt="Edit Icon" data-bs-toggle="modal" data-bs-target="#modal-edit" />

      <div
        className="modal fade"
        id="modal-edit"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="modal-edit"
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
                <input autoComplete="off" className="form-control " type="text" placeholder="ID" name="id" defaultValue={recipes_id} disabled onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3  mb-1">User ID</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="User ID" name="users_id" disabled defaultValue={recipes_users_id} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3 mb-1">Name Recipes</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Name Recipes" name="name" defaultValue={recipes_name} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Photo</label>
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img className="picture-profile " src={preview === undefined || preview === null ? (recipes_photo_id === null || recipes_photo_id === undefined ? PhotoEmpty : recipes_photo_id) : preview} alt="" />
                  </div>
                </div>
                <input className="form-control mt-3 mb-1 " type="file" placeholder="photo" defaultValue={newPicture === undefined ? recipes_photo_id : newPicture} name="photo" onChange={handleUpload} />

               
                <label className="d-flex justify-content-start mt-3  mb-1">Videos</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Videos Url" name="videos_id" defaultValue={recipes_videos_id} onChange={handleChange} />
                
                <label className="d-flex justify-content-start mt-3  mb-1">Description</label>
                <textarea autoComplete="off" className="form-control " type="text" placeholder="description Recipes" name="description"  rows="25" defaultValue={recipes_description} onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3  mb-1">Category id</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Gender" name="gender" defaultValue={recipes_category_id} onChange={handleChange} />
                
              
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
      </div>
    </Fragment>
  );
}

export default MyRecipesModalEdit;
