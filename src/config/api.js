import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("@token");
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) {
//       localStorage.clear();
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
