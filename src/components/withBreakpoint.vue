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
