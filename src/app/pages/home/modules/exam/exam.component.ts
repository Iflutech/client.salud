import { Component } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { ExamModule } from './exam.module'
import { ExamResponse, ExamRegister, FilterExam } from '../../models/exam.model'
import { NzTableQueryParams } from 'ng-zorro-antd/table'
import { NzUploadFile } from 'ng-zorro-antd/upload'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
	selector: 'app-exam',
	standalone: true,
	imports: [SharedModule, ExamModule],
	templateUrl: './exam.component.html',
	styleUrl: './exam.component.css'
})
export class ExamComponent {
	filter: FilterExam
	data: ExamResponse
	registerData: ExamRegister
	totalElements: number
	isFilterOpen: boolean
	isRegisterOpen: boolean
	isLoadingData: boolean
	file: NzUploadFile[] = [] 

	constructor(
		private readonly message: NzMessageService
	) {
		this.filter = {
			exam: null,
			examType: null,
			state: null,
			page: 1,
			size: 15
		}
		this.registerData = {
			exam: '',
			examType: '',
			approvedCriteria: ''
		}
		this.data = {
			totalElements: 0,
			data: []
		}
		this.totalElements = 0
		this.isFilterOpen = false
		this.isRegisterOpen = false
		this.isLoadingData = true
	}

	changeParameters(params: NzTableQueryParams): void {
		const { pageIndex } = params
		this.filter = { ...this.filter, page: pageIndex }
		this.getExamInformationData()
	}

	getExamInformationData(): void {
		this.isLoadingData = true
		setTimeout(() => {
			this.isLoadingData = false
			this.data = {
				totalElements: 3,
				data: [
					{
						id: '1',
  					exam: 'Test Bimodal',
  					examType: 'Opción Múltiple',
  					approvedCriteria: 'Se tiene que seleccionar más de 5 preguntas de mayor puntaje a 3',
  					examFile: 'https://test.com/file',
  					examFileName: 'Test Bidmodal.pdf',
  					state: 'A'
					},
					{
						id: '2',
  					exam: 'Cuestionario Berlin',
  					examType: 'Opción Múltiple',
  					approvedCriteria: 'Se tiene que seleccionar más de 8 preguntas de mayor puntaje a 3',
  					examFile: 'https://test.com/file2',
  					examFileName: 'Cuestionario Berlin.pdf',
  					state: 'D'
					},
					{
						id: '3',
  					exam: 'Test STOP-BANG',
  					examType: 'Si/No',
  					approvedCriteria: 'No puede haber más de 4 preguntas respondidas con un sí',
  					examFile: 'https://test.com/file3',
  					examFileName: 'Test STOP-BANG.pdf',
  					state: 'E'
					},
					{
						id: '4',
  					exam: 'Escala de Somnolencia de Epworth',
  					examType: 'Opción múltiple',
  					approvedCriteria: 'No puede haber más de 8 preguntas respondidas con un sí',
  					examFile: 'https://test.com/file4',
  					examFileName: 'Escala de Somnolencia de Epworth.pdf',
  					state: 'P'
					}
				]
			}
			this.totalElements = this.data.totalElements
		}, 1500)
	}

	beforeUpload = (file: NzUploadFile): boolean => {
		this.file = this.file.concat(file)
    return false
  }

	validateRegisterData(): boolean {
		if (this.registerData.exam.trim().length == 0) {
			this.message.create('warning', 'Debe ingresar el nombre del examen')
			return false
		}
		if (this.registerData.examType.trim().length == 0) {
			this.message.create('warning', 'Debe seleccionar un tipo de examen')
			return false
		}
		if (this.registerData.approvedCriteria.trim().length == 0) {
			this.message.create('warning', 'Debe ingresar un criterio de aprobación')
			return false
		}
		if (this.registerData.approvedCriteria.length > 150) {
			this.message.create('warning', 'El criterio de aprobación no debe superar los 150 caracteres')
			return false
		}
		if (this.file.length == 0) {
			this.message.create('warning', 'Debe adjuntar el examen en pdf')
			return false
		}
		return true
	} 

	handleRegisterExam(): void  {
		if (this.validateRegisterData()) {
			const formData = new FormData()
			formData.append('exam', this.registerData.exam)
			formData.append('examType', this.registerData.examType)
			formData.append('approvedCriteria', this.registerData.approvedCriteria)
    	this.file.forEach((file: any) => {
      	formData.append('file', file)
    	})
			this.closeRegister()
			this.getExamInformationData()
		}
	}

  handleDeleteExam(item: string): void {
		console.log(item)
		this.isLoadingData = true
		setTimeout(() => {
			this.isLoadingData = false
			this.message.success('El examen se eliminó con éxito')
			this.getExamInformationData()
		}, 1500)
  }

	filterData(): void {
		console.log(this.filter)
		this.closeFilter()
		this.getExamInformationData()
	}

	cleanFilter(): void {
		this.reset()
		this.closeFilter()
		this.getExamInformationData()
	}

	openFilter(): void {
		this.isFilterOpen = true
	}

	openRegister(): void {
		this.isRegisterOpen = true
	}

	closeFilter(): void {
		this.isFilterOpen = false
	}

	closeRegister(): void {
		this.isRegisterOpen = false
		this.resetRegister()
	}

	reset(): void  {
		this.filter = {
			...this.filter,
			exam: null,
			examType: null,
			state: null,
			page: 1
		}
	}

	resetRegister(): void {
		this.file = []
		this.registerData = {
			exam: '',
			examType: '',
			approvedCriteria: ''
		}
	}
}