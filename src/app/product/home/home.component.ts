import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

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
    this._ProductService.getProducts().subscribe({
      next: (data) => {
        this.products = data as IProduct[]
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
