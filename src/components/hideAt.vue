<script>
  import withBreakpoint from './withBreakpoint'

  const defaultBreakpoints = ['small', 'medium', 'mediumAndBelow', 'mediumAndAbove', 'largeAndBelow', 'large']

  export default {
    name: 'hide-at',
    mixins: [withBreakpoint],
    props: {
      breakpoint: {
        type: String,
        required: true,
        validator: (value) => defaultBreakpoints.some((type) => type === value)
      }
    },

    render (h) {
      let shouldRender

      if (this.breakpoint.includes('small') && this.currentBreakpoint === 'small') {
        shouldRender = false
      } else {
        shouldRender = true
      }

      if (this.breakpoint.includes('medium')) {
        if (this.breakpoint.includes('AndBelow') && this.currentBreakpoint !== 'large') {
          shouldRender = false
        } else if (this.breakpoint.includes('AndAbove') && this.currentBreakpoint !== 'small') {
          shouldRender = false
        } else if (this.breakpoint === 'medium' && this.currentBreakpoint === 'medium') {
          shouldRender = false
        }
      }

      if (this.breakpoint.includes('large')) {
        if (this.breakpoint.includes('AndBelow')) {
          shouldRender = false
        } else if (this.currentBreakpoint !== 'large') {
          shouldRender = true
        } else {
          shouldRender = false
        }
      }

      if (shouldRender) {
        return this.$slots.default ? this.$slots.default[0] : null
      }
      return null
    }
  }
</script>
