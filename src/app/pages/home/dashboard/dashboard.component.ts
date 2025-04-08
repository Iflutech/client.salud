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

  modalDaysData: any[]
  modalWeekData: any[]
  modalMonthData: any[]

  daysOfMonth: string[]

  graphicApprovedByOrd: any
  graphicmoreFreqObservation: any

  isLoadingGeneralStadistics: boolean
  isLoadingNoAvailable: boolean
  isVisibleModalDay: boolean
  isVisibleModalMonth: boolean
  isVisibleModalYear: boolean

  constructor(

  ){
    this.estadisticasGenerales = {
      quantityDayNoApproved: 1,
      quantityWeekNoApproved: 3,
      quantityMonthNoApproved: 7
    }

    this.driversApprovedByOrg = []
    this.moreFreqObservation = []
    this.workersFrequency = []

    this.modalDaysData = []
    this.modalWeekData = []
    this.modalMonthData = []

    this.daysOfMonth = []

    this.isLoadingGeneralStadistics = false
    this.isLoadingNoAvailable = false

    this.isVisibleModalDay = false
    this.isVisibleModalMonth = false
    this.isVisibleModalYear = false
  }

  ngOnInit(): void {
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

      let quellaveco = [19, 18, 19, 18, 18, 19, 17, 19]
      let hudbay = [19, 20, 20, 20, 20, 20, 20, 19]
      this.driversApprovedByOrg = [quellaveco, hudbay]
      this.moreFreqObservation = [3, 1, 3]

      this.getDaysUntilToday()

      this.graphicApprovedByOrd.data.labels = []
      this.graphicApprovedByOrd.data.datasets[0].data = []
      this.graphicApprovedByOrd.data.datasets[1].data = []
      this.graphicmoreFreqObservation.data.datasets[0].data = []

      this.daysOfMonth.forEach((item: string) => {
        this.graphicApprovedByOrd.data.labels.push(item)
        this.graphicApprovedByOrd.update()
      })

      this.driversApprovedByOrg[0].forEach((item: any[]) => {
        this.graphicApprovedByOrd.data.datasets[0].data.push(item)
        this.graphicApprovedByOrd.update()
      })
      this.driversApprovedByOrg[1].forEach((item: any[]) => {
        this.graphicApprovedByOrd.data.datasets[1].data.push(item)
        this.graphicApprovedByOrd.update()
      })
      
      //this.graphicApprovedByOrd.update()

      this.moreFreqObservation.forEach((item: number) => {
        this.graphicmoreFreqObservation.data.datasets.forEach((dataset: any) => {
          dataset.data.push(item)
        })
        this.graphicmoreFreqObservation.update()
      })

      this.modalDaysData = [
        {
          name: 'Gustavo Ramirez Lopez',
          operation: 'Hubday',
          date: '08/04/2025'
        }
      ]
      this.modalWeekData = [
        {
          name: 'Gustavo Ramirez Lopez',
          operation: 'Hubday',
          date: '08/04/2025'
        },
        {
          name: 'Juan Gomez Valverde',
          operation: 'Quellaveco',
          date: '07/04/2025'
        },
        {
          name: 'Luis Valderrama de los Angeles',
          operation: 'Quellaveco',
          date: '07/04/2025'
        }
      ]
      this.modalMonthData = [
        {
          name: 'Gustavo Ramirez Lopez',
          operation: 'Hubday',
          date: '08/04/2025'
        },
        {
          name: 'Juan Gomez Valverde',
          operation: 'Quellaveco',
          date: '07/04/2025'
        },
        {
          name: 'Luis Valderrama de los Angeles',
          operation: 'Quellaveco',
          date: '07/04/2025'
        },
        {
          name: 'Juan Gomez Valverde',
          operation: 'Quellaveco',
          date: '05/04/2025'
        },
        {
          name: 'Rodolfo Reyes Contreras',
          operation: 'Quellaveco',
          date: '04/04/2025'
        },
        {
          name: 'Luis Valderrama de los Angeles',
          operation: 'Quellaveco',
          date: '02/04/2025'
        },
        {
          name: 'Camilo Vargas Vargas',
          operation: 'Hubday',
          date: '01/04/2025'
        },

      ]
      this.workersFrequency = [
        {
          name: 'Juan Gomez Valverde',
          operation: 'Quellaveco',
          quantity: 2
        },
        {
          name: 'Luis Valderrama de los Angeles',
          operation: 'Quellaveco',
          quantity: 2
        },
        {
          name: 'Gustavo Ramirez Lopez',
          operation: 'Hubday',
          quantity: 1
        },
        {
          name: 'Rodolfo Reyes Contreras',
          operation: 'Quellaveco',
          quantity: 1
        },
        {
          name: 'Camilo Vargas Vargas',
          operation: 'Hubday',
          quantity: 1
        }
      ]
    }, 1500)
  }

  getDaysUntilToday(date: Date = new Date()) {
    const currentDay = date.getDate();
    const days: string[] = [];
  
    for (let i = 1; i <= currentDay; i++) {
      const dayString = i.toString().padStart(2, '0');
      days.push(dayString);
    }

    this.daysOfMonth = days
  }

  crearGraficos(): void {
    this.graphicApprovedByOrd = new Chart("DayNoApproved", {
      type: 'line',
      data: {
        labels: this.daysOfMonth,
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
          },
          x: {
            display: true,
            title: {
              display: true,
              text: 'Día del mes'
            }
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
          },
          x: {
            display: true,
            title: {
              display: true,
              text: 'Observación'
            }
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

  showModal(type: number): void {
    if (type == 1)
      this.isVisibleModalDay = true;
    else if (type == 2)
      this.isVisibleModalMonth = true;
    else 
      this.isVisibleModalYear = true;
  }

  handleClose(type: number): void {
    if (type == 1)
      this.isVisibleModalDay = false;
    else if (type == 2)
      this.isVisibleModalMonth = false;
    else 
      this.isVisibleModalYear = false;
  }
}