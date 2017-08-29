import { mount } from 'avoriaz'
import { compileToFunctions } from 'vue-template-compiler'
import showAt from '@/components/showAt'

describe('<show-at />', () => {
  const renderText = compileToFunctions('<p class="show">showAt</p>')

  it('allows to change props', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'small'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'small'})
    expect(showComponent.vm.$props.breakpoint).to.equal('small')
    expect(showComponent.data().currentBreakpoint).to.equal('small')
    showComponent.setProps({breakpoint: 'medium'})
    expect(showComponent.vm.$props.breakpoint).to.equal('medium')
    showComponent.setData({currentBreakpoint: 'medium'})
    expect(showComponent.data().currentBreakpoint).to.equal('medium')
  })

  it('should not render slot if props are different', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'medium'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'small'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(0)
  })

  it('should not render its children if breakpoint is mediumAndBelow and currentBreakpoint is large', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'mediumAndBelow'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'large'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(0)
  })

  it('shoud not render its children if breakpoint is large and currentBreakpoint is medium', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'large'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'medium'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(0)
  })

  it('should render its children if breakpoint is large and currentBreakpoint is large', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'large'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'large'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(1)
  })

  it('should render its children if breakpoint is largeAndBelow and currentBreakpoint is large', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'largeAndBelow'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'large'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(1)
  })

  it('should render its children if breakpoint is mediumAndAbove and currentBreakpoint is large', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'mediumAndAbove'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'large'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(1)
  })

  it('should render its children if breakpoint is mediumAndBelow and currentBreakpoint is medium', () => {
    const showComponent = mount(showAt, {
      propsData: {
        breakpoint: 'mediumAndBelow'
      },
      slots: {
        default: renderText
      }
    })
    showComponent.setData({currentBreakpoint: 'medium'})
    showComponent.update()

    expect(showComponent.instance().$children.length).to.equal(1)
  })
})
