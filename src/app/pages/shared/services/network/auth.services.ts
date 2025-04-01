import { Injectable } from '@angular/core'
import { Response } from '../../models/response.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login, Token } from '../../../login/login.models'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = ''
  private baseUrl: string = 'https://api-operaciones.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  isAuth(): boolean {
    try {
      this.token = localStorage.getItem('token')
      if(this.token != null && this.token != '') {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  Authenticate(login: Login): Observable<Response<Token>> {
    return this.http.post<Response<Token>>(this.baseUrl + 'monitoreo/authentication', login)
  }

  VerificationToken(): Observable<Response<boolean>> {
    return this.http.post<Response<boolean>>(this.baseUrl + 'monitoreo/valid-token', {})
  }
}