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
    email: string;
    phone: string;
    message: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IProduct {
    _id?: string;
    title: string;
    barcode: string;
    shelfNumber?: string;
    price: number;
    image_url?: string;
    stock: number;
    categories: string[];
    state: "Available" | "Out" | "Low";
}

export interface ISecurity {
    title: string;
    loction: string;
    time: number;
    date: number;
    state: "Resolved" | "Critical" | "Under Review";
}

export interface ICustomer {
    title: string;
    id: string;
    total_orders: number;
    phone: string;
    state: "Active" | "Inactive" | "VIP";
}


export interface IProductInfo {
    title: string;
    description?: string;
    highlights?: string;
    image_url: string;
    price: number;
    discount?: number;
    discountType?: string;
    barcode: string;
    stock: number;
    brand: string;
    categoryId?: string;
    subCategoryId?: string;
    item_weight?: string;
}

export interface IStatusData {
    src: string;
    name: string;
    number: string;
    numberColor: string;
    numberUnite: string;
    percent: number;
    percentIncreased: boolean;
}
