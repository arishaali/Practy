import { mount, config } from '@vue/test-utils'
import NotificationBar from '@/components/NotificationBar.vue'
import Navbar from '@/components/Navbar.vue'
config.showDeprecationWarnings = false

describe("Navbar.vue", () => {
    it("check if notification component exists", async () => {

        const wrapper = mount(Navbar)
       
        expect(wrapper.findComponent(NotificationBar).exists()).toBe(true)
    
})
    it("if notification bar is not visible", () => {
        const wrapper = mount(Navbar)
        expect(wrapper.find("#notification").isVisible()).toBe(false);
    })
})