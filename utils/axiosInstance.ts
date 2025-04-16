// import { logout, refreshAccessToken } from "@/app/api/actions/auth";
import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/api/"
});

// AxiosInstance.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;
    
//     // If 401 error and not a refresh request
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
      
//       try {
//         const newToken = await refreshAccessToken();
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return AxiosInstance(originalRequest);
//       } catch (refreshError) {
//           logout();
//           throw new Error("refreshError");
          
//         return Promise.reject(refreshError);
//       }
//     }
    
//     return Promise.reject(error);
//   }
// );

export default AxiosInstance;