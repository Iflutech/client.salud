import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { SharedModule } from '../../../../../shared/shared.module'
import { ActivatedRoute } from '@angular/router'
import { SheetDetailModule } from './sheet-detail.module'
import { SheetDetail } from './sheet-detail.model'

@Component({
  selector: 'detail-sheet',
  standalone: true,
  imports: [SharedModule, SheetDetailModule],
  templateUrl: './sheet-detail.component.html',
  styleUrl: './sheet-detail.component.css'
})
export class DetailSheetComponent implements OnInit {
  data: SheetDetail
  isLoadingDetail: boolean
  showSegment: number
  sheetId: string
  options: string[]


  constructor(
    private readonly route: ActivatedRoute, 
    private readonly location: Location
  ) {
    this.options = ['Ficha', 'Usuario']
    this.data = {
      state: '',
      header: {
        date: '',
        exam: '',
        typeExam: '',
        driver: '',
        job: '',
        operation: '',
        workingHours: '',
        system: '',
        rotationDay: ''
      },
      detail: [
        {
          question: '',
          answer: [
            {
              answer: '',
              isSelected: false
            }
          ]
        }
      ]
    }
    this.isLoadingDetail = false
    this.showSegment = 0
    this.sheetId = ''
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: any) => {
        this.sheetId = params['id']
        this.getDetail()
      }
    })
  }

  getDetail(): void {
    this.isLoadingDetail = true
    setTimeout(() => {
      this.data = {
        state: 'A',
        header: {
          date: '04/04/2025 09:20 am',
          exam: 'Cuestionario Berlin',
          typeExam: 'Opción múltiple',
          driver: 'Luis Vasquez Ospina',
          job: 'Jefe de operaciones',
          operation: 'Quellaveco',
          workingHours: 'Turno día',
          system: '8x8',
          rotationDay: '3'
        },
        detail: [
          {
            question: '1. ¿Su peso ha cambiado en los ultimos 5 años?',
            answer: [
              { answer: 'a. Aumentado', isSelected: true },
              { answer: 'b. Disminuido', isSelected: false },
              { answer: 'c. No ha cambiado', isSelected: false }
            ]
          },
          {
            question: '2. ¿Usted ronca?',
            answer: [
              { answer: 'a. Si', isSelected: false },
              { answer: 'b. No', isSelected: false },
              { answer: 'c. No sabe', isSelected: true }
            ]
          },
          {
            question: '3. Si usted ronca ¿Su ronquido es?',
            answer: [
              { answer: 'a. Ligeramente más fuerte que respirar', isSelected: false },
              { answer: 'b. Tan fuerte como hablar', isSelected: false },
              { answer: 'c. Más fuerte que hablar', isSelected: true },
              { answer: 'd. Muy fuerte- se puede escuchar en habitaciones adyacentes', isSelected: false }
            ]
          },
          {
            question: '4. ¿Con qué frecuencia ronca?',
            answer: [
              { answer: 'a. Todas las noches', isSelected: false },
              { answer: 'b. 3-4 veces por semana', isSelected: false },
              { answer: 'c. 1-2 veces por semana', isSelected: true },
              { answer: 'd. 1-2 veces por mes', isSelected: false },
              { answer: 'e. Nunca o casi nunca', isSelected: false }
            ]
          },
          {
            question: '5. ¿Alguna vez su ronquido ha molestado a otras personas?',
            answer: [
              { answer: 'a. Si', isSelected: false },
              { answer: 'b. No', isSelected: true },
              { answer: 'c. No sabe', isSelected: false }
            ]
          },
          {
            question: '6. ¿Ha notado alguien que usted deja de respirar cuando duerme?',
            answer: [
              { answer: 'a. Casi todas las noches', isSelected: false },
              { answer: 'b. 3-4 veces por semana', isSelected: false },
              { answer: 'c. 1-2 veces por semana', isSelected: false },
              { answer: 'd. 1-2 veces por mes', isSelected: true },
              { answer: 'e. Nunca o casi nunca', isSelected: false }
            ]
          },
          {
            question: '7. ¿Se siente cansado o fatigado al levantarse por la mañana después de dormir?',
            answer: [
              { answer: 'a. Casi todos los días', isSelected: false },
              { answer: 'b. 3-4 veces por semana', isSelected: true },
              { answer: 'c. 1-2 veces por semana', isSelected: false },
              { answer: 'd. 1-2 veces por mes', isSelected: false },
              { answer: 'e. Nunca o casi nunca', isSelected: false }
            ]
          },
          {
            question: '8. ¿Se siente cansado o fatigado durante el día?',
            answer: [
              { answer: 'a. Casi todos los días', isSelected: false },
              { answer: 'b. 3-4 veces por semana', isSelected: false },
              { answer: 'c. 1-2 veces por semana', isSelected: true },
              { answer: 'd. 1-2 veces por mes', isSelected: false },
              { answer: 'e. Nunca o casi nunca', isSelected: false }
            ]
          },
          {
            question: '9. ¿Alguna vez se ha sentido somnoliento o se ha quedado dormido mientras va de pasajero en un carro o maneja un vehículo?',
            answer: [
              { answer: 'a. Si', isSelected: true },
              { answer: 'b. No', isSelected: false }
            ]
          },
          {
            question: '9a. Si la respuesta anterior es afirmativa 9b. ¿Con qué frecuencia ocurre esto?',
            answer: [
              { answer: 'a. Casi todos los días', isSelected: false },
              { answer: 'b. 3-4 veces por semana', isSelected: false },
              { answer: 'c. 1-2 veces por semana', isSelected: false },
              { answer: 'd. 1-2 veces por mes', isSelected: true },
              { answer: 'e. Nunca o casi nunca', isSelected: false }
            ]
          },
          {
            question: '10. ¿Usted tiene la presión alta?',
            answer: [
              { answer: 'a. Si', isSelected: true },
              { answer: 'b. No', isSelected: false },
              { answer: 'c. No sabe', isSelected: false }
            ]
          }
        ]
      }
      this.isLoadingDetail = false
    }, 1500)
  }

  handleIndexChange(e: number): void {
    this.showSegment = e
  }

  goBack(): void {
    this.location.back()
  }
}