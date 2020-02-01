export interface SummaryItem {
  label: string,
  value: number
}

export interface LoanSummary {
  [key: string]: SummaryItem
}

export interface EmiSchedule {
  period: number,
  emi: number,
  interest: number,
  principal: number,
  balance: number
}