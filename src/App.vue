<template>
  <div id="app" class="app-container">
    <header>
      <!-- <h1><router-link to="/">📓</router-link></h1> -->
      <navigation />
    </header>
    <main>
      <router-link to="/">
        <img class="logo" src="./assets/logo.svg" alt="Learnig app">
      </router-link>

      <router-view></router-view>
    </main>

    <footing></footing>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Footing from '@/components/Footing'

  export default {
    name: 'app',
    components: { Navigation, Footing }
  }
</script>

<style>
  /* To prevent content jump */
  html {
    margin-left: calc(100vw - 100%);
  }
  body {
    margin: 0;
  }

  .app-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
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
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
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

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: normal;
  }

  h1, h2 {
    font-weight: normal;
  }

  h3 {
    font-style: italic;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }

  .align-center {
    text-align: center;
  }

  code {
    font-size: 1.4em;
    /* padding: 4px; */
    background-color: #35495E;
    color: #E8E8E8;
  }
</style>
