
import Login from '@/views/Login'
import { mount } from '@vue/test-utils'

describe('Login.vue', () =>  {
    it('teste', () => {
        const wrapper = mount(Login)

        wrapper.exists()
    })
}) 