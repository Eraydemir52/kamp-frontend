import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/category';
import { ListResponseModul } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModule';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44303/api/';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModul<Category>> {
    return this.httpClient.get<ListResponseModul<Category>>(this.apiUrl+"categories/getall");
  }
  addCategory(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"categories/add",category);
  }
}