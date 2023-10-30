import { createContext, useState } from "react";

export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <NotesContext.Provider value={{ title, setTitle, content, setContent }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
