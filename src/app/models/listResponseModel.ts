import { ResponseModel } from "./responseModule";

export interface ListResponseModul <T> extends ResponseModel{
   data:T[]; 
}