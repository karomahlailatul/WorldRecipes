import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import pen from "../../assets/images/Vector.png";

function ModalEdit() {
  const [products, getProducts] = useState([]);
  const navigate = useNavigate();
  console.log(navigate);
  async function fetchData() {
    try {
      //  const token = localStorage.getItem("token");
      const createdAt = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}product`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      console.log("cek data = " + createdAt.data.data);
      getProducts(createdAt.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <img
        type="button"
        className="icon mt-5"
        src={pen}
        alt="Edit Icon"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form>
                <input
                  autocomplete="off"
                  className="form-control mt-3"
                  type="text"
                  placeholder="name"
                  name="name"
                  value={products.name}

                  // onChange={handleChange}
                />
                <input
                  autocomplete="off"
                  className="form-control mt-3"
                  type="text"
                  placeholder="stock"
                  name="stock"
                  value={products.stock}
                  // onChange={handleChange}
                />
                <input
                  autocomplete="off"
                  className="form-control mt-3"
                  type="text"
                  placeholder="price"
                  name="price"
                  value={products.price}
                  // onChange={handleChange}
                />
                <input
                  autocomplete="off"
                  className="form-control mt-3"
                  type="file"
                  placeholder="photo"
                  name="photo"
                  // onChange={handleUpload}
                />
                <input
                  autocomplete="off"
                  className="form-control mt-3"
                  type="text"
                  placeholder="description"
                  name="description"
                  value={products.description}
                  // onChange={handleChange}
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                // onChange={handleCreate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ModalEdit;
