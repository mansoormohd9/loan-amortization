<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Schedule
      </p>
    </header>
    <div class="card-content">
      <b-table :columns="scheduleHeaders"></b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Schedule extends Vue {
  scheduleHeaders: any = this.initializeHeaders();

  initializeHeaders() {
    return [
      { field: "period", label: "Period", numeric: true },
      { field: "emi", label: "Emi", numeric: true },
      { field: "interest", label: "Interest", numeric: true },
      { field: "principle", label: "Principle", numeric: true },
      { field: "balance", label: "Balance", numeric: true },
    ]
  }
}
</script>