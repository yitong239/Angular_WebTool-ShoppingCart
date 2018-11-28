import { Injectable } from '@angular/core';
import { User } from './User';
import { Product } from './product';
import { CartItem } from './CartItem';

@Injectable()
export class DataService {
  curUser: User = {
    UserId: -1,
    UserName: '',
    PassWord: '',
    Cart: new Map<Product, number>()
  };
  curCart: CartItem[] = [];
}

