<template>
  <transition>
    <div v-html="parsed" @click.prevent.stop="navigate"></div>
  </transition>
</template>

<script>
  import showdown from 'showdown'
  import Jump from '../mixins/Jump'
  import { base, entry } from '@/resources'

  const converter = new showdown.Converter()

  export default {
    name: 'parser',
    mixins: [Jump],
    data() {
      return {
        raw: '',
        hash: '',
        location: {
          base: '',
        },
      }
    },
    computed: {
      content() {
        let start = this.raw.indexOf('## Contents')
        let end = this.raw.indexOf('## License')

        start = ~start ? start : 0
        end = ~end ? end : this.raw.length

        return this.raw.substring(start, end)
      },
      parsed() {
        return converter.makeHtml(this.content)
      }
    },
    created() {
      this.getList(entry)
    },
    methods: {
      getList(url) {
        fetch(url).then(rs => rs.text())
          .then(rs => {
            this.raw = rs
          }).catch(err => {
            // TODO: Prompt user to let them know the requested Awesome List is not available at this time
            console.log('Could not fetch from Awesome List!', err)
          })
      },
      navigate(event) {
        if (event.target.tagName !== 'A') return

        let hash = event.target.hash
        let url = event.target.href

        if (hash) {
          this.hash = hash.substring(1)
          hash = hash.replace(/-/g, '')

          this.jump(hash, { duration: 400 })
          this.$router.push({
            name: 'Discover',
            params: { topic: this.hash }
          })
        } else if (url) {
          console.log('nagivating to:', url)
          if (url.startsWith('https://github.com/')) {
            this.location.base = url.substring(url.indexOf('.com') + 4)
            let queryUrl = `${base}${this.location.base}/master/README.md`
            console.log('query new list:', queryUrl)
            this.getList(queryUrl)
          } else if (!url.startsWith('http')) {
            let queryUrl = `${base}${this.location.base}/master/${hash}`
            console.log('query item from this repo', queryUrl)
            this.getList(queryUrl)
          } else {
            console.log(`External resource reached! Would now open a modal/prompt to ask the user
              if they want to send it to a reader/listener/viewer tab or save for later (to any of the aforementioned)`)
            alert('Visiting ' + url)
          }
        }
      }
    },
    watch: {
      hash() {

      }
    }
  }
</script>

<style>

</style>
