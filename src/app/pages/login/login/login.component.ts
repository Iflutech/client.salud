import { Component } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: '../login.component.css'
})
export class LoginComponent {
  verificationForm: FormGroup

  isLoadingVerification: boolean = false

  constructor(
    private readonly router: Router, 
    private readonly fb: FormBuilder
  ) {
    this.verificationForm = this.fb.group({
      dni: ['', [Validators.required]]
    })
    localStorage.removeItem('token')
    localStorage.removeItem('sheet_sequence')
  }

  verification(validationBody: any): void {
    if (this.verificationForm.valid) {
      this.login() // REEMPLAZAR CON SERVICIO
    } else {
      Object.values(this.verificationForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  login(): void {
    this.isLoadingVerification = true
    // OBJETO LOGIN DEVUELVE TOKEN Y DATOS PRINCIPALES EN BASE 64 -> String original tiene datos divididos en palotes (nombre|operacion|cargo|sistema|codigoExamen)
    setTimeout(() => {
      localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6ImNvbmR1Y3RvciIsInNoZWV0IjoiMiIsImFkbWluIjp0cnVlLCJpYXQiOjE3NDM1NTg4MjMsImV4cCI6MTc0OTQ5Njk0MjN9.A9S-Ncd1FwHHWLLKjnuv-RkpVhkJGvA__mSuTLFQzgI')
      this.router.navigate(['/'])
      this.isLoadingVerification = false
    }, 1500)
  }
}