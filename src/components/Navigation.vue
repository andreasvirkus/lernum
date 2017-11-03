<template>
  <nav>
    <router-link to="/about">About</router-link>
    <router-link to="/discover">Discover</router-link>
    <router-link to="/reader">Read</router-link>
    <router-link to="/speaker">Listen</router-link>
    <router-link to="/viewer">View</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
  }
</script>

<style>
  nav a {
    display: block;
    text-decoration: none;
    color: #FEFEFE;
  }

  nav a:hover {
    color: skyblue;
  }

  nav a + a {
    margin-top: 1em;
  }
</style>
