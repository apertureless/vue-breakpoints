import hideAt from './components/hideAt'
import showAt from './components/showAt'
import withBreakpoint from './components/withBreakpoint'
import npmCfg from '../package.json'

const vueBreakpoints = {
  version: npmCfg.version,
  hideAt,
  showAt,
  withBreakpoint
}

export {
  hideAt,
  showAt,
  withBreakpoint
}

export default vueBreakpoints
