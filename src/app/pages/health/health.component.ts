import { Component, OnInit } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { HealthModule } from './health.module'
import { ExamOneContentComponent } from './components/exam-one/exam-one.component'
import { Router } from '@angular/router'
import { UserResponse } from './models/health.model'

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [SharedModule, HealthModule, ExamOneContentComponent],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent implements OnInit{
  userResponse: UserResponse
  selectedExam: number
  decodeJwt: any

  constructor(
    private readonly router: Router
  ){
    this.selectedExam = 0
    this.userResponse = {
      dni: '',
      name: '',
      operation: '',
      job: '',
      system: '',
      selectedExam: 0
    }
    const token = localStorage.getItem('token')
    this.decodeJwt = JSON.parse(window.atob(token!.split('.')[1]))
  }

  ngOnInit(): void {
    if (this.decodeJwt.type != 'conductor') {
      this.router.navigate(['/home/dashboard'])
    } else {
      this.tokenExpired()
      this.getUserData()
    }
  }

  getUserData() {
    this.decodeJwt.sheet 
    setTimeout(() => {
      this.userResponse = {
        dni: '47638923',
        name: 'Pedro Bustamante',
        operation: 'Quellaveco',
        job: 'Residente',
        system: '8x8',
        selectedExam: 2
      }
      const examSelected = localStorage.getItem('sheet_sequence')
      if (examSelected != null) {
        this.selectedExam = parseInt(examSelected)
      } else {
        this.selectedExam = this.userResponse.selectedExam
        localStorage.setItem('sheet_sequence', this.userResponse.selectedExam.toString())
      }
    }, 1500);
  }

  tokenExpired(): void {
    if (Math.floor((new Date).getTime() / 1000) >= this.decodeJwt.exp) 
      this.logout()
  }

  confirm(): void {
    this.logout()
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('sheet_sequence')
    this.router.navigate(['/verification'])
  }
}