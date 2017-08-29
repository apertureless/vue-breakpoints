<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hide-at breakpoint="medium">Hide me at `medium`</hide-at>
    <show-at breakpoint="mediumAndAbove">Show me at `mediumAndAbove`</show-at>
    <with-breakpoint :breakpoints="{large: 200}" ></with-breakpoint>
  </div>
</template>

<script>
import hideAt from './components/hideAt'
import showAt from './components/showAt'
import withBreakpoint from './components/withBreakpoint'

export default {
  name: 'app',
  components: {
    hideAt,
    showAt,
    withBreakpoint
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
