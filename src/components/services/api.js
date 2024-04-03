import axios from "axios";

const API_KEY = "LzoDWcfu-nIfccjYBx8KFi7DskdPURuJ4Wz_JNn2SoY";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 15,
};
export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?query=${query}&page=${page}`
  );
  return data;
};
