<template>
  <FirstComponent/>
  <SecondComponent/>
</template>

<script>

import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
export default {
  name: 'App',
  components: {
    FirstComponent,
    SecondComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
