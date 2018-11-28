import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable()
export class ProductService {
  private headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:50196/api/product';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public search(str: string) {
    return this.http.get(this.accessPointUrl + '/' + str, { headers: this.headers });
  }

  public additem(product: Product) {
    return this.http.post(this.accessPointUrl, product, { headers: this.headers })
  }

  public updateitem(product: Product) {
    return this.http.put(this.accessPointUrl + '/' + product.productId, product, { headers: this.headers })
  }
    
  public deleteitem(id: number) {
    return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers })
  }

}
