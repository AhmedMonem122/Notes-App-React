import Note from "../Note/Note";

const Notes = () => {
  return (
    <div className="container">
      <div
        className="border-bottom border-dark position-relative mb-4"
        style={{ padding: "80px 10px 10px" }}
      >
        <h3>My Notes</h3>
        <button
          className="btn btn-primary position-absolute end-0"
          style={{ top: "25%" }}
        >
          + Add Note
        </button>
      </div>

      <div className="container">
        <div className="row">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
};

export default Notes;
