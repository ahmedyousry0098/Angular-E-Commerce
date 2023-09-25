import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IProduct } from './interfaces/product.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  products = new BehaviorSubject<IProduct[]>([])
  cart = new BehaviorSubject<IProduct[]>([])

  apiLink: string = 'https://dummyjson.com/products'

  reqProducts(): Observable<any> {
    return this._HttpClient.get(this.apiLink)
  }

  getProducts() {
    return this.products.asObservable()
  }

  setProducts(products: IProduct[]) {
    products.map(prod => {
      Object.assign(prod, {quantity: 0})
    })
    this.products.next(products)
  }

  getCart() {
    return this.cart.asObservable()
  }

  setCart() {
    const cartList = this.products.value.filter(product => product.quantity > 0)
    this.cart.next(cartList)
  }

  increaseProductQuantity(id: number) {
    const updatedProducts = this.products.value.map(product => {
      if (product.id == id) {
        if (product.stock > product.quantity) {
          product.quantity ++
        }
      }
      return product
    })
    this.products.next(updatedProducts)
    this.setCart()
  }

  decreaseProductQuantity(id: number) {
    const updatedProducts = this.products.value.map(product => {
      if (product.id == id) {
        if (product.quantity >= 1) {
          product.quantity --
        }
      }
      return product
    })
    this.products.next(updatedProducts)
    this.setCart()
  }

  removeFromCart(id: number) {
    const updatedProducts = this.products.value.map(product => {
      if (product.id == id) {
        product.quantity = 0
      }
      return product
    })
    this.products.next(updatedProducts)
  }

}
