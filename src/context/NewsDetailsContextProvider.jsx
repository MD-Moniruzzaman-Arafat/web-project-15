import { useState } from "react";
import { NewsDetailsContext } from ".";

const NewsDetailsContextProvider = ({ children }) => {
  const [newsDetails, setNewsDetails] = useState({});
  return (
    <>
      <NewsDetailsContext.Provider value={{ newsDetails, setNewsDetails }}>
        {children}
      </NewsDetailsContext.Provider>
    </>
  );
};

export default NewsDetailsContextProvider;
