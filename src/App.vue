<template>
  <div id="app">
    <FlowerGenetics/>
  </div>
</template>

<script>
import FlowerGenetics from "./components/FlowerGuide";

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

  body {
    background-color: #d9eee3;
    display: flex;
  }

  a {
    color: #42b983;
    font-weight: bold;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    color: #3e3e3e;

    background: white;
    display: flex;
    flex-direction: column;
    margin: 5vh auto;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);
  }
</style>
