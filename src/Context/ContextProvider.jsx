import React from "react";
import { AuthContext } from "./AuthContext";

const ContextProvider = ({ children }) => {
  const allInfo = {
    name: "Korim",
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
