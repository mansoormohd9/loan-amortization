<template>
  <div class="card scheduleTile">
    <header class="card-header">
      <p class="card-header-title">
        Schedule
      </p>
    </header>
    <div class="card-content">
      <b-table 
      :data="schedule" 
      :columns="scheduleHeaders"
      :paginated="true"
      :per-page="10">
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { EmiSchedule } from '../types/types';

@Component
export default class Schedule extends Vue {
  @Prop({required: true}) schedule!: Array<EmiSchedule>;

  scheduleHeaders: any = this.initializeHeaders();

  initializeHeaders() {
    return [
      { field: "period", label: "Period", numeric: true },
      { field: "emi", label: "Emi", numeric: true },
      { field: "interest", label: "Interest", numeric: true },
      { field: "principal", label: "Principal", numeric: true },
      { field: "balance", label: "Balance", numeric: true },
    ]
  }
}
</script>

<style scoped>
.scheduleTile{
  width: 90%;
}
</style>