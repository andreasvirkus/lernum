<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>About <code>Lernum</code></h2>
  </div>
</template>

<script>
  export default {
    name: 'landing',
    data () {
      return {
        msg: 'A reading, listening, and discovery platform for the knowledge-hungry.',
        links: `
          - [Platforms](#platforms)
          - [Programming Languages](#programming-languages)
          - [Front-End Development](#front-end-development)
          - [Back-End Development](#back-end-development)
          - [Computer Science](#computer-science)
          - [Big Data](#big-data)
          - [Theory](#theory)
          - [Books](#books)
          - [Editors](#editors)
          - [Gaming](#gaming)
          - [Development Environment](#development-environment)
          - [Entertainment](#entertainment)
          - [Databases](#databases)
          - [Media](#media)
          - [Learn](#learn)
          - [Security](#security)
          - [Content Management Systems](#content-management-systems)
          - [Hardware](#hardware)
          - [Business](#business)
          - [Work](#work)
          - [Networking](#networking)
          - [Decentralized Systems](#decentralized-systems)
          - [Miscellaneous](#miscellaneous)
        `,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
