import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProductService } from '../product.service';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService
  ) {}
  productId: number = Number(this._ActivatedRoute.snapshot.params['id'])
  product!: IProduct
  quantity: number = 0

  ngOnInit() {
    this._ProductService.getProducts().subscribe({
      next: (prods) => {
        const products = prods as IProduct[] 
        const product = products.find(prod => prod.id == this.productId) as IProduct
        this.product = product
      }
    })
  }

  increaseQuantity() {
    if(this.quantity < this.product!.stock) {
      this.quantity += 1
    }
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity -= 1
    }
  }
}
