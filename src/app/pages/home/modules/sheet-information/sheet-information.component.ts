import { Component } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { SheetInformationModule } from './sheet-information.module'
import { RouterLink, RouterOutlet } from '@angular/router'
import { FilterSheetInformation, SheetInformation } from '../../models/sheet-information.models'
import { CommonUtil } from '../../../../shared/common.util'
import { NzTableQueryParams } from 'ng-zorro-antd/table'

@Component({
  selector: 'app-sheet-information',
  standalone: true,
  imports: [SharedModule, SheetInformationModule, RouterLink, RouterOutlet],
  templateUrl: './sheet-information.component.html',
  styleUrl: './sheet-information.component.css'
})
export class SheetInformationComponent {
  filter: FilterSheetInformation
  data: SheetInformation
  totalElements: number
  isFilterOpen: boolean
  isLoadingData: boolean
  date: Date[]

  constructor() {
    this.filter = {
      initialDate: '',
      endDate: '',
      driver: '',
      state: '',
      page: 1,
      size: 15
    }
    this.data = {
      totalElements: 0,
      data: []
    }
    this.totalElements = 0
    this.isFilterOpen = false
    this.isLoadingData = false
    this.date = []
  }

  changeParameters(params: NzTableQueryParams) {
    const { pageIndex } = params
    this.filter = { ...this.filter, page: pageIndex }
    this.getSheetInformationData()
  }

  getSheetInformationData() {
    this.isLoadingData = true
    setTimeout(() => {
      this.isLoadingData = false
      this.data = {
        totalElements: 3,
        data: [
          {
            id: '1',
            codSheet: 'FI-00001',
            date: '08/04/2025',
            driver: 'Luis Vasquez',
            operation: 'Quellaveco',
            exam: 'Cuestionario Berlin',
            typeExam: 'Opción múltiple',
            rotationDate: 2,
            state: 'A'
          },
          {
            id: '2',
            codSheet: 'FI-00002',
            date: '06/04/2025',
            driver: 'Javier Bustamante',
            operation: 'Quellaveco',
            exam: 'Escala de Somnolencia de Epworth',
            typeExam: 'Opción múltiple',
            rotationDate: 4,
            state: 'A'
          },
          {
            id: '3',
            codSheet: 'FI-00003',
            date: '07/04/2025',
            driver: 'Dario Gutierrez',
            operation: 'Hudbay',
            exam: 'Test STOP-BANG',
            typeExam: 'Si/No',
            rotationDate: 1,
            state: 'N'
          }
        ]
      }
      this.totalElements = this.data.totalElements
    }, 1500);
  }

  filterData() {
    console.log(this.filter)
    this.closeFilter()
    this.getSheetInformationData()
  }

  cleanFilter() {
    this.reset()
    this.closeFilter()
    this.getSheetInformationData()
  }

  openFilter() {
    this.isFilterOpen = true
  }

  closeFilter() {
    this.isFilterOpen = false
  }

  onChangeDate(result: Date[]) {
    this.filter.initialDate = CommonUtil.formatDateToService(result[0])
    this.filter.endDate = CommonUtil.formatDateToService(result[1])
  }

  getOrdinalNumber(rotationDay: number): string {
    return CommonUtil.getOrdinalDay(rotationDay);
  }

  reset() {
    this.date = []
    this.filter = { 
      ...this.filter,
      initialDate: '',
      endDate: '',
      driver: '',
      state: '',
      page: 1  
    }
  }
}