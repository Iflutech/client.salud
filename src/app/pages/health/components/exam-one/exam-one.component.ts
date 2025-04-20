import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { HealthModule } from '../../health.module'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Router } from '@angular/router'
import { ExamData, ExamResponse, QuestionData, ResponseData, UserData } from '../models/exam.model'
import { UserResponse } from '../../models/health.model'

@Component({
  selector: 'content-exam-1',
  standalone: true,
  imports: [SharedModule, HealthModule],
  templateUrl: './exam-one.component.html',
  styleUrl: './exam-one.component.css'
})
export class ExamOneContentComponent implements OnInit {
  @Input() sheetData: UserResponse
  @Output() emitLogout = new EventEmitter()

  exams: ExamResponse[]
  userData: UserData

  currentStep: number
  isLoadingData: boolean
  formHeaderData: FormGroup

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly message: NzMessageService
  ) {
    this.exams = []
    this.currentStep = 0
    this.isLoadingData = false
    this.sheetData = {
      dni: '',
      name: '',
      operation: '',
      job: '',
      system: '',
      selectedExam: 0
    }
    this.userData = {
      dni: '',
      turnHour: '',
      rotationDay: ''
    }
    this.formHeaderData = this.fb.group({
      dni: [[Validators.required]],
      name: [[Validators.required]],
      operation: [[Validators.required]],
      job: [[Validators.required]],
      system: [[Validators.required]],
      turnHour: ['', [Validators.required, Validators.minLength(1)]],
      rotationDay: ['', [Validators.required, Validators.min(1)]]
    })
  }

  ngOnInit(): void {
    this.asignarDatos()
  }

  nextStep(data: any): void {
    if (this.formHeaderData.valid) {
      this.isLoadingData = true
      setTimeout(() => {
        this.userData = data
        this.exams = [ 
          {
            category: '0',
            questions: [
              {
                id: 1,
                seq: 1,
                question: '1. ¿Su peso ha cambiado en los ultimos 5 años?',
                selectAnswer: null,
                responses: [
                  { value: 1, name: 'a. Aumentado', points: 1 },
                  { value: 2, name: 'b. Disminuido', points: 2 },
                  { value: 3, name: 'c. No ha cambiado', points: 3 }
                ]
              }
            ]
          },
          {
            category: '1',
            questions: [
              {
                id: 2,
                seq: 2,
                question: '2. ¿Usted ronca?',
                selectAnswer: null,
                responses: [
                  { value: 4, name: 'a. Si', points: 1 },
                  { value: 5, name: 'b. No', points: 1 },
                  { value: 6, name: 'c. No sabe', points: 1 }
                ]
              },
              {
                id: 3,
                seq: 3,
                question: '3. Si usted ronca ¿Su ronquido es?',
                selectAnswer: null,
                responses: [
                  { value: 7, name: 'a. Ligeramente más fuerte que respirar', points: 1 },
                  { value: 8, name: 'b. Tan fuerte como hablar', points: 1 },
                  { value: 9, name: 'c. Más fuerte que hablar', points: 1 },
                  { value: 10, name: 'd. Muy fuerte- se puede escuchar en habitaciones adyacentes', points: 1 }
                ]
              },
              {
                id: 4,
                seq: 4,
                question: '4. ¿Con qué frecuencia ronca?',
                selectAnswer: null,
                responses: [
                  { value: 11, name: 'a. Todas las noches', points: 5 },
                  { value: 12, name: 'b. 3-4 veces por semana', points: 1 },
                  { value: 13, name: 'c. 1-2 veces por semana', points: 1 },
                  { value: 14, name: 'd. 1-2 veces por mes', points: 1 },
                  { value: 15, name: 'e. Nunca o casi nunca', points: 1 }
                ]
              },
              {
                id: 5,
                seq: 5,
                question: '5. ¿Alguna vez su ronquido ha molestado a otras personas?',
                selectAnswer: null,
                responses: [
                  { value: 4, name: 'a. Si', points: 1 },
                  { value: 5, name: 'b. No', points: 1 },
                  { value: 6, name: 'c. No sabe', points: 1 }
                ]
              },
              {
                id: 6,
                seq: 6,
                question: '6. ¿Ha notado alguien que usted deja de respirar cuando duerme?',
                selectAnswer: null,
                responses: [
                  { value: 16, name: 'a. Casi todas las noches', points: 1 },
                  { value: 17, name: 'b. 3-4 veces por semana', points: 10 },
                  { value: 18, name: 'c. 1-2 veces por semana', points: 1 },
                  { value: 19, name: 'd. 1-2 veces por mes', points: 1 },
                  { value: 20, name: 'e. Nunca o casi nunca', points: 1 }
                ]
              }
            ]
          },
          {
            category: '2',
            questions: [
              {
                id: 7,
                seq: 7,
                question: '7. ¿Se siente cansado o fatigado al levantarse por la mañana después de dormir?',
                selectAnswer: null,
                responses: [
                  { value: 21, name: 'a. Casi todos los días', points: 1 },
                  { value: 22, name: 'b. 3-4 veces por semana', points: 1 },
                  { value: 23, name: 'c. 1-2 veces por semana', points: 1 },
                  { value: 24, name: 'd. 1-2 veces por mes', points: 1 },
                  { value: 25, name: 'e. Nunca o casi nunca', points: 1 }
                ]
              },
              {
                id: 8,
                seq: 8,
                question: '8. ¿Se siente cansado o fatigado durante el día?',
                selectAnswer: null,
                responses: [
                  { value: 21, name: 'a. Casi todos los días', points: 1 },
                  { value: 22, name: 'b. 3-4 veces por semana', points: 1 },
                  { value: 23, name: 'c. 1-2 veces por semana', points: 1 },
                  { value: 24, name: 'd. 1-2 veces por mes', points: 1 },
                  { value: 25, name: 'e. Nunca o casi nunca', points: 1 }
                ]
              },
              {
                id: 9,
                seq: 9,
                question: '9. ¿Alguna vez se ha sentido somnoliento o se ha quedado dormido mientras va de pasajero en un carro o maneja un vehículo?',
                selectAnswer: null,
                responses: [
                  { value: 4, name: 'a. Si', points: 1 },
                  { value: 5, name: 'b. No', points: 1 }
                ]
              },
              {
                id: 10,
                seq: 10,
                question: 'Si la respuesta anterior es afirmativa 9b. ¿Con qué frecuencia ocurre esto?',
                selectAnswer: null,
                responses: [
                  { value: 21, name: 'a. Casi todos los días', points: 1 },
                  { value: 22, name: 'b. 3-4 veces por semana', points: 1 },
                  { value: 23, name: 'c. 1-2 veces por semana', points: 1 },
                  { value: 24, name: 'd. 1-2 veces por mes', points: 1 },
                  { value: 25, name: 'e. Nunca o casi nunca', points: 1 }
                ]
              }
            ]
          },
          {
            category: '3',
            questions: [
              {
                id: 11,
                seq: 11,
                question: '10. ¿Usted tiene la presión alta?',
                selectAnswer: null,
                responses: [
                  { value: 4, name: 'a. Si', points: 1 },
                  { value: 5, name: 'b. No', points: 1 },
                  { value: 6, name: 'c. No sabe', points: 1 }
                ]
              }
            ]
          }
        ]
        this.isLoadingData = false
        this.currentStep += 1
      }, 1000)
    } else {
      Object.values(this.formHeaderData.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  registerExam(): void {
    this.isLoadingData = true
    if(this.validateDataExam()) {
      setTimeout(() => {
        this.isLoadingData = false
        let examData = this.transformExamsData(this.exams)
        
        let examRequest = {
          userData: this.userData,
          examdata: examData
        }

        console.log(examRequest)

        this.router.navigate(['/response'])
      }, 1500)
    } else {
      this.isLoadingData = false
      this.message.create('warning', 'Debe responder todas las preguntas')
    }
  }

  transformExamsData(exams: ExamResponse[]): ExamData[] {
    return exams.map((exam: ExamResponse) => ({
      category: exam.category,
      answer: exam.questions.map((question: QuestionData) => {
        const selectedResponse = question.responses.find(
          (response: ResponseData) => response.value === question.selectAnswer
        )
        return {
          seq: question.seq,
          selectAnswer: question.selectAnswer,
          points: selectedResponse ? selectedResponse.points : 0,
        }
      }),
    }))
  }

  validateDataExam(): boolean {
    let responses: any[] = []
    let isNotAll: boolean = false
    this.exams.forEach((item) => {
      item.questions.forEach((question) => {
        responses.push({ questionId: question.id, response: question.selectAnswer })
      })
    })
    for (let response of responses) {
      if (response.response == '' || response.response == null) {
        isNotAll = true
      }
    }
    return !isNotAll
  }

  asignarDatos(): void {
    this.formHeaderData.get('dni')!.setValue(this.sheetData.dni)
    this.formHeaderData.get('name')!.setValue(this.sheetData.name)
    this.formHeaderData.get('operation')!.setValue(this.sheetData.operation)
    this.formHeaderData.get('job')!.setValue(this.sheetData.job)
    this.formHeaderData.get('system')!.setValue(this.sheetData.system)

    this.formHeaderData.get('name')!.disable()
    this.formHeaderData.get('operation')!.disable()
    this.formHeaderData.get('job')!.disable()
    this.formHeaderData.get('system')!.disable()
  }
}
