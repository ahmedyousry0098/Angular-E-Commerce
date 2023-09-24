import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private _ProductService: ProductService) {}
  cart!: IProduct[]
  totalPrice: number = 0
  ngOnInit() {
    this._ProductService.getCart().subscribe(element => {
      this.cart = element
      this.totalPrice =element.reduce((acc, curr) => {
          return acc + ((curr.price*((100 - curr.discountPercentage)/100))*curr.quantity)
        }, 0)
    }) 
  }

  increaseQuantity(id: number) {
    this._ProductService.increaseQuantity(id)
  }

  decreaseQuantity(id: number) {
    this._ProductService.decreaseQuantity(id)
  }

  removeFromCart(id: number) {
    console.log(id);
    
    this._ProductService.removeFromCart(id)
  }
}
