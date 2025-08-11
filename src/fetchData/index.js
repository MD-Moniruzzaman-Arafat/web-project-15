import axios from "axios";

async function fetchNews() {
  const newsRes = await axios.get("/data/news.json");
  return newsRes.data;
}

async function fetchNewsBasedOnCategory(category) {
  const newsRes = await axios.get("/data/news.json");
  const filterCategory = newsRes.data.filter((f) => category === f.category_id);
  const all = newsRes.data.filter((f) => category !== f.category_id);
  if (filterCategory.length > 0) {
    return filterCategory;
  } else {
    return all;
  }
}

export { fetchNews, fetchNewsBasedOnCategory };
