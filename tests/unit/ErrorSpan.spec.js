import { mount } from '@vue/test-utils'
import ErrorSpan from '@/components/ErrorSpan.vue'

describe('ErrorSpan.vue', () => {
  it('renders content in slot', () => {
    const wrapper = mount(ErrorSpan, {
      slots: {
        default: 'Main Content'
      }
    })
    expect(wrapper.html()).toContain('Main Content')
  })

})
