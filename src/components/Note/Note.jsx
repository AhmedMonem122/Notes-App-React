import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

const Note = () => {
  return (
    <div className="col-md-4">
      <div
        className="bg-white shadow text-center py-4 mt-3 rounded"
        style={{ cursor: "pointer" }}
      >
        <p>hello</p>
        <p>world</p>
        <div className="d-flex justify-content-center align-items-center">
          <AiOutlineEdit className="me-3 text-primary" />
          <BsFillTrash3Fill className="text-danger" />
        </div>
      </div>
    </div>
  );
};

export default Note;
