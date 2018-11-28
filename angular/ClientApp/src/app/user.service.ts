import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LogInfo } from './LogInfo';
import { Product } from './product';

@Injectable()
export class UserService {

  private headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:50196/api/user';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  public login(loginfo: LogInfo) {
    return this.http.post(this.accessPointUrl + '/1', loginfo, { headers: this.headers });
  }
  public register(loginfo: LogInfo) {
    return this.http.post(this.accessPointUrl + '/2', loginfo, { headers: this.headers });
  }
  public getcart() {
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public addtocart(product: Product, qty: number) {
    return this.http.put(this.accessPointUrl + '/' + qty, product, { headers: this.headers });
  }

  public removefromcart(product: Product) {
    return this.http.delete(this.accessPointUrl + '/' + product.productId, { headers: this.headers });
  }

 

}
