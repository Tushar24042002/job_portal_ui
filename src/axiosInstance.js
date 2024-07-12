// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("Authorization"); 
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
// });

// export default axiosInstance;


import axios from "axios";
import { useContext } from "react";
import { LoadingContext } from "./Context/LoaderContext";

const axiosInstance = axios.create({
  // baseURL: "https://job-application-cqod.onrender.com",
  baseURL :"http://localhost:5000",
});

const useAxiosInterceptors = () => {
  const { startLoading, stopLoading } = useContext(LoadingContext);

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("Authorization");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      startLoading();
      return config;
    },
    (error) => {
      stopLoading();
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      stopLoading();
      return response;
    },
    (error) => {
      stopLoading();
      return Promise.reject(error);
    }
  );
};

export  { axiosInstance, useAxiosInterceptors };
