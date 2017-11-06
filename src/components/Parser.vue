<template>
  <transition>
    <div v-html="parsed" @click.prevent.stop="navigate"></div>
  </transition>
</template>

<script>
  import { entry } from '@/resources'
  import showdown from 'showdown'

  const converter = new showdown.Converter()

  export default {
    name: 'parser',
    data() {
      return {
        raw: '',
        content: '',
        baseURI: entry,
        hash: '',
      }
    },
    computed: {
      parsed() {
        return converter.makeHtml(this.content)
      }
    },
    created() {
      fetch(entry).then(rs => rs.text())
        .then(rs => {
          this.raw = rs
          this.content = this.raw.substring(this.raw.indexOf('## Contents'))
        }).catch(err => console.log('Could not fetch from Awesome List!', err))
    },
    methods: {
      navigate(event) {
        console.log('clicky!', event.target.hash)
        this.hash = event.target.hash.substring(1)
        this.$router.push({
          name: 'discovery',
          params: { topic: this.hash }
        })
      }
    }
  }
</script>

<style>

</style>
