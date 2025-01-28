export interface ISignup {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface ITems {
    label: string;
    desc: string;
}

export interface IFeatures {
  itm: string;
  title: string;
  desc: string;
}