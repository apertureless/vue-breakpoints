<script>
  import withBreakpoint from './withBreakpoint'

  const defaultBreakpoints = ['small', 'medium', 'mediumAndBelow', 'mediumAndAbove', 'largeAndBelow', 'large']

  export default {
    name: 'show-at',
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
        shouldRender = true
      } else {
        shouldRender = false
      }

      if (this.breakpoint.includes('medium')) {
        if (this.breakpoint.includes('AndBelow') && this.currentBreakpoint !== 'large') {
          shouldRender = true
        } else if (this.breakpoint.includes('AndAbove') && this.currentBreakpoint !== 'small') {
          shouldRender = true
        } else if (this.breakpoint === 'medium' && this.currentBreakpoint === 'medium') {
          shouldRender = true
        }
      }

      if (this.breakpoint.includes('large')) {
        if (this.breakpoint.includes('AndBelow')) {
          shouldRender = true
        } else if (this.currentBreakpoint !== 'large') {
          shouldRender = false
        } else {
          shouldRender = true
        }
      }

      if (shouldRender) {
        return this.$slots.default[0]
      }
      return null
    }
  }
</script>
