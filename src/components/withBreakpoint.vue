<template>
</template>
<script>
  import merge from 'lodash.merge'

  const defaultBreakpoints = {
    small: 744,
    medium: 1128,
    large: Infinity
  }

  export default {
    props: {
      breakpoints: {
        type: Object,
        default: undefined
      }
    },
    data () {
      return {
        currentBreakpoint: ''
      }
    },

    mounted () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
      if (this.$slots.default && this.$slots.default.length > 1) {
        console.warn('[✋ vue-breakpoints] You may only wrap one element in a <showAt> or <hideAt/> component.')
      } else if (!this.$slots.default || this.$slots.default.length < 1) {
        console.warn('[✋ vue-breakpoints] You must have one child inside a <showAt> or <hideAt/> component.')
      }
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    },

    methods: {
      handleResize () {
        const clientWidth = window.innerWidth
        if (clientWidth < this._breakpoints.small) {
          this.currentBreakpoint = 'small'
        } else if (clientWidth < this._breakpoints.medium) {
          this.currentBreakpoint = 'medium'
        } else if (clientWidth <= this._breakpoints.large) {
          this.currentBreakpoint = 'large'
        }
      }
    },
    computed: {
      _breakpoints () {
        return merge(defaultBreakpoints, this.breakpoints)
      }
    }
  }
</script>
