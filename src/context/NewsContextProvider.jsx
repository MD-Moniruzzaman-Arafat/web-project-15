import { useEffect, useState } from "react";
import { NewsContext } from ".";
import { fetchNews } from "../fetchData";

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    let isMount = true;
    async function loadNews() {
      const newsData = await fetchNews();
      if (isMount) {
        setNews(newsData);
      }
    }
    loadNews();
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <>
      <NewsContext.Provider value={{ news, setNews }}>
        {children}
      </NewsContext.Provider>
    </>
  );
};

export default NewsContextProvider;
