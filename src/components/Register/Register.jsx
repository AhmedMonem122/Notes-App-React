import registerImage from "../../assets/images/Register-photo.jpg";
import {
  BsPersonFill,
  BsEnvelopeCheck,
  BsLockFill,
  BsFillTelephoneFill,
  BsGlobe,
} from "react-icons/bs";

const Register = () => {
  return (
    <div className="container">
      <div className="bg-white rounded shadow my-5 p-4">
        <div className="row align-items-center">
          <div className="col-md-6 bg-white shadow rounded p-4">
            <h1>Sign Up</h1>
            <form>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsPersonFill className="me-3" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
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
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsFillTelephoneFill className="me-3" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <BsGlobe className="me-3" />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                />
              </div>

              <button type="submit" className="btn btn-danger opacity-75 mt-3">
                Sign Up
              </button>

              <div className="d-flex mt-3">
                <p className="me-3">Have an Account?</p>
                <a href="/">Sign In</a>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div>
              <img src={registerImage} alt="Register" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
