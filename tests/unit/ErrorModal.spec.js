import { mount } from '@vue/test-utils'
import ErrorModal from '@/components/ErrorModal'

describe('ErrorModal.vue', ()=> {
    it('renders content in slot', () => {
        const wrapper = mount(ErrorModal, {
          slots: {
            default: 'Main Content'
          }
        })
        expect(wrapper.html()).toContain('Main Content')
      })

    it('emits an "closeModal" event when clicked', ()=> {
        const wrapper = mount(ErrorModal)

        wrapper.find('.modal__btn').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('closeModal')
    })
})