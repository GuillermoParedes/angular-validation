import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

    endPoint: string = '/bp/products'

  constructor(httpClient: HttpClient) {
    super(httpClient)
   }


   getAll() {
    return this.get(this.endPoint)
   }
}