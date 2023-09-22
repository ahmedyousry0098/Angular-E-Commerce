import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  apiLink: string = '../../assets/products-list.json'

  getProducts() {
    return this._HttpClient.get(this.apiLink)
  }

}
