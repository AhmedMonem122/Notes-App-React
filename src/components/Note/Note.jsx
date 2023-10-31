import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import useNotes from "../../hooks/use-notes";

const Note = ({ title, content, _id }) => {
  const { deleteNote, getUserNotes } = useNotes();

  return (
    <div className="col-md-4">
      <div className="bg-white shadow text-center py-4 mt-3 rounded">
        <p>{title}</p>
        <p>{content}</p>
        <div className="d-flex justify-content-center align-items-center">
          <AiOutlineEdit
            className="me-3 text-primary"
            style={{ cursor: "pointer" }}
          />
          <BsFillTrash3Fill
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => {
              deleteNote(_id);
              return getUserNotes();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
