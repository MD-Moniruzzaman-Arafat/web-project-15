import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { fetchNewsBasedOnCategory } from "../../fetchData";
import { NewsContext } from "../../context";

const Category = () => {
  const [category, setCategory] = useState([]);
  const { setNews } = useContext(NewsContext);

  async function handleFilterData(id) {
    const filter = await fetchNewsBasedOnCategory(id);
    setNews(filter);
  }

  useEffect(() => {
    let isMount = true;
    async function fetchCategory() {
      const categoryRes = await axios.get("/data/categories.json");
      if (isMount) {
        setCategory(categoryRes.data);
      }
    }
    fetchCategory();

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <>
      <ul className="menu rounded-box w-full">
        <li className="menu-title">All Category</li>
        {category?.map((cat) => (
          <li onClick={() => handleFilterData(cat?.id)} key={cat?.id}>
            <a>{cat?.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
