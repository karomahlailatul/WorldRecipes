import {
  Fragment,
  useEffect,
  useState,
  useMemo,
  useRef,
  forwardRef,
} from "react";

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useRowSelect, useGlobalFilter, useAsyncDebounce } from "react-table";
=======
import {
  useTable,
  usePagination,
  useRowSelect,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
>>>>>>> 66679e290f973fdd662869fa682a4648f6c88da4

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes, deletedSelectedMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
<<<<<<< HEAD
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";
=======
import Footer from "../../component/footer";
>>>>>>> 66679e290f973fdd662869fa682a4648f6c88da4

import searchIcon from "../../assets/images/icons/search.svg";
// import Select from "react-select";

import { ToastContainer, toast } from "react-toastify";

import imgProfile from "../../assets/images/add_image.png";

import MyRecipesModalEdit from "../../component/MyRecipesModalEdit";

const MyRecipes = () => {
  const token = localStorage.getItem("token");
  
  const id = localStorage.getItem("id");

  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD
=======
  const [productSeller, setProductSeller] = useState([]);

  const [updateProductSeller, setUpdateProductSeller] = useState([]);

  const [dataCategory, setDataCategory] = useState([]);

  const [showListProduct, setShowListProduct] = useState(true);

  const [conditionNew, setConditionNew] = useState();
  const [conditionUsed, setConditionUsed] = useState();

  const [statusEnable, setStatusEnable] = useState();
  const [statusDisable, setStatusDisable] = useState();

  const [showModalDeleteSelected, setShowModalDeleteSelected] = useState(false);
  const handleCloseModalDeleteSelected = () =>
    setShowModalDeleteSelected(false);
  const handleShowModalDeleteSelected = () => setShowModalDeleteSelected(true);

  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = () => setShowModalDelete(true);

  const [preview, setPreview] = useState();

  const [newPhoto, setNewPhoto] = useState(null);

  const [tags, setTags] = useState();
>>>>>>> 66679e290f973fdd662869fa682a4648f6c88da4

  const [diplayButton, setDisplayButton] = useState(true);

  const handleDisplay = () => {
    setDisplayButton(!diplayButton);
  };

<<<<<<< HEAD
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [totalData, setTotalData] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  const [sortBy, setSortBy] = useState("created_on");
  const [sort, setSort] = useState("desc");

  let keywordValue = `search=${keyword}&`;
  let value = `sortby=${sortBy}&sort=${sort}&page=${currentPage}&limit=${limit}`;

  const getUsers = async () => {
    if (keyword !== null || keyword !== undefined) {
      let valueSender = keywordValue + value;
      await dispatch(getMyRecipes(valueSender))
        .unwrap()
        .then((item) => {
          setUsers(item.data);
          setLimit(item.pagination.limit);
          setCurrentPage(item.pagination.currentPage);
          setTotalPage(item.pagination.totalPage);
          setTotalData(item.pagination.totalData);
        });
    } else {
      let valueSender = value;
      await dispatch(getMyRecipes(valueSender))
        .unwrap()
        .then((item) => {
          setUsers(item.data);
          setLimit(item.pagination.limit);
          setCurrentPage(item.pagination.currentPage);
          setTotalPage(item.pagination.totalPage);
          setTotalData(item.pagination.totalData);
        });
    }
  };

  const { valueRecipes } = useSelector((state) => state.MyRecipes);
  console.log(valueRecipes);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, keyword, value]);
