<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>vue-breakpoints</h1>
    <div class="container">
      <div class="component">
        <div class="component__header">
          <h3>Hide at medium</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="medium">
              <textarea disabled cols="20" rows="5" style="border: none;background-color:white; width:100%; resize: none; text-align:center;"><hide-at breakpoint="medium"> Content </hide-at>
              </textarea>
          </hide-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at medium and above</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="mediumAndAbove">
            <textarea disabled cols="20" rows="5" style="border: none;background-color:white; width:100%; resize: none; text-align:center;">
              <show-at breakpoint="mediumAndAbove"> Content </show-at>
                </textarea>
          </show-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at small</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="small">
            <textarea disabled cols="20" rows="5" style="border: none;background-color:white; width:100%; resize: none; text-align:center;">
              <show-at breakpoint="small"> Content </show-at>
              </textarea>
          </show-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Hide at small</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="small">
            <textarea disabled cols="20" rows="5" style="border: none;background-color:white; width:100%; resize: none; text-align:center;">
              <hide-at breakpoint="small"> Content </hide-at>
              </textarea>
          </hide-at>
        </div>
      </div>

    </div>
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
.container {
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.container > * {
  flex: 0 0 100%;
}

@media (min-width: 744px) {
  .container > * {
    flex: 0 0 33.33%;
  }
}

.component {
  box-shadow: 0px 0px 20px rgba(266, 33, 33, .2);
  margin: 2rem;
  border-radius: 0.4rem;
}

.component__header {
  padding: 1rem 0;
  border-bottom: 1px solid #F8F8F8;
  color: #E7AFAF;
}

.component__block {
  padding: 2rem;
}
</style>
