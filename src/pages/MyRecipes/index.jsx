import { Fragment, useEffect, useState, useMemo, useRef, forwardRef } from "react";

import { useTable, usePagination, useRowSelect, useGlobalFilter, useAsyncDebounce } from "react-table";

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes, deletedSelectedMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import searchIcon from "../../assets/images/icons/search.svg";
// import Select from "react-select";

import { ToastContainer, toast } from "react-toastify";

import imgProfile from "../../assets/images/add_image.png";


import PrivateAxios from "../../app/axios/PrivateAxios";

import MyRecipesModalEdit from "../../component/MyRecipesModalEdit"
import MyRecipesModalCreate from "../../component/MyRecipesModalCreate";


const MyRecipes = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  let api = PrivateAxios();

  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);

  const [updaterecipes, setUpdaterecipes] = useState([]);

  const [dataCategory, setDataCategory] = useState([]);

  const [showListProduct, setShowListProduct] = useState(true);

  const [conditionNew, setConditionNew] = useState();
  const [conditionUsed, setConditionUsed] = useState();

  const [statusEnable, setStatusEnable] = useState();
  const [statusDisable, setStatusDisable] = useState();

  const [showModalDeleteSelected, setShowModalDeleteSelected] = useState(false);
  const handleCloseModalDeleteSelected = () => setShowModalDeleteSelected(false);
  const handleShowModalDeleteSelected = () => setShowModalDeleteSelected(true);

  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = () => setShowModalDelete(true);

  const [preview, setPreview] = useState();

  const [newPhoto, setNewPhoto] = useState(null);

  const [tags, setTags] = useState();

  const [diplayButton, setDisplayButton] = useState(true);

  const options = dataCategory;

  // console.log(tags)

  const handleDisplay = () => {
    setDisplayButton(!diplayButton);
  };

  const getAllProduct = async () => {
    await api
      .get(process.env.REACT_APP_API_BACKEND + "recipes/usersrecipes/" + id)
      .then((response) => {
        setRecipes(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { MyRecipes} = useSelector((state) => state.MyRecipes);
  
  // console.log(MyRecipes)

  const dataTable = recipes;
  
  // const dataTable = MyRecipes;
  


  function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <Fragment>
        <div className="col-12 d-flex justify-content-between">
          <div className="col-2" >
           <MyRecipesModalCreate getAllProduct={getAllProduct} />
          </div>
          <div className="col-8 d-flex border border-1 rounded-pill ">
            <input
              className="form-control rounded-pill border-0 "
              value={value || ""}
              onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              placeholder={`Search Product`}
              style={{
                fontSize: "1.1rem",
                border: "0",
              }}
            ></input>

            <img className="ico-search" src={searchIcon} alt="" />
          </div>

          <div className="col-2 " style={{ display: dataCheckList.length === 0 ? "none" : "block" }}>
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
                <Button variant="danger" onClick={handleDeleteSelected}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Fragment>
    );
  }

  const columns = useMemo(
    () => [
      {
        Header: "Recipes Name",
        accessor: "name",
        Cell: (item) => {
          return (
            <Fragment>
              <h6 className="text-dark fw-bold title-recipes-table ">{item.row.original.name}</h6>
            </Fragment>
          );
        },
      },

      {
        Header: "Photo",
        accessor: "photo_id",
        Cell: (item) => {
          return (
            <Fragment>
              <img className="img-thumbnails" referrerPolicy="no-referrer" src={item.row.original.photo_id} alt="" />
            </Fragment>
          );
        },
      },
      {
        Header: "Videos",
        accessor: "videos_id",
        Cell: (item) => {
          return (
            <Fragment>
              <img className="img-thumbnails" referrerPolicy="no-referrer" src={item.row.original.photo_id} alt="" />
            </Fragment>
          );
        },
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: (item) => {
          return (
            <Fragment>
              <p className="description-recipes-table ">{item.row.original.description}</p>
            </Fragment>
          );
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (item) => {
          return (
            <Fragment>
              <div className="d-flex justify-content-center">
                {/* <p> {item.row}</p> */}
                {/* <button
                  className="btn btn btn-warning  text-light  rounded-pill"
                  onClick={(e) => {
                    const getDetailProduct = async () => {
                      await axios
                        .get(process.env.REACT_APP_API_BACKEND + "product/" + item.row.original.id)
                        .then((res) => {
                          setUpdaterecipes(res.data.data[0]);

                          setTags(res.data.data[0].category_id);

                    
                          // setPreview(URL.createObjectURL(res.data.data[0].photo.toString()));

                          // console.log(res.data.data[0].condition.toString())
                          // console.log(tags)
                          // console.log(updaterecipes.status)
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    };

                    getDetailProduct();
                    // console.log(item.row.original.id)
                    setShowListProduct(false);
                  }}
                  // style={{ marginRight: "10px" }}
                >
                  {"Edit"}
                </button> */}
                {/* <MyRecipesModalEdit id={item.row.original.id}/> */}
                
                    <MyRecipesModalEdit idRecipes={item.row.original.id} />

                    {/* <h6>{item.row.original.id}</h6> */}
              </div>
            </Fragment>
          );
        },
      },
    ],
    []
  );

  const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} onChange={(e) => handleDisplay} checked={diplayButton} {...rest} />
      </>
    );
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: dataTable,
    },

    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "id",

          Header: ({ getToggleAllPageRowsSelectedProps, row }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps({})} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps({})} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const dataCheckList = selectedFlatRows.map((d) => `'${d.original.id}'`);

  const handleDeleteSelected = () => {
    dispatch(deletedSelectedMyRecipes(dataCheckList))
      .unwrap()
      .then((item) => {
        if (item.statusCode === 200) {
          // getAllProduct();
          handleCloseModalDeleteSelected();
          // dispatchMyRecipes();
          getAllProduct();
        // dispatch(postSignUpUser(dataUser))
        }
      });

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

  const dispatchMyRecipes = () => {
    dispatch(getMyRecipes()).unwrap();
  };


  useEffect(() => {
    getAllProduct();
    // dispatchMyRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="my-recipes-page">
        <div className="container mb-3">
          <Table responsive striped bordered hover {...getTableProps()}>
            <thead>
              <tr>
                <th colSpan={visibleColumns.length}>
                  <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </th>
              </tr>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>

          {/* </table> */}

          <div className=" d-xl-flex d-lg-flex d-md-grid d-sm-grid pagination ">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-between align-items-center my-2">
              <button className="btn btn-warning text-light  rounded-pill" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>{" "}
              <button className="btn btn-warning text-light  rounded-pill px-3" onClick={() => previousPage()} disabled={!canPreviousPage}>
                {"<"}
              </button>{" "}
              <button className="btn btn-warning  text-light  rounded-pill px-3" onClick={() => nextPage()} disabled={!canNextPage}>
                {">"}
              </button>{" "}
              <button className="btn btn-warning text-light rounded-pill" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {">>"}
              </button>{" "}
            </div>
            <div className="col-xl-1 col-lg-1"></div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 d-flex justify-content-between align-items-center my-2">
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <span>
                | Go to page:{" "}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                  style={{ width: "100px" }}
                />
              </span>{" "}
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyRecipes;
