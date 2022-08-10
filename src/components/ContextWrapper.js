import React, { createContext, useState } from "react";
export const Context = createContext();

const ContextWrapper = ({ children }) => {
  const [files, setFiles] = useState([]);
  
  return (
    <Context.Provider
      value={{
        files, setFiles,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextWrapper;
