import notesImage from "../../assets/images/notes.jpg";
import { BsPersonFill } from "react-icons/bs";

const NotesSidebar = () => {
  return (
    <div
      className="bg-dark text-white position-sticky top-0"
      style={{ height: "100vh", width: "25%" }}
    >
      <div className="d-flex justify-content-center align-items-baseline mt-5">
        <p className="me-3 d-none d-md-block">Notes</p>
        <div>
          <img
            className="img-fluid"
            src={notesImage}
            alt="notes"
            style={{ width: "20px" }}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-baseline mt-4">
        <p className="me-3 d-none d-md-block">Register</p>
        <BsPersonFill />
      </div>

      <div className="d-flex justify-content-center align-items-baseline mt-4">
        <p className="me-3 d-none d-md-block">Logout</p>
        <BsPersonFill />
      </div>
    </div>
  );
};

export default NotesSidebar;
