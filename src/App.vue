<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Loan Amortization Calculator
          </h1>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <AmortizationForm
              @summary-updated="updateSummary"
              @schedule-updated="updateSchedule">
              </AmortizationForm>
            </div>
            <div class="tile is-parent is-6">
              <Summary
              :summary="summary">
              </Summary>
            </div>
          </div>
          <div class="tile is-parent">
            <Schedule
            :schedule="emiSchedule">
            </Schedule>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AmortizationForm from './components/AmortizationForm.vue';
import Schedule from './components/Schedule.vue';
import Summary from './components/Summary.vue';
import { LoanSummary, EmiSchedule } from "./types/types";
import { initializeLoanSummary } from "./utils/util";

@Component({
  components: {
    AmortizationForm,
    Schedule,
    Summary,
  },
})
export default class App extends Vue {
  summary: LoanSummary = initializeLoanSummary();
  emiSchedule: Array<EmiSchedule> = [];

  updateSummary(summary: LoanSummary) {
    this.summary = summary;
  }

  updateSchedule(emiSchedule: Array<EmiSchedule>) {
    this.emiSchedule = emiSchedule;
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
