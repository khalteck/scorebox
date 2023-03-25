import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false);
  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }

  const [openNotifsBoard, setOpenNotifsBoard] = useState(false);
  function toggleNotifsBoard() {
    setOpenNotifsBoard((prev) => !prev);
    setOpenSearch(false);
  }

  const [openDropBoard, setOpenDropBoard] = useState(false);
  function toggleDropBoard() {
    setOpenDropBoard((prev) => !prev);
    setOpenSearch(false);
  }

  return (
    <AppContext.Provider
      value={{
        openNotifsBoard,
        toggleNotifsBoard,
        openDropBoard,
        toggleDropBoard,
        openSearch,
        toggleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
