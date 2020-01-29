<template>
  <div id="app">
    <AmortizationForm></AmortizationForm>
    <Schedule></Schedule>
    <Summary></Summary>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import AmortizationForm from './components/AmortizationForm.vue';
import Schedule from './components/Schedule.vue';
import Summary from './components/Summary.vue';

@Component({
  components: {
    HelloWorld,
    AmortizationForm,
    Schedule,
    Summary,
  },
})
export default class App extends Vue {}
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
