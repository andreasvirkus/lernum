<template>
  <transition>
    <div v-html="parsed"></div>
  </transition>
</template>

<script>
  import { entry } from '@/resources'
  import showdown from 'showdown'

  const converter = new showdown.Converter()

  export default {
    name: 'parser',
    // props: ['resource'],
    data() {
      return {
        raw: '',
        content: '',
      }
    },
    computed: {
      parsed() {
        return converter.makeHtml(this.content)
      }
    },
    created() {
      const req = new Request(entry)

      fetch(req).then(rs => {
        const reader = rs.body.getReader()

        reader.read().then(({ done, value }) => {
          const decoder = new TextDecoder('utf-8')
          this.raw = decoder.decode(value)
          this.content = this.raw.substring(this.raw.indexOf('## Contents'))
        }).catch(err => console.log('Could not fetch from Awesome List!', err))

        // this.parse()
      })
    },
  }
</script>

<style>

</style>
