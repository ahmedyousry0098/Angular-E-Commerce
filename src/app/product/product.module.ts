import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { EgpCurrencyPipe } from '../pipes/egp-currency.pipe';
import { ApplydiscountPipe } from '../pipes/applydiscount.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    ProductItemComponent,
    EgpCurrencyPipe,
    ApplydiscountPipe,
    CartComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductModule { }
