import { Component, OnInit } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { SaludModule } from '../salud/salud.module'
import { Router } from '@angular/router'
import countdown from 'countdown'

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [SharedModule, SaludModule],
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})
export class ResponseComponent implements OnInit { 
  approved: boolean = true
  segs: number = 60
  timerId: number = 0

  constructor(
    private readonly router: Router
  ) {
    const responseExam = Math.floor(Math.random() * 2)
    this.approved = responseExam == 1
  }

  ngOnInit(): void {
    let date = new Date()
    this.timerId = countdown(date, (ts: any) => {
      this.reduceTime()
    }) as number
  }

  reduceTime() {
    this.segs -= 1
    if (this.segs <= 0) {
      localStorage.removeItem('sheet_sequence')
      localStorage.removeItem('token')
      this.router.navigate(['/'])
    }
  }

  ngOnDestroy() {
    if(this.timerId) {
      clearInterval(this.timerId)
    }
  }
}