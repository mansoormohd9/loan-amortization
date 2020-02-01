<template>
  <div class="card">
    <div class="card-content">
      <form>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Loan Amount</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input is-danger" v-model="loanAmount" type="number">
              </div>
              <p class="help is-danger">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Total No of Emi Payment's</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input is-danger" type="number" v-model="noOfEmis">
              </div>
              <p class="help is-danger">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Annual Interest Rate</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input is-danger" type="number" v-model="aInterestRate">
              </div>
              <p class="help is-danger">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <b-button type="is-info" v-on:click="calculate()" outlined>Calculate</b-button>
          </div>
          <div class="control">
            <b-button type="is-info" outlined>Reset</b-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Summary from './Summary.vue';
import { LoanSummary, EmiSchedule } from '../types/types';
import { initializeLoanSummary } from "../utils/util";

@Component
export default class AmortizationForm extends Vue {
  loanAmount: number = 0;
  noOfEmis: number = 0;
  aInterestRate: number = 0;
  mInterestRate: number = 0;
  loanSummary: LoanSummary = initializeLoanSummary();
  emiSchedule: Array<EmiSchedule> = [];

  calculate() {
    this.mInterestRate = (this.aInterestRate/12) * 0.01;
    this.calculateLoanSummary();
    this.calculateLoanSchedule();
    this.updateSummaryAndSchedule();
  }

  get monthlyEmi() {
    return this.roundNumber((this.loanAmount * this.mInterestRate)/(1-Math.pow(1+this.mInterestRate, -this.noOfEmis)));
  }

  currentInterest(remAmount: number, intRate: number) {
    return  ((remAmount * intRate * 0.01)/12);
  }

  roundNumber(num: Number) {
    return (Number)(num.toFixed(2));
  }

  calculateLoanSummary() {
    this.loanSummary["loanAmount"].value = this.loanAmount;
    this.loanSummary["noOfEmis"].value = this.noOfEmis;
    this.loanSummary["annualInterestRate"].value = this.aInterestRate * 0.01;
    this.loanSummary["monthlyInterestRate"].value = this.mInterestRate;
    this.loanSummary["mothlyEmi"].value = this.monthlyEmi;
    this.loanSummary["totalLoanAmount"].value = this.monthlyEmi * this.noOfEmis;
    this.loanSummary["totalInterest"].value = (this.monthlyEmi * this.noOfEmis) - this.loanAmount;
  }

  calculateLoanSchedule() {
    this.emiSchedule = [];
    let remAmount = this.loanAmount;
    let period = 1;
    this.emiSchedule.push({
      period: 0,
      emi: 0,
      interest: 0,
      principal: 0,
      balance: this.loanAmount
    })
    while(period <= this.noOfEmis) {
      let curEmiData = {
        period: period,
        emi: this.monthlyEmi,
        interest: this.roundNumber(this.currentInterest(remAmount, this.aInterestRate)),
        principal: 0,
        balance: 0
      };
      curEmiData.principal = this.roundNumber(this.monthlyEmi - curEmiData.interest);
      curEmiData.balance = this.roundNumber(this.emiSchedule[period-1].balance - curEmiData.principal);
      this.emiSchedule.push(curEmiData);
      remAmount = curEmiData.balance;
      period++;
    }
  }

  reset() {
    this.loanSummary = initializeLoanSummary();
    this.emiSchedule = [];
    this.updateSummaryAndSchedule();
  }

  updateSummaryAndSchedule() {
    this.$emit('summary-updated', this.loanSummary);
    this.$emit('schedule-updated', this.emiSchedule);
  }
}
</script>