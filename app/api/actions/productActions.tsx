import { IProductInfo } from "@/interfaces";
import AxiosInstance from "@/utils/axiosInstance";

export async function getAllProducts() {
  try {
    const res = await AxiosInstance.get("api/product");

    return res;
  } catch (error) {
    console.log("error while fetching products", error);
  }
}

export async function addProduct(data: IProductInfo) {
  try {
    const res = await AxiosInstance.post("api/product", data);
    console.log(res);

    return res;
  } catch (error) {
    console.log("error while adding product", error);
  }
}
