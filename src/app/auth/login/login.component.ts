import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  isLoading: boolean = false
  reqRejection!: string

  handleLogin(form: any) {
    this.isLoading = true
    console.log(form.value);
    
    this._AuthService.login(form.value).subscribe({
      next: (response) => {
        this.isLoading = false
        localStorage.setItem('token', response.token)
        this._Router.navigate(['home'])
      }, 
      error: (err) => {
        this.isLoading = false
        this.reqRejection = err.errors.message
      }
    })
  }
}
