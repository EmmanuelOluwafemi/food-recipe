import axios from "axios";

const Axios = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  // withCredentials: true,
  headers: {
    // "Content-Type": "application/json",
    // "Accept": "application/json",
    // "X-Requested-With": "XMLHttpRequest",
    // 'Access-Control-Allow-Credentials': true,
  },
});

export default Axios;