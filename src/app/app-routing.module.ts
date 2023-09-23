import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './product/home/home.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { PNFComponent } from './shared/pnf/pnf.component';
import { CartComponent } from './product/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: ProductItemComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PNFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
