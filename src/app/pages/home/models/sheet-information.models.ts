export interface FilterSheetInformation {
  initialDate: string,
  endDate: string,
  driver: string,
  state: string | null,
  page: number,
  size: number
}

export interface SheetInformationResponse {
  totalElements: number,
  data: SheetInformationData[]
}

export interface SheetInformationData {
  id: string,
  codSheet: string,
  date: string,
  driver: string,
  operation: string,
  exam: string,
  typeExam: string,
  rotationDate: number,
  state: string
}