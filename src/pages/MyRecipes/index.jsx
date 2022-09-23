import {
  Fragment,
  useEffect,
  useState,
  useMemo,
  useRef,
  forwardRef,
} from "react";

import {
  useTable,
  useFilters,
  usePagination,
  useRowSelect,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

import { useDispatch, useSelector } from "react-redux";


import { getMyRecipesGetAllRecipes } from "../../app/redux/Slice/MyRecipesGetAllRecipesSlice";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import searchIcon from "../../assets/images/icons/search.svg";
// import Select from "react-select";

import { ToastContainer, toast } from "react-toastify";

import imgProfile from "../../assets/images/add_image.png";

import PrivateAxios from "../../app/axios/PrivateAxios";

import MyRecipesModalEdit from "../../component/MyRecipesModalEdit";
import MyRecipesModalCreate from "../../component/MyRecipesModalCreate";
import MyRecipesModalDelete from "../../component/MyRecipesModalDelete";


import { getMyRecipesGetDetailsRecipes } from "../../app/redux/Slice/MyRecipesGetDetailsRecipesSlice";


const MyRecipes = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);

  const [dataCategory, setDataCategory] = useState([]);

  const [tags, setTags] = useState();

  const [diplayButton, setDisplayButton] = useState(true);

  const options = dataCategory;

  const handleDisplay = () => {
    setDisplayButton(!diplayButton);
  };
  //   await api
  //     .get(process.env.REACT_APP_API_BACKEND + "recipes/usersrecipes/" + id)
  //     .then((response) => {
  //       setRecipes(response.data.data);
  //       // console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const { MyRecipesGetAllRecipes } = useSelector(
    (state) => state.MyRecipesGetAllRecipes
  );

  // const data = recipes;

  const dispatchMyRecipesGetAllRecipes = () => {
    dispatch(getMyRecipesGetAllRecipes()).unwrap();
  };

  const data = MyRecipesGetAllRecipes;


  const columns = useMemo(
    () => [
      {
        Header: "Recipes Name",
        accessor: "name",
        Cell: (item) => {
          return (
            <Fragment>
              <h6 className="text-dark fw-bold title-recipes-table "> {item.row.original.name}  </h6>
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
            

                <MyRecipesModalEdit 
                idRecipes={item.row.original.id} 
                dispatchMyRecipesGetAllRecipes={
                  dispatchMyRecipesGetAllRecipes
                }
                />

                <h6>{item.row.original.id}</h6>
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
    visibleColumns,
    setGlobalFilter,
    state: { globalFilter, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
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

  // const dispatchMyRecipesGetDetailsRecipes = () => {
  //   dispatch(getMyRecipesGetDetailsRecipes({idRecipes})).unwrap();
  // };

  
  useEffect(() => {
    dispatchMyRecipesGetAllRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="my-recipes-page">
        <div className="container my-5 "> 
          <Table  className="shadow vh-100"  striped bordered hover   {...getTableProps()}>
            <thead>
              <tr>
                <th colSpan={visibleColumns.length}>
                   <div className="col-12 d-flex">
                    <MyRecipesModalCreate
                      dispatchMyRecipesGetAllRecipes={
                        dispatchMyRecipesGetAllRecipes
                      }
                    />
                    <div className="col-8 d-flex border border-1 rounded-pill ">
                      <input
                        className="form-control border-0 rounded-pill bg-transparent"
                        placeholder={`Search Product`}
                        style={{
                          fontSize: "1.1rem",
                          border: "0",
                        }}
                        value={globalFilter || ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                      >
                      </input>
                      <img className="ico-search my-auto" src={searchIcon} alt=""/>
                    </div>

                    <MyRecipesModalDelete
                      dataCheckList={dataCheckList}
                      dispatchMyRecipesGetAllRecipes={
                        dispatchMyRecipesGetAllRecipes
                      }
                    />
                  </div>
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
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className=" d-xl-flex d-lg-flex d-md-grid d-sm-grid pagination ">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-between align-items-center my-2">
              <button
                className="btn btn-warning text-light  rounded-pill px-4"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>{" "}
              <button
                className="btn btn-warning text-light  rounded-pill px-4"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </button>{" "}
              <button
                className="btn btn-warning  text-light  rounded-pill px-4"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {">"}
              </button>{" "}
              <button
                className="btn btn-warning text-light rounded-pill px-4"
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
            </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyRecipes;
