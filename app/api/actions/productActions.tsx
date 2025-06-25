import { IProductInfo } from "@/interfaces";
import AxiosInstance from "@/lib/axiosInstance";

export async function getAllProducts() {
  try {
    const res = await AxiosInstance.get("api/product?limit=50");

    return res;
  } catch (error) {
    console.log("error while fetching products", error);
  }
}

export async function getProduct(id: string) {
  try {
    const res = await AxiosInstance.get(`api/product/${id}`);

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
