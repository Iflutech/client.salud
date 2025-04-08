import { Component, OnInit } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { SaludModule } from './salud.module'
import { ExamContentComponent } from './components/exam-1/exam.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-salud',
  standalone: true,
  imports: [SharedModule, SaludModule, ExamContentComponent],
  templateUrl: './salud.component.html',
  styleUrl: './salud.component.css'
})
export class SaludComponent implements OnInit{
  decodedData: string[] = []
  selectedExam: number
  decodeJwt: any
  base64String: string | null

  constructor(
    private readonly router: Router
  ){
    this.selectedExam = 0
    const token = localStorage.getItem('token')
    this.decodeJwt = JSON.parse(window.atob(token!.split('.')[1]))
    this.base64String = localStorage.getItem('sheet_sequence')
    
  }

  ngOnInit(): void {
    if (this.decodeJwt.type != 'conductor') {
      this.router.navigate(['/home/dashboard'])
    } else {
      this.tokenExpired()
      if (this.base64String == null) {
        this.logout()
      } else {
        this.decodeBase64(this.base64String)//OBTENER DATOS PERSONALES Y TIPO EXAMEN DESDE LOCAL STORAGE 
        this.selectedExam = parseInt(this.decodedData[5])
      }
    }
  }

  decodeBase64(base64: string): void {
    const decodedString = atob(base64);
    this.decodedData = decodedString.split('|');
  }

  tokenExpired() {
    if (Math.floor((new Date).getTime() / 1000) >= this.decodeJwt.exp) 
      this.logout()
  }

  confirm() {
    this.logout()
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('sheet_sequence')
    this.router.navigate(['/verification'])
  }
}