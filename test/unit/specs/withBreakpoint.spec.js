import { mount } from 'avoriaz'
import withBreakpoint from '@/components/withBreakpoint'

describe('<with-breakpoint />', () => {
  it('should contain an empty currentBreakpoint', () => {
    const breakpoint = mount(withBreakpoint)
    expect(breakpoint.vm.$data.currentBreakpoint).to.equal('small')
  })

  it('should contain an internal breakpoints', () => {
    const breakpoint = mount(withBreakpoint)
    expect(breakpoint.vm._breakpoints.small).to.equal(744)
  })

  it('should accept breakpoint props', () => {
    const breakpoint = mount(withBreakpoint, {
      propsData: {
        breakpoints: {
          small: 100,
          medium: 101,
          large: 102
        }
      }
    })
    expect(breakpoint.vm.$props.breakpoints.small).to.equal(100)
    expect(breakpoint.vm.$props.breakpoints.medium).to.equal(101)
    expect(breakpoint.vm.$props.breakpoints.large).to.equal(102)
  })

  it('should overwrite the default breakpoints with breakpoints prop', () => {
    const breakpoint = mount(withBreakpoint, {
      propsData: {
        breakpoints: {
          small: 100,
          medium: 101,
          large: 102
        }
      }
    })
    breakpoint.update()
    expect(breakpoint.vm._breakpoints.small).to.equal(100)
    expect(breakpoint.vm._breakpoints.medium).to.equal(101)
    expect(breakpoint.vm._breakpoints.large).to.equal(102)
  })

  it('should merge the default breakpoints with breakpoints prop', () => {
    const breakpoint = mount(withBreakpoint, {
      propsData: {
        breakpoints: {
          large: 105
        }
      }
    })
    breakpoint.update()
    expect(breakpoint.vm.$props.breakpoints.large).to.equal(105)
    expect(breakpoint.vm._breakpoints.large).to.equal(105)
  })
})
