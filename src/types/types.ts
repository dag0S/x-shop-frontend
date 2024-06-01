export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  typeId: number;
  brandId: number;
}
