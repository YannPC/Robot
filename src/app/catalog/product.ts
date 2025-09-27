import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {

private apiUrl = 'http://localhost:8081/api/products';
//in order to make Http calls, we need a service from the angualr core library itself, httpclient
constructor(private http: HttpClient) { }

//Method, the products as types as any, but it's actually got an IProduct type.
getProducts(): Observable<IProduct[]> {
  //return this.http.get<IProduct[]>('/api/products');
  //return this.http.get<IProduct[]>('http://localhost:8081/api/product');
  // all of them are working, te API server need to running at the same time as the app
  return this.http.get<IProduct[]>(this.apiUrl);
}
}
 