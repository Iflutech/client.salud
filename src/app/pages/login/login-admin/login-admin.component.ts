import { Component } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login-admin.component.html',
  styleUrl: '../login.component.css'
})
export class LoginAdminComponent {
  loginForm: FormGroup

  isLoadingLoading: boolean = false
  passwordVisible: boolean = false

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(loginBody: any): void {
    if (this.loginForm.valid) {
      this.loginService() // REEMPLAZAR CON SERVICIO
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }
  
  loginService(): void {
    this.isLoadingLoading = true
    setTimeout(() => {
      localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTc0MzU1ODgyMywiZXhwIjoxNzQ5NDk2OTQyM30.jMtQ8AKy_lqXWuZ3KtpytL9C9nJqpO7DpanWKSVUmBg')
      this.router.navigate(['/home/dashboard'])
      this.isLoadingLoading = false
    }, 1500)
  }
}