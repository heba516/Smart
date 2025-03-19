import { AxiosInstance } from "@/utils/axiosInstance";
import { IContactUs } from "@/interfaces";
import Cookies from "js-cookie";

export async function contactUs(data: IContactUs) {
  try {
    const res = await AxiosInstance.post("contact", data);
    return res;
  } catch (error) {
    console.log("contact us error", error);
  }
}

export async function login(data: ILogin) {
  try {
    const res = await AxiosInstance.post("sessions", data);
    console.log(res);

    const { accessToken, firstName, lastName } = res.data;

    Cookies.set("token", accessToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: 2,
    });

    const userName = firstName + " " + lastName;

    Cookies.set("userName", JSON.stringify(userName), {
      expires: 2,
      secure: true,
    });

    console.log(res.data);

    console.log(Cookies.get("refreshToken"));

    return res;
  } catch (error) {
    console.log("Error from login");
    throw error;
  }
}
