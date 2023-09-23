import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/product/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductCardComponent {
  @Input() products!: IProduct[]
  @Output() idEmitter = new EventEmitter()

  emitProdId(id: number) {
    return this.idEmitter.emit(id)
  }
}
