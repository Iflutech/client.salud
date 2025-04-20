export interface ExamResponse {
  category: string
  questions: QuestionData[]
}

export interface QuestionData {
  id: number
  seq: number
  question: string
  selectAnswer: number | null
  responses: ResponseData[]
}

export interface ResponseData {
  value: number
  name: string
  points: number
}

export interface ExamData {
  category: string
  answer: AnswerData[]
}

export interface AnswerData {
  seq: number
  selectAnswer: number | null
  points: number
}

export interface UserData {
  dni: string
  turnHour: string
  rotationDay: string
}