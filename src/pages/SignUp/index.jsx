import React, { useEffect, useState, Fragment } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { postSignUpUser } from "../../app/redux/Slice/SignUpUserSlice";

import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    role: "" || "user",
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });

    // console.log(dataUser);
  };

  const handleCreate = async (e) => {
    await e.preventDefault();
    if (dataUser.confirm_password.match(dataUser.password)) {
      // console.log("match password")
      if (document.getElementById("agree-user").checked) {
        dispatch(postSignUpUser(dataUser))
          .unwrap()

          .then((item) => {
            if (item.statusCode === 201) {
              setTimeout(() => {
                navigate("../sign-in");
              }, 2000);
            } else {
              console.log("Sign Up Failed");
            }
          });
      } else {
        toast.warning("Please Agree terms and conditions", { autoClose: 2000, toastId: "warningAgreeUser" });
      }
    } else {
      toast.warning("Password Not Match", { autoClose: 2000, toastId: "warningNotMatchPassword" });
    }
  };

  useEffect(() => {
    document.title = "Sign Up | World Recipes";
  }, []);

  return (
    <Fragment>
      <div className="sign-up-page d-flex justify-content-center align-items-center">
        <div className="container col-12 ">
          <div className="mt-5">
            <Link className="text-muted text-decoration-none" to={"../home"}>
              {"<"}&nbsp;Back Home
            </Link>
          </div>
          <div>
            <div className="d-flex col-xl-9 col-lg-9 col-md-12 col-sm-12 container justify-content-center">
              <form onSubmit={handleCreate} className="w-100 form-sign-up">
                <div className="text-center">
                  <h2 className="text-warning">Let’s Get Started !</h2>
                  <h6 className="text-muted">Create new account to access all features</h6>
                </div>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" name="name" className="form-input form-control" id="name" placeholder="Enter Name" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="text" name="email" className="form-input form-control" id="email" placeholder="Enter Email address" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input type="text" name="phone" className="form-input form-control" id="phone" placeholder="08xxxxxxxxxx" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" name="password" className="form-input form-control" id="password" placeholder="Enter Password" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirmation Password
                  </label>
                  <input type="password" name="confirm_password" className="form-control" id="confirm_password" placeholder="Enter Confirmation Password" onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <input className="form-input form-check-input" type="checkbox" value="" id="agree-user" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="agree-user">
                  &nbsp; I agree to terms & conditions
                  </label>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button type="form-input submit" className="btn btn-warning my-2 text-light">
                    Register Account
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p className="text-muted">Already have account?</p>
                  <Link className="text-warning text-decoration-none" to={"../sign-in"}>
                    &nbsp;Log in Here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
