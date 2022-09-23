import React, { useEffect, Fragment } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../app/redux/Slice/CategorySlice";
import MyPagination from "../../component/Pagination";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let keywordParam = searchParams.get("keyword");

  let sortbyParam = searchParams.get("sortby") || "created_on";
  let sortParam = searchParams.get("sort") || "desc";
  let pageParam = searchParams.get("page") || "1";
  let limitParam = searchParams.get("limit") || "24";
  // console.log(keywordParam);
  let keyword = `search=${keywordParam}&`;
  let value = `sortby=${sortbyParam}&sort=${sortParam}&page=${pageParam}&limit=${limitParam}`;

  const navigate = useNavigate();

  const { name } = useParams();

  const dispatch = useDispatch();
  const {
    Category,
    // statusCode,
    pagination_currentPage,
    pagination_totalData,
    //  pagination_limit,
    pagination_totalPage,
  } = useSelector((state) => state.Category);

  //console.log(name + "?" + value);
  let valueSender = "";
  const dispatchGetCategory = async () => {
    if (keywordParam === null || keywordParam === undefined) {
      valueSender = name + "?" + value;
      await dispatch(getCategory(valueSender)).unwrap();
    } else {
      valueSender = name + "?" + keyword + value;
      await dispatch(getCategory(valueSender)).unwrap();
    }
  };
  useEffect(() => {
    dispatchGetCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, keywordParam, value, dispatch]);

  return (
    <Fragment>
      <section>
        <div className="container mt-5 ">
          <div className="row-new">
            <div className="row">
              <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                  {keywordParam !== null ? (
                    <div>
                      <h1 className="fw-bold">Find : {keywordParam}</h1>
                      <p className="fs-6 text-muted">
                        Total Category {pagination_totalData}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h1 className="fw-bold">Find : {keywordParam}</h1>
                      <p className="fs-6 text-muted">
                        Total Category {pagination_totalData}
                      </p>
                    </div>
                  )}
                </div>
                <div className="d-flex col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                  <div className="col-8 d-flex align-items-center">
                    <Form.Select
                      className="w-100 me-2 ShadowBox"
                      onChange={(e) => {
                        if (keywordParam === null) {
                          setSearchParams({
                            sort: [e.target.value],
                            page: 1,
                            limit: limitParam,
                          });
                        } else {
                          setSearchParams({
                            keyword: keywordParam,
                            sort: [e.target.value],
                            page: 1,
                            limit: limitParam,
                          });
                        }
                      }}
                    >
                      <option value="desc">New Category</option>
                      <option value="asc">Oldest Category</option>
                    </Form.Select>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <Form.Select
                      className="w-100  ShadowBox"
                      onChange={(e) => {
                        if (keywordParam === null) {
                          setSearchParams({
                            sort: sortParam,
                            page: 1,
                            limit: [e.target.value],
                          });
                        } else {
                          setSearchParams({
                            keyword: keywordParam,
                            sort: sortParam,
                            page: 1,
                            limit: [e.target.value],
                          });
                        }
                      }}
                    >
                      <option className="option-box" value="24">
                        Show 24
                      </option>
                      <option className="option-box" value="48">
                        Show 48
                      </option>
                      <option className="option-box" value="84">
                        Show 84
                      </option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div className="col-12 my-3">
                <div className="row d-flex">
                  <Fragment>
                    {Category.map((item) => (
                      <Link
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-6 my-2 link-product text-decoration-none"
                        to={`../recipes/${item.id}`}
                        key={item.id}
                      >
                        <Card className="container border rounded align-items-center ShadowBox">
                          <div key={item.id}>
                            <div className="d-flex justify-content-center out-img-recipes">
                              <img
                                className="img-recipes"
                                referrerPolicy="no-referrer"
                                src={item.photo_id}
                                alt=""
                              />
                            </div>
                            <h5 className="text-dark fw-bold title-recipes">
                              {item.name}
                            </h5>
                            <p className="text-muted text-description-search">
                              {" "}
                              {item.description}
                            </p>
                            <div className="d-flex justify-content-center">
                              <button className="btn btn-warning rounded-pill mt-xl-5 mt-lg-5 mt-md-2 mt-sm-2 text-light mb-3">
                                Learn More
                              </button>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </Fragment>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center my-3">
                <MyPagination
                  total={pagination_totalPage}
                  current={pagination_currentPage}
                  // onChangePage={(e) => handleChangePage}
                  // keywordParam = {keywordParam}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Category;
