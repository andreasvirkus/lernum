/**
 * Vanilla scrollTo implementation (smoothly scroll/"jump" to an element)
 *
 * @param {String} target selector to scroll to
 * @param {Object} options Optionally defined duration, offset, callback and easing
 *
 * @return {void}
 */
export default {
  methods: {
    jump(target, options) {
      let start = window.pageYOffset
      let opt = {
        duration: options.duration,
        offset: options.offset || 0,
        callback: options.callback,
        easing: options.easing || easeInOutQuad
      }
      let distance = typeof target === 'string'
        ? opt.offset + document.querySelector(target).getBoundingClientRect().top
        : target
      let duration = typeof opt.duration === 'function'
        ? opt.duration(distance)
        : opt.duration
      let timeStart, timeElapsed

      requestAnimationFrame(time => {
        timeStart = time
        loop(time)
      })

      function loop(time) {
        timeElapsed = time - timeStart

        window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration))

        if (timeElapsed < duration) requestAnimationFrame(loop)
        else end()
      }

      function end() {
        window.scrollTo(0, start + parseInt(distance, 10))

        if (typeof opt.callback === 'function') opt.callback()
      }

      // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--

        return -c / 2 * (t * (t - 2) - 1) + b
      }
    }
  }
}
