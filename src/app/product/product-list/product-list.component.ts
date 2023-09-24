import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/product/interfaces/product.interface';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductCardComponent {

  constructor(private _ProductService: ProductService, private _Router: Router) {}
  
  products!: IProduct[]

  ngOnInit() {
    this._ProductService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  openDetails(id: number) {
    this._Router.navigate(['product', id])
  }

  addToCart(product: IProduct) {
    this._ProductService.addToCart(product)
  }
}
