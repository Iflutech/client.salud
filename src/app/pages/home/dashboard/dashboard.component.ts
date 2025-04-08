import { Component, OnInit } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  estadisticasGenerales: any
  driversApprovedByOrg: any[]
  moreFreqObservation: any[]
  workersFrequency: any[]

  graphicApprovedByOrd: any
  graphicmoreFreqObservation: any

  isLoadingGeneralStadistics: boolean
  isLoadingNoAvailable: boolean

  constructor(

  ){
    this.estadisticasGenerales = {
      quantityDayNoApproved: 4,
      quantityWeekNoApproved: 2,
      quantityMonthNoApproved: 1
    }

    this.driversApprovedByOrg = []
    this.moreFreqObservation = []
    this.workersFrequency = []

    this.isLoadingGeneralStadistics = false
    this.isLoadingNoAvailable = false
  }

  ngOnInit(): void {
    let quellaveco = [12, 2, 0]
    let hudbay = [9, 1, 2]
    this.driversApprovedByOrg = [quellaveco, hudbay]
    this.moreFreqObservation = [12, 20, 2]
    setTimeout(() => {
      this.crearGraficos()
    }, 500)
    this.obtenerDatos()
  }

  obtenerDatos() {
    this.isLoadingGeneralStadistics = true
    this.isLoadingNoAvailable = true
    setTimeout(() => {
      this.isLoadingGeneralStadistics = false
      this.isLoadingNoAvailable = false
      this.workersFrequency = [
        {
          name: 'Juan Gomez Valverde',
          operation: 'Quellaveco',
          quantity: 4
        },
        {
          name: 'Luis Valderrama de los Angeles',
          operation: 'Quellaveco',
          quantity: 1
        },
        {
          name: 'Gustavo Ramirez Lopez',
          operation: 'Hubday',
          quantity: 8
        },
        {
          name: 'Rodolfo Reyes Contreras',
          operation: 'Quellaveco',
          quantity: 12
        },
        {
          name: 'Camilo Vargas Vargas',
          operation: 'Hubday',
          quantity: 3
        }
      ]
    }, 1500)
  }

  crearGraficos(): void {
    this.graphicApprovedByOrd = new Chart("DayNoApproved", {
      type: 'line',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
          {
            label: 'Quellaveco',
            data: this.driversApprovedByOrg[0],
            backgroundColor: 'rgba(153, 102, 255, 0.8)',
            fill: false,
            borderColor: 'rgba(153, 102, 255, 0.4)',
            tension: 0.2
          },
          {
            label: 'Hubday',
            data: this.driversApprovedByOrg[1],
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
            fill: false,
            borderColor: 'rgba(75, 192, 192, 0.4)',
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: false
          }
        }
      }
    })

    this.graphicmoreFreqObservation = new Chart("FreqObservation", {
      type: 'bar',
      data: {
        labels: ['Falta de sueño', 'Problemas familiares', 'Por fatiga'],
        datasets: [
          {
            label: 'Frecuencia',
            data: this.moreFreqObservation,
            backgroundColor: [
              'rgba(75, 192, 192, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(153, 102, 255, 0.4)'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          }
        }
      }
    })
  }
}