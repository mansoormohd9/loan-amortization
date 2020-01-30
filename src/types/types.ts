export interface SummaryItem {
  label: string,
  value: string
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

export interface Schedule {
  period: number,
  emi: number,
  interest: number,
  principal: number,
  balance: number
}