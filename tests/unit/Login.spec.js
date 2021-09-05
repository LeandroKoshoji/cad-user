
import Login from '@/views/Login'
import { mount } from '@vue/test-utils'

describe('Login.vue', () =>  {
    it('userData receive email and password input value ', () => {
        const wrapper = mount(Login)

        const email = wrapper.find('#email')
        const password = wrapper.find('#password')
        
        email.setValue('teste@teste.com')
        password.setValue('123456')

        expect(wrapper.vm.userData).toStrictEqual({
            email: 'teste@teste.com', 
            password: '123456'
        })
    })
})