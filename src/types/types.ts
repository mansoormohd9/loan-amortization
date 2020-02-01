export interface SummaryItem {
  label: string,
  value: number
}

export interface Summary {
  loanAmount:  SummaryItem,
  noOfEmis: SummaryItem,
  annualInterestRate: SummaryItem,
  monthlyInterestRate: SummaryItem,
  mothlyEmi: SummaryItem,
  totalLoanAmount: SummaryItem,
  totalInterest: SummaryItem
}

export interface EmiSchedule {
  period: number,
  emi: number,
  interest: number,
  principal: number,
  balance: number
}