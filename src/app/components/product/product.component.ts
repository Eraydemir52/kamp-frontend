import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModule } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  

  products:Product[] = [];
 // productResponseModel:ProductResponseModule={};
  constructor() {}

  ngOnInit(): void {
    console.log("Init çalıştı");

  }
  getProducts(){
    
  }
}