=======
  const getAllProduct = async () => {
    await axios
      .get(process.env.REACT_APP_API_BACKEND + "recipes/usersrecipes/" + id)
      .then((response) => {
        setProductSeller(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dataTable = productSeller;

  // Define a default UI for filtering
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <Fragment>
        recipes
        <div className="col-12 d-flex justify-content-between">
          <div className="col-10 d-flex border border-1 rounded-pill ">
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
>>>>>>> 66679e290f973fdd662869fa682a4648f6c88da4

  const searchData = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    setMsg("");
    setKeyword(query);
  };

<<<<<<< HEAD
  let items = [];
  if (currentPage > 1) {
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={(e) => {
          if (keyword === null) {
            setCurrentPage(currentPage - 1);
          } else {
            setKeyword(keyword);
            setCurrentPage(currentPage - 1);
          }
        }}
      />
    );
  }

  for (let page = 1; page <= totalPage; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        value={page}
        active={page === currentPage}
        onClick={(e) => {
          if (keyword === null) {
            setCurrentPage(page);
          } else {
            setKeyword(keyword);
            setCurrentPage(page);
          }
        }}
      >
        {page}
      </Pagination.Item>
    );
  }

  if (currentPage < totalPage) {
    items.push(
      <Pagination.Next
        key="next"
        onClick={(e) => {
          if (keyword === null) {
            setCurrentPage(currentPage + 1);
          } else {
            setKeyword(keyword);
            setCurrentPage(currentPage + 1);
          }
        }}
      />
    );
  }

  return (
    <Fragment>
      <div className="my-recipes-page">
        <div className="container mt-5 ">
          <div className="columns">
            <div className="column is-centered">
              <form onSubmit={searchData}>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input type="text" className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find something here..." />
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-info">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <Table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" />
                    </th>
                    <th scope="col">Name Recipes</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Videos</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
=======
          <div
            className="col-2"
            style={{ display: dataCheckList.length === 0 ? "none" : "block" }}
          >
            <button
              className="btn btn-danger mx-3 rounded-pill"
              onClick={handleShowModalDeleteSelected}
            >
              Delete
            </button>
            <Modal
              show={showModalDeleteSelected}
              onHide={handleCloseModalDeleteSelected}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are sure want to delete selected product ?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleCloseModalDeleteSelected}
                >
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
              <h6 className="text-dark fw-bold title-recipes-table ">
                {item.row.original.name}
              </h6>
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
              <img
                className="img-thumbnails"
                referrerPolicy="no-referrer"
                src={item.row.original.photo_id}
                alt=""
              />
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
              <img
                className="img-thumbnails"
                referrerPolicy="no-referrer"
                src={item.row.original.photo_id}
                alt=""
              />
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
              <p className="description-recipes-table ">
                {item.row.original.description}
              </p>
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
                <button
                  className="btn btn btn-warning  text-light  rounded-pill"
                  onClick={(e) => {
                    const getDetailProduct = async () => {
                      await axios
                        .get(
                          process.env.REACT_APP_API_BACKEND +
                            "product/" +
                            item.row.original.id
                        )
                        .then((res) => {
                          setUpdateProductSeller(res.data.data[0]);

                          setTags(res.data.data[0].category_id);

                          setConditionNew(
                            res.data.data[0].condition.toString() === "new"
                              ? true
                              : false
                          );
                          setConditionUsed(
                            res.data.data[0].condition.toString() === "used"
                              ? true
                              : false
                          );

                          setStatusEnable(
                            res.data.data[0].status.toString() === "enable"
                              ? true
                              : false
                          );
                          setStatusDisable(
                            res.data.data[0].status.toString() === "disable"
                              ? true
                              : false
                          );

                          // setPreview(URL.createObjectURL(res.data.data[0].photo.toString()));

                          // console.log(res.data.data[0].condition.toString())
                          // console.log(tags)
                          // console.log(updateProductSeller.status)
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
                </button>
              </div>
            </Fragment>
          );
        },
      },
    ],
    []
  );

  const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef();
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input
            type="checkbox"
            ref={resolvedRef}
            onChange={(e) => handleDisplay}
            checked={diplayButton}
            {...rest}
          />
        </>
      );
    }
  );

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
              <IndeterminateCheckbox
                {...getToggleAllPageRowsSelectedProps({})}
              />
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
    dispatch(deletedSelectedMyRecipes(dataCheckList)).unwrap();

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

  // const handleDelete = () => {
  //   const handleDeleted = async () => {
  //     await axios
  //       .delete(process.env.REACT_APP_API_BACKEND + "recipes/" + updateProductSeller.id, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         // alert("delete success");
  //         toast.success("Delete Selected Success", { autoClose: 2500 });
  //         setShowModalDelete(false);
  //         // getAllProduct();
  //       })
  //       .catch((err) => {
  //         // alert("delete failed");
  //         toast.success(err, { autoClose: 2500 });
  //         setShowModalDelete(false);
  //       });
  //   };
  //   handleDeleted();
  // };

  useEffect(() => {
    getAllProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="my-recipes-page">
        <div className="container vh-100">
          <Table responsive striped bordered hover {...getTableProps()}>
            <thead>
              <tr>
                <th colSpan={visibleColumns.length}>
                  <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
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
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
>>>>>>> 66679e290f973fdd662869fa682a4648f6c88da4
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <p className="title-recipes-table">{item.name}</p>
                      </td>
                      <td>
                        <img referrerPolicy="no-referrer" className="img-thumbnails" onClick={() => navigate("")} src={item.photo_id} alt="" />
                        <a target="_blank" rel="noopener noreferrer" href={item.photo}>
                          {item.photo}
                        </a>
                      </td>

                      <td>{item.videos_id}</td>
                      <td>
                        <p className="description-recipes-table"> {item.description}</p>
                      </td>
                      <td>
                        {/* <Link to={`${item.id}`}>
                  <button className="btn btn-primary" style={{marginRight:"10px"}}>Detail</button>
                  </Link>
                  <ModalEdit id={item.id} name={item.name} stock={item.stock} price={item.price} description={item.description}/>
                  <ModalDelete id={item.id} name={item.name}/>  */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p>
                Total Data: {totalData} Page: {totalData ? totalPage : 0} of {totalPage}
              </p>
              <p className="has-text-centered has-text-danger">{msg}</p>

<<<<<<< HEAD
              <Pagination>{items}</Pagination>
=======
          <div className=" d-xl-flex d-lg-flex d-md-grid d-sm-grid pagination ">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-between align-items-center my-2">
              <button
                className="btn btn-warning text-light  rounded-pill"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>{" "}
              <button
                className="btn btn-warning text-light  rounded-pill px-3"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </button>{" "}
              <button
                className="btn btn-warning  text-light  rounded-pill px-3"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {">"}
              </button>{" "}
              <button
                className="btn btn-warning text-light rounded-pill"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
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
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
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
>>>>>>> 66679e290f973fdd662869fa682a4648f6c88da4
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default MyRecipes;
