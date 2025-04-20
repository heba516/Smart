import { AxiosInstance } from "@/utils/axiosInstance";
import { IContactUs, ILogin } from "@/interfaces";
import Cookies from "js-cookie";

export async function contactUs(data: IContactUs) {
  try {
    const res = await AxiosInstance.post("api/contact", data);
    return res;
  } catch (error) {
    console.log("contact us error", error);
  }
}

export async function login(data: ILogin) {
  try {
    const res = await AxiosInstance.post("api/sessions", data);
    console.log(res);

    const { accessToken, firstName, lastName, role } = res.data;

    if (role !== "admin") {
      throw new Error("Unauthorized access: Admin role required");
    }

    Cookies.set("token", accessToken, {
      // httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      // expires: 2,
    });

    const adminName = firstName + " " + lastName;

    Cookies.set("adminName", JSON.stringify(adminName), {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    console.log("name", Cookies.get("adminName"));

    // localStorage.setItem("adminName", JSON.stringify(adminName));
    console.log(res.data);
    return res;
  } catch (error) {
    logout();
    console.log("Error from login");
    throw error;
  }
}

export function logout() {
  Cookies.remove("token");
  Cookies.remove("adminName");
  // localStorage.clear();
}

export async function refreshAccessToken() {
  try {
    // This assumes your backend sets refresh_token as HttpOnly cookie
    const response = await AxiosInstance.post("api/sessions/refresh");

    const { accessToken } = response.data;

    // Update the access token
    Cookies.set("access_token", accessToken, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return accessToken;
  } catch (error) {
    logout();
    console.log("Session expired. Please login again.", error);
  }
}
