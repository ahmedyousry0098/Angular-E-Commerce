import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductService: ProductService, private _Router: Router) {}

  isLoading: boolean = false
  products!: IProduct[]

  ngOnInit() {
    this._ProductService.reqProducts().subscribe({
      next: (data) => {
        this._ProductService.setProducts(data.products)
        this._ProductService.getProducts().subscribe(val => this.products = val)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openProdDetails(id: number) {
    this._Router.navigate([`product`, id])
  }
}
