import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://esp-cam-response-default-rtdb.firebaseio.com/alerts",
});
export async function getTheftInfo() {
    try {
        const res = await AxiosInstance.get("/-OSthAMhToZLonSESUg0");

        return res;
    } catch (error) {
        console.log("error while fetching Theft Info", error);
    }
}

export async function getAllTheft() {
    try {
        const res = await AxiosInstance;

        return res;
    } catch (error) {
        console.log("error while fetching thefts", error);
    }
}
