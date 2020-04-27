<template>
  <div id="app">
    <FlowerGenetics/>
  </div>
</template>

<script>
import FlowerGenetics from "./components/FlowerGenetics";

export default {
  name: 'App',
  components: {
    FlowerGenetics
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    margin-top: 60px;
  }
</style>
