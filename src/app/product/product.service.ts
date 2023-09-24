import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IProduct } from './interfaces/product.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  products = new BehaviorSubject<IProduct[]|[]>([])
  cart = new BehaviorSubject<IProduct[]>([])

  apiLink: string = 'https://dummyjson.com/products'

  reqProducts(): Observable<any> {
    return this._HttpClient.get(this.apiLink)
  }

  x = this.products.asObservable()
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

  addToCart(product: IProduct) {
    const isExist = this.cart.value.find(prod => prod.id == product.id)
    if (isExist) {
      return this.increaseQuantity(product.id)
    }
    this.cart.value.push({...product, quantity: 1})
    const updated = this.cart.value
    this.cart.next(updated)
  }

  removeFromCart(id: number) {
    const filteredCart = this.cart.value.filter(prod => prod.id != id)
    this.cart.next(filteredCart)    
  }

  increaseQuantity(id: number) {
    const updatedCart = this.cart.value.map(product => {
      if(product.id == id) {
        if(product.stock>product.quantity) {
          product.quantity += 1
        }
      }
      return product
    })
    this.cart.next(updatedCart)
  }

  decreaseQuantity(id: number) {
    const updatedCart = this.cart.value.map(product => {
      if(product.id == id) {
        if (product.quantity<=1) {
          this.removeFromCart(product.id)
        } else {
          product.quantity -= 1
        }
      }
      return product
    })
    this.cart.next(updatedCart)
  }
  
}
