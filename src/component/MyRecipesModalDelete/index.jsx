import React, { useState, useEffect ,Fragment } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes, deletedSelectedMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

const MyRecipesModalDelete = (dataCheckList) => {

   const dataCheckListFull = dataCheckList.dataCheckList
  const [showModalDeleteSelected, setShowModalDeleteSelected] = useState(false);
  const handleCloseModalDeleteSelected = () => setShowModalDeleteSelected(false);
  const handleShowModalDeleteSelected = () => setShowModalDeleteSelected(true);

  console.log(dataCheckList.dataCheckList);

  const dispatch = useDispatch();

  const handleDeleteSelected = () => {
      dispatch(deletedSelectedMyRecipes(dataCheckListFull))
      .unwrap();

      // const handleDeleteSelect = async () => {
      //   await axios
      //     .delete(process.env.REACT_APP_API_BACKEND + "recipes/selected/" + dataCheckList, {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //         Authorization: `Bearer ${token}`,
      //       },
      //     })
      //     .then((res) => {
      //       // alert("delete success");
      //       toast.success("Delete Selected Success", { autoClose: 2500 });
      //       setShowModalDeleteSelected(false);
      //       // getAllProduct();
      //     })
      //     .catch((err) => {
      //       // alert("delete failed");
      //       toast.success(err, { autoClose: 2500 });
      //       setShowModalDeleteSelected(false);
      //     });
      // };
      // handleDeleteSelect();

    };

    useEffect(() => {
      // getAllProduct();
      // getMyRecipes()
      // dispatch(getMyRecipes())
      // .unwrap();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <Fragment>
      <div className="col-2" style={{ display: dataCheckListFull.length === 0 ? "none" : "block" }}>
        <button className="btn btn-danger mx-3 rounded-pill" onClick={handleShowModalDeleteSelected}>
          Delete
        </button>
        <Modal show={showModalDeleteSelected} onHide={handleCloseModalDeleteSelected} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are sure want to delete selected product ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModalDeleteSelected}>
              Close
            </Button>
            <Button
              variant="danger"
              onClick={handleDeleteSelected}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default MyRecipesModalDelete;
