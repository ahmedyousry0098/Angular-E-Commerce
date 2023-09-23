import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router
  ) {}

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

  reqRejection: string|null = null  
  isLoading: boolean = false
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)]),
    confirm_password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  handleRegister() {
    if(this.registerForm.invalid) return

    this.isLoading = true
    
    return this._AuthService.register(this.registerForm.value).subscribe({
      next: (response) => {        
        this.isLoading = false
        this._Router.navigate(['login'])
      },
      error: (err) => {
        this.isLoading = false
        this.reqRejection = err.error.message
      }
    })
  }
}
