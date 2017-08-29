import { mount } from 'avoriaz'
import { compileToFunctions } from 'vue-template-compiler'
import hideAt from '@/components/hideAt'

describe('<hide-at />', () => {
  const renderText = compileToFunctions('<p class="hide">hideAt</p>')

  it('allows to change props', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'small'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'small'})
    expect(hideComponent.vm.$props.breakpoint).to.equal('small')
    expect(hideComponent.data().currentBreakpoint).to.equal('small')
    hideComponent.setProps({breakpoint: 'medium'})
    expect(hideComponent.vm.$props.breakpoint).to.equal('medium')
    hideComponent.setData({currentBreakpoint: 'medium'})
    expect(hideComponent.data().currentBreakpoint).to.equal('medium')
  })

  it('does render slot if props are different', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'medium'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'small'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(1)
  })

  it('should renders its children if breakpoint is mediumAndBelow and currentBreakpoint is large', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'mediumAndBelow'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'large'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(1)
  })

  it('shoud render its children if breakpoint is large and currentBreakpoint is medium', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'large'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'medium'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(1)
  })

  it('should hide its children if breakpoint is large and currentBreakpoint is large', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'large'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'large'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(0)
  })

  it('should hide its children if breakpoint is largeAndBelow and currentBreakpoint is large', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'largeAndBelow'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'large'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(0)
  })

  it('should hide its children if breakpoint is mediumAndAbove and currentBreakpoint is large', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'mediumAndAbove'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'large'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(0)
  })

  it('should hide its children if breakpoint is mediumAndBelow and currentBreakpoint is medium', () => {
    const hideComponent = mount(hideAt, {
      propsData: {
        breakpoint: 'mediumAndBelow'
      },
      slots: {
        default: renderText
      }
    })
    hideComponent.setData({currentBreakpoint: 'medium'})
    hideComponent.update()

    expect(hideComponent.instance().$children.length).to.equal(0)
  })
})
