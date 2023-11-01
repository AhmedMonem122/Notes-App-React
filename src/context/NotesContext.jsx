import { createContext, useState } from "react";
import axios from "../api/axios";
import toast from "react-hot-toast";

export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [addNoteTitle, setAddNoteTitle] = useState("");
  const [addNoteContent, setAddNoteContent] = useState("");
  const [noNotesError, setNoNotesError] = useState(null);

  const getUserNotes = async () => {
    try {
      const { data } = await axios.get("/notes", {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });

      if (data.msg === "done") {
        setNotes(data.notes);
        setNoNotesError(null);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      if (error.response?.data.statusCode === 404) {
        setNoNotesError(error.response.data.msg);
      }
    }
  };

  const addNote = async () => {
    if (addNoteTitle && addNoteContent) {
      try {
        const { data } = await axios.post(
          "/notes",
          {
            title: addNoteTitle,
            content: addNoteContent,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        );

        getUserNotes();

        setAddNoteTitle("");
        setAddNoteContent("");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please fill in both title and content are required", {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  const deleteNote = async (id) => {
    try {
      const { data } = await axios.delete(`/notes/${id}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });

      getUserNotes();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id, title, content) => {
    if (title && content) {
      try {
        const { data } = await axios.put(
          `/notes/${id}`,
          {
            title,
            content,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        );

        console.log(data);

        getUserNotes();
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please fill in both title and content are required", {
        duration: 3000,
        className: " text-danger px-5 fw-bolder my-3",
      });
    }
  };

  return (
    <NotesContext.Provider
      value={{
        addNoteTitle,
        setAddNoteTitle,
        addNoteContent,
        setAddNoteContent,
        getUserNotes,
        noNotesError,
        addNote,
        notes,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
