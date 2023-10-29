import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

  //  solve reload page
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ userData, saveUserData, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
