import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CartItem } from '../CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartItem[];

  constructor(private productservice: ProductService, private userservice: UserService, private dataservice: DataService, private router: Router) { }

  ngOnInit() {

    if (this.dataservice.curUser.UserId == -1) {
      alert('Please login first!');
      this.router.navigate(['login']);
    }
    else {
      this.userservice.getcart().subscribe(
        (data: any) => {
          this.cart = data;
        }, (err: HttpErrorResponse) => {
          alert("failed");
        });
    }
  }

  delete(p: Product) {
    this.userservice.removefromcart(p).subscribe((data: any) => this.cart =data);
  }

}
