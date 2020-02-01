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

@Component
export default class AmortizationForm extends Vue {
  loanAmount: number = 0;
  noOfEmis: number = 0;
  aInterestRate: number = 0;

  calculate() {
    this.calculateLoanSummary();
    this.calculateLoanSchedule();
  }

  calculateLoanSummary() {
    let loanSummary;
    this.$emit('summaryUpdated', loanSummary);
  }

  calculateLoanSchedule() {
    let emiSchedule = Array;
    this.$emit('scheduleUpdated', emiSchedule);
  }

  reset() {

  }
}
</script>