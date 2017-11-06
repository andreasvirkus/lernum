<template>
  <div class="hello">
    <h1>A reading, listening, and discovery platform.</h1>

    <h2>Netflix for the knowledge-hungry, if You will!</h2>

    <p>We live in a wonderful time, where resources are a plenty and everything
      ought to be at our disposal. Yet <em>sometimes</em>, there's an article
      about that one thing you can't seem to find. Or you feel like your Feedly
      feed is beginning to get repetitive or stale... Well&mdash;no more!</p>

    <p>Lernum aims to bring you the best of free online resources. The chunk
      of its <code>awesome</code>ness comes from the famous
      <a href="https://github.com/sindresorhus/awesome">List of Awesome lists</a>&trade;.</p>

    <p>All resources will be saved to your browser by default, but if you crave
      for a more persistent cross-browser experience, you can always
      <button class="btn btn-txt">Login</button></p>
  </div>
</template>

<script>
  export default {
    name: 'landing',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-style: italic;
  }

  /* TODO: Migrate button styles to stand-alone file */
  button {
    background: none;
    border: 2px solid #223;
    padding: 0.3em 1em;
    text-transform: lowercase;
    font-family: monospace;
    cursor: not-allowed;
  }
</style>
