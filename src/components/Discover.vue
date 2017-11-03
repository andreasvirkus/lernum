<template>
  <div>
    <h2>Discover:</h2>

    <template v-html="toc">{{ toc }}</template>
  </div>
</template>

<script>
  import showdown from 'showdown'
  // import awesome from '@/assets/test-awesome-list.md'

  const converter = new showdown.Converter()

  export default {
    name: 'discover',
    data () {
      return {
        links: [
          // TODO: Get links from Awesome list
          '- [Platforms](#platforms)',
          '- [Programming Languages](#programming-languages)',
          '- [Front-End Development](#front-end-development)',
          '- [Back-End Development](#back-end-development)',
          '- [Computer Science](#computer-science)',
          '- [Big Data](#big-data)',
          '- [Theory](#theory)',
          '- [Books](#books)',
          '- [Editors](#editors)',
          '- [Gaming](#gaming)',
          '- [Development Environment](#development-environment)',
          '- [Entertainment](#entertainment)',
          '- [Databases](#databases)',
          '- [Media](#media)',
          '- [Learn](#learn)',
          '- [Security](#security)',
          '- [Content Management Systems](#content-management-systems)',
          '- [Hardware](#hardware)',
          '- [Business](#business)',
          '- [Work](#work)',
          '- [Networking](#networking)',
          '- [Decentralized Systems](#decentralized-systems)',
          '- [Miscellaneous](#miscellaneous)',
        ].join('\n'),
      }
    },
    computed: {
      toc() {
        return converter.makeHtml(this.links)
      }
    }
  }
</script>

<style>

</style>
