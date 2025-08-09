import axios from "axios";

async function fetchNews() {
  const newsRes = await axios.get("/data/news.json");
  return newsRes.data;
}

export { fetchNews };
