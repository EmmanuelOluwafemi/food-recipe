import axios from "axios";

const Axios = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1",
  headers: {
  },
});

export default Axios;