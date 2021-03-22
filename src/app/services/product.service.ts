import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { ListResponseModul } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModule';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44303/api/";

  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModul<Product>>{
    let newPath=this.apiUrl+"products/getall"
   return this.httpClient.get<ListResponseModul<Product>>(newPath)
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModul<Product>>{
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModul<Product>>(newPath)
   }
   add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
}
