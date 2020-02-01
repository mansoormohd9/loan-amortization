<template>
  <article class="panel is-primary">
    <p class="panel-heading">
      Summary
    </p>
    <a class="panel-block">
      <b-field horizontal label="From">
        <p>Test</p>
      </b-field>
    </a>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Summary extends Vue {
  
}
</script>