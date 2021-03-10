import { Product } from "./product";
import { ResponseModel } from "./responseModule";

export interface ProductResponseModule extends ResponseModel{
    data:Product[]
   
}