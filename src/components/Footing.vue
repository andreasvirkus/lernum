<template>
  <nav class="align-center">
    <a href="https://github.com/andreasvirkus/lernum">Source</a>
    <a href="https://andreasvirkus.me">Author</a>
    <a href="mailto:write@andreasvirkus.me">Contact</a>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
  }
</script>

<style scoped>
  nav {
    padding: 3em 0;
  }

  nav a {
    display: block;
    text-decoration: none;
    color: #223;
  }

  nav a:hover {
    color: skyblue;
  }

  nav a + a {
    margin-top: 1em;
  }
</style>
