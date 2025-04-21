export interface FilterDriver {
  name: string
  job: string | null
  state: string | null
  page: number
  size: number
}

export interface DriverResponse {
  totalElements: number
  data: DriverData[]
}

export interface DriverData {
  id: string
  name: string
  lastName: string
  dni: string
  job: string
  phone: string
  operation: string
  supervisorEmail: string
  state: string
}