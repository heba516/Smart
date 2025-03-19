import { IContactUs } from "@/interfaces";
import { AxiosInstance } from "@/utils/axiosInstance";

export async function contactUs(data: IContactUs) {
  try {
    const res = await AxiosInstance.post("contact", data);
    return res;
  } catch (error) {
    console.log("contact us error", error);
  }
}
