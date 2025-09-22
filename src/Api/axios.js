import axios from "axios";

const axiosInstance = axios.create({
  // baseURL:"http://localhost:5000",
  //deployed version on render.com
  baseURL: "https://amazone-api-deploy-uj8n.onrender.com",
});

export { axiosInstance };
