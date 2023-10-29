import LoginImage from "../../assets/images/Login-photo.jpg";
import { BsEnvelopeCheck, BsLockFill } from "react-icons/bs";

const Login = () => {
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
            <form>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsEnvelopeCheck className="me-3" />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsLockFill className="me-3" />
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>

              <button type="submit" className="btn btn-danger opacity-75 mt-3">
                Sign In
              </button>

              <div className="d-flex mt-3">
                <p className="me-3">Don&apos;t Have an Account?</p>
                <a href="/">Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
