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

export async function updateProduct(id: string, data: IProductInfo) {
  try {
    const res = await AxiosInstance.put(`api/product/${id}`, data);
    console.log(res);

    return res;
  } catch (error) {
    console.log("error while updating product", error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const res = await AxiosInstance.delete(`api/product/${id}`);

    return res;
  } catch (error) {
    console.log("error while deleting product", error);
  }
}

interface IRestock {
  stock: number;
}

export async function restock(id: string, stock: IRestock) {
  try {
    const res = await AxiosInstance.put(`api/product/${id}`, stock);

    return res;
  } catch (error) {
    console.log("error while restock product", error);
  }
}

export async function getCategories() {
  try {
    const res = await AxiosInstance.get("api/category");

    return res;
  } catch (error) {
    console.log("error while fetching categories", error);
  }
}

export async function getSubCategories() {
  try {
    const res = await AxiosInstance.get("api/category/sub");

    return res;
  } catch (error) {
    console.log("error while fetching sub categories", error);
  }
}

export async function getSubCategoriesById(id: string) {
  try {
    const res = await AxiosInstance.get(`api/category/${id}`);

    return res;
  } catch (error) {
    console.log("error while fetching sub categories id", error);
  }
}
