import React, { useState, Fragment, useEffect } from "react";
import pen from "../../assets/images/Vector.png";

import { useDispatch, useSelector } from "react-redux";

import { getProfileUser, putProfileUser } from "../../app/redux/Slice/ProfileUserSlice";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";

function ModalEdit() {
  const [preview, setPreview] = useState();
  const [newPicture, setNewPicture] = useState(null);

  const dispatch = useDispatch();

  const dispatchProfileUser = () => {
    dispatch(getProfileUser()).unwrap();
  };

  const {
    // ProfileUser
    // user_id,
    user_email,
    user_name,
    user_gender,
    user_phone,
    user_date_of_birth,
    user_picture,
    user_role,
    // user_created_on,
    // user_updated_on
  } = useSelector((state) => state.ProfileUser);

  const [dataUser, setDataUser] = useState({
    name: user_name,
    gender: user_gender,
    date_of_birth: user_date_of_birth,
    phone: user_phone,
    role: user_role,
  });

  // console.log(user_role)

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
    console.log(dataUser);
    console.log(newPicture);
  };

  const handleUpload = (e) => {
    setNewPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdate = async (e) => {
    await e.preventDefault();
    const formData = new FormData();
    formData.append("name", dataUser.name === undefined ? user_name : dataUser.name);
    formData.append("gender", dataUser.gender === undefined ? user_gender : dataUser.gender);
    formData.append("date_of_birth", dataUser.date_of_birth === undefined ? user_date_of_birth : dataUser.date_of_birth);
    formData.append("phone", dataUser.phone === undefined ? user_phone : dataUser.phone);
    formData.append("role", dataUser.role === undefined ? user_role : dataUser.role);
    formData.append("picture", newPicture === undefined ? user_picture : newPicture);

    console.log(dataUser.name === undefined ? user_name : dataUser.name);
    console.log(dataUser.gender === undefined ? user_gender : dataUser.gender);
    console.log(dataUser.date_of_birth === undefined ? user_date_of_birth : dataUser.date_of_birth);
    console.log(dataUser.phone === undefined ? user_phone : dataUser.phone);
    console.log(dataUser.role === undefined ? user_role : dataUser.role);
    console.log(newPicture === undefined ? user_picture : newPicture);

    // const put_user_name = (dataUser.name === undefined ? user_name : dataUser.name);
    // const put_user_gender = (dataUser.gender === undefined ? user_gender : dataUser.gender);
    // const put_user_date_of_birth = (dataUser.date_of_birth === undefined ? user_date_of_birth : dataUser.date_of_birth);
    // const put_user_phone =  (dataUser.phone === undefined ? user_phone : dataUser.phone);
    // const put_user_role = (dataUser.role === undefined ? user_role : dataUser.role);
    // const put_user_picture =  (newPicture === undefined ? user_picture : newPicture);

    dispatch(putProfileUser(formData))
      .unwrap()
      .then((item) => {
        setNewPicture();
        setPreview();
        dispatchProfileUser();
      });
  };

  useEffect(() => {
    dispatch(getProfileUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <img type="button" className="icon-edit mt-2" src={pen} alt="Edit Icon" data-bs-toggle="modal" data-bs-target="#modal-edit" />

      <div
        className="modal fade"
        id="modal-edit"
        // data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="modal-edit"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <form onSubmit={handleUpdate}>
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
                <div className="d-flex justify-content-center">
                  <div className="position-relative">
                    <img className="picture-profile rounded-circle" src={preview === undefined || preview === null ? (user_picture === null || user_picture === undefined ? PhotoEmpty : user_picture) : preview} alt="" />
                  </div>
                </div>

                <label className="d-flex justify-content-start mt-3  mb-1">Picture</label>
                <input className="form-control" type="file" placeholder="photo" defaultValue={newPicture === undefined ? user_picture : newPicture} name="photo" onChange={handleUpload} />

                <label className="d-flex justify-content-start mt-3 mb-1">Email :</label>

                <input autoComplete="off" className="form-control " type="text" placeholder="Email" name="Email" defaultValue={user_email} disabled onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3 mb-1">Name</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Name" name="name" defaultValue={user_name} onChange={handleChange} />
                <label className="d-flex justify-content-start mt-3  mb-1">Gender</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Gender" name="gender" defaultValue={user_gender} onChange={handleChange} />
                <label className="d-flex justify-content-start mt-3  mb-1">Phone</label>
                <input autoComplete="off" className="form-control " type="text" placeholder="Phone Number" name="phone" defaultValue={user_phone} onChange={handleChange} />

                <label className="d-flex justify-content-start mt-3  mb-1">Date of birth</label>

                <input className="form-control " type="date" id="start" name="date_of_birth" defaultValue={user_date_of_birth} min="1920-01-01" max="2050-12-12" onChange={handleChange} />
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
                    setTimeout(() => {
                      setPreview();
                      setNewPicture();
                    }, 2500);
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

export default ModalEdit;
