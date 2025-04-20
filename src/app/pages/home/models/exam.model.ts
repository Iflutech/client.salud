export interface FilterExam {
  exam: string | null,
  examType: string | null,
  state: string | null,
  page: number,
  size: number
}

export interface ExamResponse {
  totalElements: number,
  data: ExamData[]
}

export interface ExamData {
  id: string,
  exam: string,
  examType: string,
  approvedCriteria: string,
  examFile: string,
  examFileName: string,
  state: string
}

export interface ExamRegister {
  exam: string,
  examType: string,
  approvedCriteria: string
}