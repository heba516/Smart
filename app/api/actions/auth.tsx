import { ILogin, ISignup } from "@/interfaces";
import { AxiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";

export async function signup(data: ISignup) {
  console.log(data);
  try {
    const res = await AxiosInstance.post("register", data);
    return res;
  } catch (error) {
    console.log("Error from signup");
    throw error;
  }
}

export async function login(data: ILogin) {
  try {
    const res = await AxiosInstance.post("login", data);
    const { token, firstName, lastName } = res.data.data;

    Cookies.set("token", token, {
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

    return res;
  } catch (error) {
    console.log("Error from login");
    throw error;
  }
}
