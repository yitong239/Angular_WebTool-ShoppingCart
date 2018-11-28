import { Product } from "./product";

export class User {
  UserId: number;
  UserName: string;
  PassWord: string;
  Cart: Map<Product, number>;
}

