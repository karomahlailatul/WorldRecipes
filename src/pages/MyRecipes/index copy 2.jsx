import { Fragment, useEffect, useState, useMemo, useRef, forwardRef } from "react";

import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useRowSelect, useGlobalFilter, useAsyncDebounce } from "react-table";

import { useDispatch, useSelector } from "react-redux";

import { getMyRecipes, deletedSelectedMyRecipes } from "../../app/redux/Slice/MyRecipesSlice";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";

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

  const [diplayButton, setDisplayButton] = useState(true);

  const handleDisplay = () => {
    setDisplayButton(!diplayButton);
  };

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

  const searchData = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    setMsg("");
    setKeyword(query);
  };

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

              <Pagination>{items}</Pagination>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyRecipes;
