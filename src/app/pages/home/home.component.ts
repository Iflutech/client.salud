import { Component, OnInit } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { Router, RouterLink, RouterOutlet } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd/message'
import { HomeModule } from './home.module'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, HomeModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  decodeJwt: any

  initials: string

  isCollapsed: boolean
  isOpen: boolean

  constructor(
    private readonly router: Router,
    private readonly message: NzMessageService
  ) {
    const token = localStorage.getItem('token')
    this.decodeJwt = JSON.parse(window.atob(token!.split('.')[1]))

    this.isCollapsed = false
    this.isOpen = false

    this.initials = 'ADM'
  }

  ngOnInit(): void {
    if (this.decodeJwt.type == 'conductor') {
      this.router.navigate(['/verification'])
    } else {
      this.tokenExpired()
    }
  }

  tokenExpired(): void {
    if (Math.floor((new Date).getTime() / 1000) >= this.decodeJwt.exp) {
      this.message.create('error', 'Su sesión a expirado, ingrese nuevamente')
      this.logOut()
    }
  }

  logOut(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('sheet_sequence')
    this.router.navigate(['/login'])
  }
}