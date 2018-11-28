import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: Product[];
  qtys: number[] = [];
  
  constructor(private productservice: ProductService, private userservice: UserService, private dataservice: DataService, private router: Router) { }

  ngOnInit() {
    this.productservice.get().subscribe((data: any) => this.products = data);
  }



  addtocart(product: Product) {
    if (this.dataservice.curUser.UserId == -1) {
      alert("Please login first!");
    } 
    else {
      this.userservice.addtocart(product, product.qty).subscribe((data: any) => console.log(data));
      alert("Added successfully!");
  
    }

    

    
  }
  delete(product: Product) {
    if (this.dataservice.curUser.UserId != 0) {
      alert("Please login as an admin to delete.^_^")
    }
    else {
      this.productservice.deleteitem(product.productId).subscribe((data: any) => this.products = data, (err: HttpErrorResponse) => {
        alert("Failed");
      });
    }
  }


  test() {
    alert(this.dataservice.curUser.UserId);
    //for (var Key in this.products) {
    //  alert(this.products[Key]['price']);
    // //for (var key in this.products[Key]) {
    // //   alert(key+':'+ this.products[Key][key]);
    //}
     
  }


  getKeys(item) {
    return Object.keys(item);
  }


  }


