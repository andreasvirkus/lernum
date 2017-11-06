<template>
  <div>
    <h1>Discover:</h1>

    <parser />
  </div>
</template>

<script>
  import Parser from '@/components/Parser'

  export default {
    name: 'discover',
    components: { Parser },
  }
</script>

<style>
  a {
    color: #223;
  }
</style>
