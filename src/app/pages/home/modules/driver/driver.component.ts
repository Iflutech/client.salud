import { Component } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { DriverResponse, FilterDriver } from '../../models/driver.model'
import { NzMessageService } from 'ng-zorro-antd/message'
import { NzTableQueryParams } from 'ng-zorro-antd/table'
import { DriverModule } from './driver.module'

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [SharedModule, DriverModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {
  filter: FilterDriver
  data: DriverResponse
  totalElements: number
  isLoadingData: boolean

  constructor(
    private readonly message: NzMessageService
  ) {
    this.filter = {
      name: '',
      job: null,
      state: null,
      page: 1,
      size: 15
    }
    this.isLoadingData = true
    this.data = {
      totalElements: 0,
      data: []
    }
    this.totalElements = 0
  }

  changeParameters(params: NzTableQueryParams): void {
    const { pageIndex } = params
    this.filter = { ...this.filter, page: pageIndex }
    this.getDriverData()
  }

  getDriverData(): void {
    this.isLoadingData = true
    setTimeout(() => {
      this.isLoadingData = false
      this.data = {
        totalElements: 3,
        data: [
          {
            id: '3',
            name: 'Marco',
            lastName: 'Vazquez Cori',
            dni: '48278201',
            job: 'Residente',
            phone: '937829412',
            operation: 'Quellaveco',
            supervisorEmail: 'supervisor@iflutech.com',
            state: 'A'
          },
          {
            id: '8',
            name: 'Walter',
            lastName: 'Cosi Ticona',
            dni: '48278201',
            job: 'Técnico mecánico de motobombas',
            phone: '937829412',
            operation: 'Quellaveco',
            supervisorEmail: 'supervisor@iflutech.com',
            state: 'D'
          },
          {
            id: '10',
            name: 'Juan Carlos Octavio',
            lastName: 'Calatayud Villafuerte',
            dni: '48278201',
            job: 'Supervisor',
            phone: '937829412',
            operation: 'Hudbay',
            supervisorEmail: 'supervisor@iflutech.com',
            state: 'E'
          }
        ]
      }
      this.totalElements = this.data.totalElements
    }, 1500)
  }

  handleDeleteDriver(id: string): void {

  }
}