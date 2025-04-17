export interface SheetDetail {
  state: string,
  header: SheetData
  detail: DetailData[]
}

export interface SheetData {
  date: string,
  exam: string,
  typeExam: string,
  driver: string,
  job: string,
  operation: string,
  workingHours: string,
  system: string,
  rotationDay: string
}

export interface DetailData {
  question: string,
  answer: AnswerData[]
}

export interface AnswerData {
  answer: string,
  isSelected: boolean
}
