import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/"
});

export default AxiosInstance;