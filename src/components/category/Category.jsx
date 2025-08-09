import axios from "axios";
import { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

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
          <li key={cat?.id}>
            <a>{cat?.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
