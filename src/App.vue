<template>
  <div id="app" class="app-container">
    <header>
      <!-- <h1><router-link to="/">📓</router-link></h1> -->
      <navigation />
    </header>
    <main>
      <img class="logo" src="./assets/logo.svg" alt="Learnig app">

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'

  export default {
    name: 'app',
    components: { Navigation }
  }
</script>

<style>
  body {
    margin: 0;
  }

  .app-container {
    display: flex;
    min-height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    flex: 1;
    padding-top: 2em;
    width: 100%;
    max-width: 45em;
    margin: 0 auto;
  }

  .logo {
    display: block;
    width: 60px;
    margin: 0 auto;
  }

  header {
    margin: 0;
    padding: 0.5em 2em;
    background-color: #35495E;
    color: #ffffff;
  }

  header h1 {
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
    margin-bottom: 2em;
  }
</style>
