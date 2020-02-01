<template>
  <div class="card summaryTile">
    <header class="card-header">
      <p class="card-header-title">
        Schedule
      </p>
    </header>
    <div class="card-content">
      <table class="summaryTable">
        <tr v-for="(summaryItem, index) in summary" :key="index">
          <td>{{summaryItem.label}}</td>
          <td>{{summaryItem.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { LoanSummary } from '../types/types';

@Component
export default class Summary extends Vue {
  @Prop({required: true}) summary!: LoanSummary;
}
</script>

<style scoped>
.summaryTile, .summaryTable{
  width: 80%;
}
</style>