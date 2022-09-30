import React, { useState ,Fragment } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from "react-redux";

import { deletedSelectedMyRecipesDeleteSelected } from "../../app/redux/Slice/MyRecipesDeleteSelectedRecipesSlice";

const MyRecipesModalDelete = ({dataCheckList, dispatchMyRecipesGetAllRecipes}) => {

  const [showModalDeleteSelected, setShowModalDeleteSelected] = useState(false);
  const handleCloseModalDeleteSelected = () => setShowModalDeleteSelected(false);
  const handleShowModalDeleteSelected = () => setShowModalDeleteSelected(true);

  const dispatch = useDispatch();

  const handleDeleteSelected = () => {
    dispatch(deletedSelectedMyRecipesDeleteSelected(dataCheckList))
    .unwrap()
    .then((item) => {
      if (item.statusCode === 200) {
        handleCloseModalDeleteSelected();
        dispatchMyRecipesGetAllRecipes();
      }
    });
    };

  return (
    <Fragment>
       <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3  d-grid px-3" >
           <button className="btn btn-danger rounded-pill " onClick={handleShowModalDeleteSelected} style={{ display: dataCheckList.length === 0 ? "none" : "block" }}>
              Delete
            </button>
          </div>
            <Modal backdrop="static" show={showModalDeleteSelected} onHide={handleCloseModalDeleteSelected} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are sure want to delete selected product ?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalDeleteSelected}>
                  Close
                </Button>
                <Button variant="danger" onClick={handleDeleteSelected}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
    </Fragment>
  );
};

export default MyRecipesModalDelete;
