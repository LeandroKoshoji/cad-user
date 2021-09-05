
import Home from '@/views/Home'
import { mount } from '@vue/test-utils'

describe('Home', () => {
    it('Welcome renders logged User name', () => {
        const wrapper = mount(Home)

        const loggedUser = wrapper.vm.loggedUser

        const welcome = wrapper.find('.home__welcome')

        expect(welcome.html()).toContain(`Olá, ${loggedUser.name}`)
    })

    it('Route', () => {
        const wrapper = mount(Home)

        const loggedUser = wrapper.vm.loggedUser

        const link = wrapper.find('router-link')

        expect(link.html()).toContain(`/edit/${loggedUser.uid}`)
    })
})