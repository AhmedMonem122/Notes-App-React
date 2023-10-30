import useNotes from "../../hooks/use-notes";

const Modal = () => {
  const { title, setTitle, content, setContent } = useNotes();

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add Note
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              type="text"
              name=""
              id=""
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              className="form-control"
              type="text"
              name=""
              id=""
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
