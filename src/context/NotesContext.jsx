import { createContext, useState } from "react";
import axios from "../api/axios";

export const NotesContext = createContext();

const USER_HEADERS_TOKEN = {
  headers: {
    token: localStorage.getItem("userToken"),
  },
};

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [addNoteTitle, setAddNoteTitle] = useState("");
  const [addNoteContent, setAddNoteContent] = useState("");
  const [noNotesError, setNoNotesError] = useState(null);

  const getUserNotes = async () => {
    try {
      const { data } = await axios.get("/notes", USER_HEADERS_TOKEN);

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
    try {
      const { data } = await axios.post(
        "/notes",
        {
          title: addNoteTitle,
          content: addNoteContent,
        },
        USER_HEADERS_TOKEN
      );

      getUserNotes();

      setAddNoteTitle("");
      setAddNoteContent("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const { data } = await axios.delete(`/notes/${id}`, USER_HEADERS_TOKEN);

      getUserNotes();

      console.log(data);
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
