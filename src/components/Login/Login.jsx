import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/images/Login-photo.jpg";
import { BsEnvelopeCheck, BsLockFill } from "react-icons/bs";
import useAuth from "../../hooks/use-auth";
import axios from "../../api/axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Login = () => {
  const { saveUserData } = useAuth();

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: function (values) {
      console.log("Submit", values);
      // sendLoginData( values );
    },
  });

  async function sendLoginData(obj) {
    setLoader(true);
    try {
      const { data } = await axios.post("/users/signIn", obj);
      setLoader(false);
      if (data.msg === "done") {
        toast.success("Welcome To Popcornflix", {
          duration: 3000,
          className: "text-info px-5 fw-bolder my-3",
          iconTheme: {
            primary: "#0dcaf0;",
            secondary: "#fff",
          },
        });
        // localStorage.setItem("userToken", data.token);
        // saveUserData();
        navigate("/notes");
      }
    } catch (error) {
      setLoader(false);
      console.log("Error : ", error);
      toast.error("Email Or Password is Wrong", {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  }

  return (
    <div className="container">
      <div className="bg-white rounded shadow my-5 p-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div>
              <img src={LoginImage} alt="Register" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 bg-white shadow rounded p-4">
            <h1>Sign In</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsEnvelopeCheck className="me-3" />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <small className="text-danger text-center ">
                  {formik.errors.email}
                </small>
              )}
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsLockFill className="me-3" />
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.password && formik.touched.password && (
                <small className="text-danger text-center ">
                  {formik.errors.password}
                </small>
              )}
              {loader ? (
                <button
                  type="button"
                  className="btn btn-outline-danger opacity-75 fw-bolder px-4"
                >
                  <span
                    className="spinner-border spinner-border-sm "
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              ) : (
                <button
                  disabled={!formik.isValid}
                  type="submit"
                  className="btn btn-danger opacity-75 mt-3"
                >
                  Sign In
                </button>
              )}

              <div className="d-flex mt-3">
                <p className="me-3">Don&apos;t Have an Account?</p>
                <Link to="/register">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
