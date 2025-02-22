import { ILogin, ISignup } from "@/interfaces";
import { AxiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";

export async function signup(data: ISignup) {
  console.log(data);
  try {
    const res = await AxiosInstance.post("auth/register", data);
    return res;
  } catch (error) {
    console.log("Error from signup");
    throw error;
  }
}

export async function login(data: ILogin) {
  try {
    const res = await AxiosInstance.post("auth/login", data);
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

export async function checkAccessToken(refreshToken: string) {
  try {
    const res = await AxiosInstance.post(
      "sessions/refresh",
      {},
      {
        headers: {
          "x-refresh": refreshToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log("Error while rechecking access token", error);
  }
}

export async function requestResetPassword(email: string) {
  try {
    const res = await AxiosInstance.post("users/forgotpassword", email);
    return res;
  } catch (error) {
    console.log("Error in get email to reset password", error);
  }
}

interface IResetPass {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function resetPassword(
  id: string,
  code: string,
  data: IResetPass
) {
  try {
    const res = await AxiosInstance.post(
      `users/resetpassword/:${id}/:${code}`,
      data
    );
    return res;
  } catch (error) {
    console.log("Error in reset password", error);
  }
}
