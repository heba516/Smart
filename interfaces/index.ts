export interface ITems {
    label: string;
    desc: string;
}

export interface IFeatures {
  itm: string;
  title: string;
  desc: string;
}

export interface IContactUs {
    firstName: string;
    lastName: string;
    email: string
    phone: string
    message: string
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IProduct {
  productName: string;
  productId: string;
  price: number;
  stock: number;
  categories: string;
  status: "Available" | "Out" | "Low";
};