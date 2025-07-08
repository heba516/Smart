import { AxiosInstance } from "@/lib/axiosInstance";
import { IContactUs, ILogin, IResetPass } from "@/interfaces";
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

    const { accessToken, firstName, lastName, role } = res.data;

    if (role !== "admin") {
      throw new Error("Unauthorized access: Admin role required");
    }

    Cookies.set("token", accessToken, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    const adminName = firstName + " " + lastName;

    Cookies.set("adminName", JSON.stringify(adminName), {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

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
}

export async function refreshAccessToken() {
  try {
    const response = await AxiosInstance.post("api/sessions/refresh");

    const { accessToken } = response.data;

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

export async function getProfile() {
  const token = Cookies.get("token");
  try {
    const res = await AxiosInstance.get("api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log("error when getting profile data", error);
  }
}

export async function resetPassword(data: IResetPass) {
  try {
    const res = await AxiosInstance.post("/api/users/resetpassword", data);
    return res;
  } catch (error) {
    console.log("error when getting profile data", error);
  }
}
