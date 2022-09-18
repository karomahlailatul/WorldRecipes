import React, { useState,useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { postSignIn } from "../../app/redux/Slice/SignInSlice";

const SignIn = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "" ,
    // role: "" || "user",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(postSignIn(data))
      .unwrap()

      .then((item) => {
        // console.log(item)
        // console.log(item.statusCode)
        if (item.statusCode === 201) {
          setTimeout(() => {
            navigate("../home");
          }, 2000);
        } else {
          console.log("Sign In Failed");
        }
      });
  };

  useEffect(() => {
    document.title = "Sign In | World Recipes";
  }, []);

  return (
    <Fragment>
      <div className="sign-in-page">
      <div className="container col-12 d-flex">
          <div className="col-6 bg-warning">
            <img className="bg-picture" crossOrigin="anonymous" src={require("../../assets/images/bg.png")} alt="" />
            <img className="icon-picture" crossOrigin="anonymous" src={require("../../assets/icons/icon.png")} alt="" />
          </div>
          <div className="col-6 container text-start align-items-center">
            <form onSubmit={handleLogin} className="container form-sign-in">
              <div className="text-center">
              <h2 className="text-warning">Welcome</h2>
              <h6 className="text-muted">Log in insto your exiting account</h6>
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input name="email" type="text" className="form-control form-input" id="email" placeholder="Enter Email address" onChange={handleChange}/>
              </div>
             
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input name="password" type="password" className="form-control form-input" id="password" placeholder="Enter Password" onChange={handleChange}/>
              </div>
             
              <div className="d-flex justify-content-start my-2">
                <input className="form-check-input" type="checkbox" value="" id="agree-user" />

                <label className="form-check-label" htmlFor="agree-user">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-warning my-2">
                  Log in Account
                </button>
              </div>
              <div className="col-12 d-flex justify-content-center my-2">
                <p className="text-muted">Don’t have an account?</p>
                <p className="text-warning"> Sign Up Here</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
