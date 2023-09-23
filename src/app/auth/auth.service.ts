import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginForm, IRegisterForm } from './interfaces/auth.interface';
import { BASE_URL } from '../constants/api';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {}

  register(registerForm: IRegisterForm): Observable<any> {
    return this._HttpClient.post(`${BASE_URL}/register`, registerForm)
  }

  login(loginForm: ILoginForm): Observable<any> {
    return this._HttpClient.post(`${BASE_URL}/login`, loginForm)
  }
}
